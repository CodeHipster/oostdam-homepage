import { Voronoi } from "./rhill-voronoi.js";
import { sortHalfEdges } from "./edge-sorter.js";
import generator from "./node-generator.js";
import { Painter } from "./cell-painter.js";
import { ColorScheme } from "./color-scheme.js";
import { Color } from "./color.js";
import { NodeMover } from "./node-mover.js";
import { debounce } from "../../debounce.js";

function getCoords(elem) { // crossbrowser version
  var box = elem.getBoundingClientRect();

  var body = document.body;
  var docEl = document.documentElement;

  var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  var clientTop = docEl.clientTop || body.clientTop || 0;
  var clientLeft = docEl.clientLeft || body.clientLeft || 0;

  var top  = box.top +  scrollTop - clientTop;
  var left = box.left + scrollLeft - clientLeft;

  return { y: Math.round(top), x: Math.round(left) };
}

export default Vue.component('voronoi', {
  data() {
    return {
      height: 0,
      width: 0,
      stepTimer: null,
      resizeObserver: null
    }
  },
  methods: {
    start() {
      // TODO: depend node radius and amount on width and height.

      // generate nodes
      const voronoi = new Voronoi()
      const range = { x: this.width, y: this.height }
      const bbox = { xl: 0, xr: range.x, yt: 0, yb: range.y }
      const nodeRadius = 25
      const timestep = 15 // step every x ms
      let nodes = generator.generate(100, bbox, nodeRadius)
      if(nodes.length == 0){
        console.log("Could not generate any nodes. Not running voronoi animation.")
        return
      }
      const nodeMover = new NodeMover(nodeRadius, timestep, bbox)

      // paint the cells
      const scheme = new ColorScheme([
        { x: 50, y: 750, color: new Color(66, 242, 245) },
        { x: 750, y: 50, color: new Color(245, 176, 66) },
        { x: 50, y: 50, color: new Color(245, 32, 32) },
        { x: 750, y: 750, color: new Color(35, 252, 35) }
      ])
      const painter = new Painter(scheme)
      painter.paint(nodes)

      // get the canvas
      const ctx = document.getElementById("voronoi").getContext("2d")

      // recursively execute 
      const executeStep = ()=>{
        try {
          const start = window.performance.now()
          this.step(voronoi, bbox, nodes, nodeMover, ctx)
          const duration = window.performance.now() - start
          // console.log('step duration: ', duration)
          if (duration > timestep*5) {
            // if the hardware is way too slow. stop the interval.
            console.log('calculations took too long on device, stopping animation.', duration)
            return
          }
          // recursively call this function
          this.stepTimer = setTimeout(executeStep, Math.max(0,timestep-duration))
        } catch (error) {
          console.log("something broke, stopping the animation", error)
          return
        }
      }
      executeStep(); // start the recursion.
    },
    stop() {
      clearTimeout(this.stepTimer)
    },
    fitToParent() {
      // Make it visually fill the positioned parent
      const parent = this.$parent.$el
      this.width = parent.offsetWidth
      this.height = parent.offsetHeight

      const parentCoords = getCoords(parent)

      // set styling
      const canvas = this.$refs['voronoi-canvas']
      canvas.style.width = `${this.width}px`
      canvas.style.height = `${this.height}px`
      canvas.style.top = `${parentCoords.y}px`
      canvas.style.left = `${parentCoords.x}px`
      canvas.style.position = 'absolute'
      canvas.style.zIndex = "-1"

      // ...then set the internal size to match
      canvas.width = this.width
      canvas.height = this.height
    },
    step(voronoi, bbox, nodes, nodeMover, ctx) {
      let diagram = voronoi.compute(nodes, bbox)
      // console.log("diagram calculation took: ", diagram.execTime)

      // draw cells
      ctx.strokeStyle = '#606060';
      ctx.lineWidth = 3;
      for (const cell of diagram.cells) {
        sortHalfEdges(cell.halfedges)
        ctx.fillStyle = `rgb(${cell.site.color.r},${cell.site.color.g},${cell.site.color.b})`;
        ctx.beginPath();
        ctx.moveTo(cell.halfedges[0].edge.va.x, cell.halfedges[0].edge.va.y);
        for (const halfEdge of cell.halfedges) {
          const edge = halfEdge.edge
          ctx.lineTo(edge.vb.x, edge.vb.y);
        }
        ctx.closePath();
        ctx.stroke();
        ctx.fill()
      }

      nodeMover.moveNodes(diagram)

      // recycle the diagram for future use.
      voronoi.recycle(diagram);
    },
    resize(arg) {
      console.log("resizing, restarting the voronoi diagram on new dimensions")
      this.stop()
      this.fitToParent()
      this.start()
    }
  },
  mounted() {
    this.resizeObserver = new ResizeObserver(debounce(this.resize))
    this.resizeObserver.observe(this.$parent.$el)
  },
  beforeDestroy() {
    this.resizeObserver.unobserve(this.$parent.$el)
  },
  template: `
      <canvas ref="voronoi-canvas" id="voronoi">
        Your browser does not support the canvas element.
      </canvas>`
})