import addCss from '../../../add-css.js'

export default Vue.component('education-item', {
    beforeCreate: function () {
        addCss('static/resume/experience/education-item/education-item.css');
    },
    template: `
    <div class="education-item i-grow c">
        <div class="date">
            <b>{{education.date}}</b>
        </div>
        <div class="description">
            <ul>
                <li v-for="name in education.names">{{name}}</li>
            </ul>
        </div>
    </div>`,

    props: ['education']
})