export default Vue.component('job-item', {
    template: `
    <div class=job-item>
        <div class="content">
            <div class="flex-column">
                <div class='job-header' >
                    <div class='job-date'><div>{{job.period.from}}</div><div>{{job.period.to}}</div></div>
                    <div class='job-title'>
                        <div>{{job.company}}</div><div>{{job.role}}</div>
                    </div>
                </div>
                <div>{{job.responsibilities}}</div>
            </div>
        </div>
    </div>`,

    props: ['job']
})