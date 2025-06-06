import GlobalsBuffer from "./globals-buffer.js";
import ParticleBuffer from "./particle-buffer.js";
import CollisionPass from "./passes/collision-pass.js";
import DisplacementClipPass from "./passes/displacement-clip-pass.js";
import UpdateGravityClipPass from "./passes/update-gravity-clip-pass.js";
import GridSortPass from "./passes/grid-sort-pass.js";
import RenderPass from "./passes/render-pass.js";

export default class Engine {

  constructor(device, textureFormat, particleCount, size) {
    this.size = size
    this.device = device;
    this.particleCount = particleCount;
    // scaling to be able to use only i32 instead of floats.
    // This will give a 286_000_000 buffer before they over/underflow
    const range = 4026531840; //2^32 - 2^28; // close to max u32 (and divisable by 1024)
    const particlesPerCell = 30;
    // const range = Math.pow(2, 23) // within the float precision scale
    const physicsScale = range / size; // the size of a pixel
    this.physicsScale = physicsScale;
    const renderScale = range / 2; // to scale position back into clip space (-1,1)
    const min = range / -2; // To avoid a line of pixels being rendered out side of the screen
    const max = range / 2; 
    this.stepsPerSecond = 256 // run the verlet integrator at 256 frames per second
    this._speed = 100; // speed on which the simulation runs
    this.step = 0;

    const workgroupCount = this.particleCount / 64 + 1

    // const gravity = [0, 0];
    const gravity = [0, -10 * physicsScale]
    this.globalsBuffer = new GlobalsBuffer(device, gravity, size, physicsScale, renderScale, min, max, this.stepsPerSecond)
    const globalsGpuBuffer = this.globalsBuffer.buffer;

    this.particleBuffer = new ParticleBuffer(device, particleCount, range, min, max, physicsScale);
    const particleGpuBuffer = this.particleBuffer.gpuBuffer();
    const colorBuffer = this.particleBuffer._gpuColorBuffer;

    this.gravityPass = new UpdateGravityClipPass(device, globalsGpuBuffer, this.particleBuffer, workgroupCount);
    this.renderPass = new RenderPass(device, textureFormat, globalsGpuBuffer, particleGpuBuffer, colorBuffer, particleCount);

    this.gridSortPass = new GridSortPass(device, globalsGpuBuffer, particleGpuBuffer, workgroupCount, size, particlesPerCell)

    const gridBuffer = this.gridSortPass.gridBuffer;
    const gridCountBuffer = this.gridSortPass.gridCountBuffer;
    this.collisionPass = new CollisionPass(device, globalsGpuBuffer, particleGpuBuffer, gridBuffer, gridCountBuffer, particleCount, workgroupCount);

    this.displacementPass = new DisplacementClipPass(device, globalsGpuBuffer, this.collisionPass.displacementBuffer, this.particleBuffer, workgroupCount);
  }

  running(){
    return (this.physicsInterval == true)
  }

  debug(on) {
    this._debug = on;
    this.gridSortPass.debug(on)
    this.gravityPass.debug(on)
    this.collisionPass.debug(on, this.physicsScale)
  }

  speed(percentage) {
    this._speed = percentage;
    if(this.physicsInterval){
      clearInterval(this.physicsInterval);
      this.start();
    }
  }

  start() {
    this.debug(false)
    this.physicsInterval = setInterval(this.physicsLoop, (1000 / (this.stepsPerSecond * (this._speed / 100))));
  }

  stop() {
    clearInterval(this.physicsInterval);
    this.physicsInterval = undefined;
  }

  singleStep() {
    if (!this.physicsInterval) { // if not running
      this.physicsLoop();
    }
  }

  stepTo(target){
    if (!this.physicsInterval && target > this.step) { // if not running
      // disable debug while quickstepping
      const prevDebug = this._debug
      this.debug(false)
      const steps = target - this.step;
      for (let i = 0; i < steps; i++) {
        this.physicsLoop();
      }
      this.debug(prevDebug)
    }
  }

  // Separate physics loop from rendering, so they can run independently.
  // The render loop is tied to the requestAnimationFrame
  // The physics loop has no dependency. But we want to have a higher call rate to have less artifacts in the physics.
  physicsLoop = async () => {
    this.step++;
    const commandEncoder = this.device.createCommandEncoder();

    // Gravity pass 
    this.gravityPass.pass(commandEncoder);

    // Grid sort pass
    this.gridSortPass.pass(commandEncoder);

    // Collision pass
    this.collisionPass.pass(commandEncoder);

    // Displacement pass
    this.displacementPass.pass(commandEncoder);

    this.device.queue.submit([commandEncoder.finish()]);

    if (this._debug) {
      console.log(`\nStep: ${this.step}`)
      this.globalsBuffer.debugLog();
      // Debug logging, we have to log after finishing the command encoder. 
      // This will make sure the debug buffers are read after the physics logic is applied and the debug buffers are filled.
      await this.gravityPass.debugLog();
      await this.gridSortPass.debugLog();
      await this.collisionPass.debugLog();
      await this.displacementPass.debugLog();
    }
  }

  render(context) {
    const commandEncoder = this.device.createCommandEncoder();

    // Render Pass (Draw Particles)
    this.renderPass.pass(commandEncoder, context);

    this.device.queue.submit([commandEncoder.finish()]);
  }
}