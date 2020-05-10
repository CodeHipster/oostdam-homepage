import addCss from '../../add-css.js'

export default {
    beforeCreate: function () {
        addCss('static/software/project-item/project-item.css');
    },
    props:[
        'project'
    ],
    methods: {
        navigate: function(event){
            window.open(this.project.url,'_blank');
        }
    },
    template: `
    <div class=project-item @click='navigate'>
        <div class=content>
            <div class=title>{{project.title}}</div>
            <div class='project-image'>
            <img :src="project.image" :alt="project.title">
            <div class=year>{{project.year}}</div>
            </div>
        </div>
    </div>`
}