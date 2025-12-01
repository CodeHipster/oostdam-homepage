import addCss from '../add-css.js'
import person from './person/person.js'
import experience from './experience/experience.js'
import voronoi from './background/voronoi-vue.js'

export default {
  beforeCreate: function () {
    addCss('static/resume/resume.css');
    addCss('static/resume/print.css', 'print');
  },
  components: {
    'person': person,
    'experience': experience,
    'voronoi': voronoi,
  },
  updated(){
    console.log("updated resume")
  },
  template: `
    <div class="resume i-grow c-stretch c-center">            

      <voronoi></voronoi>

      <div class="content i-grow c-stretch">
        <person></person>
        <experience></experience>
      </div>
    </div>`
}