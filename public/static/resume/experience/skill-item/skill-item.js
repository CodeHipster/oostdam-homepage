import addCss from '../../../add-css.js'

export default Vue.component('skill-item', {
    beforeCreate: function () {
        addCss('static/resume/experience/skill-item/skill-item.css');
    },
    template: `
    <div class="skill i-grow i-center c-center">
        <div :style='opacity'><b>{{skill.name}}</b></div>
    </div>`,
    props: ['skill'],
    computed: {
        opacity: function () {
            return 'opacity: ' + this.skill.level / 100;
        }
    }
})