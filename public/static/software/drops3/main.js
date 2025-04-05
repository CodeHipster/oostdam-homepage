import FPSTracker from "./fps.js";
import setupCanvas from "./canvas.js";
import setupDevice from "./device.js";
import Engine from "./engine/engine.js";

// This is the size of pixels in the canvas
// the size of the box in which the pixels live
// and the size of the grid for detecting collisions
const SIZE = 1024

async function main(particleCount) {

  var fps = new FPSTracker();
  
  const context = setupCanvas(SIZE);
  const presentationFormat = navigator.gpu.getPreferredCanvasFormat(); 
  const device = await setupDevice(context, presentationFormat);
  
  const engine = new Engine(device, presentationFormat, particleCount, SIZE);
  engine.start();
  
  async function renderLoop(timestamp) {
    fps.update(timestamp);
    engine.render(context);
    requestAnimationFrame(renderLoop);
  }

  requestAnimationFrame(renderLoop);
}

// quick start screen to control nr of particles
const container = document.createElement('div');
container.style.color = 'red'
container.textContent = "WARNING, you will want a decent gpu when running this."
// Input box for number of particles
const particleCountInput = document.createElement('input');
particleCountInput.type = 'number';
particleCountInput.value = 50000;
particleCountInput.placeholder = 'nr of particles';
particleCountInput.style.backgroundColor = "white";
particleCountInput.style.borderRadius = "2px";
particleCountInput.style.textAlign = "center";

const restartButton = document.createElement('button');
restartButton.textContent = 'start';
restartButton.addEventListener("click", () => {
    main(particleCountInput.value);
    document.body.removeChild(container);
});

container.appendChild(particleCountInput);
container.appendChild(restartButton);
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.gap = '10px';
document.body.appendChild(container);


