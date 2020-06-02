import addCss from '../../../add-css.js'

export default Vue.component('job-item', {
    beforeCreate: function () {
        addCss('static/resume/experience/job-item/job-item.css');
    },
    template: `
    <div class="job-item c-stretch">
        <div class="content c-column c-stretch">
            <div class="job-header c">
                <div class="job-date c-column">
                    <div><b>{{job.period.from}}</b></div>
                    <div><b>{{job.period.to}}</b></div>
                </div>
                <div class='job-title c-column'>
                    <div><b>{{job.company}}</b></div>
                    <div>{{job.role}}</div>
                </div>
            </div>
            <div>{{job.responsibilities}}</div>
        </div>
    </div>`,

    props: ['job']
})