import addCss from '../add-css.js'
import person from './person/person.js'
import experience from './experience/experience.js'

export default {
    beforeCreate: function () {
        addCss('static/resume/resume.css');
        addCss('static/resume/print.css', 'print');
    },
    components: {
        'person': person,
        'experience': experience,
    },
    template: `
    <div class=resume>
        <div class=content>
            <person></person>
            <experience></experience>
        </div>
    </div>`
}