export default Vue.component('education-item', {
    template: `
    <div class=flex-row>
        <div class=date>
            {{education.date}}
        </div>
        <div class=description>
            <ul>
                <li v-for="name in education.names">{{name}}</li>
            </ul>
        </div>
    </div>`,

    props: ['education']
})