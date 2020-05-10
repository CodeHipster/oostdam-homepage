import addCss from '../add-css.js'
import projectItem from './project-item/project-item.js'

export default {
    beforeCreate: function () {
        addCss('static/software/software.css');
    },
    components: {
        'project-item': projectItem
    },
    data: function () {
        return {
            projects: [
                { title: "This website", year: '2020', image: 'static/software/media/website.png', url: 'https://github.com/CodeHipster/oostdam-homepage' },
                { title: "Ray tracer", year: '2020', image: 'static/software/media/raytracer.png', url: 'https://github.com/CodeHipster/java-raytracer' },
                { title: "Statics server", year: '2020', image: 'static/software/media/static-server.png', url: 'https://github.com/CodeHipster/statics-server' },
                { title: "Flutter clock", year: '2020', image: 'static/software/media/flutter-clock.png', url: 'https://github.com/CodeHipster/flutter-fantasy-clock' },
                { title: "Style transfer", year: '2019', image: 'static/software/media/style-transfer.jpg', url: 'static/software/media/lucy_360.mp4' },
                { title: "Carpooling", year: '2017', image: 'static/software/media/carpool.png', url: 'https://github.com/CodeHipster/java-carpool' },
                { title: "Tic Tac Toe", year: '2017', image: 'static/software/media/tictactoe.png', url: 'https://github.com/CodeHipster/ethereum-tictactoe' },
                { title: "Drops in the pond", year: '2016', image: 'static/software/media/drops-in-pond.png', url: 'static/software/drops-in-pond.html' },
                { title: "Snowflake", year: '2015', image: 'static/software/media/snowflake.png', url: 'https://github.com/CodeHipster/snowFlake' },
            ]
        }
    },
    template: `
    <div class=software>
        <div class=content>
            <project-item v-for="project in projects" :key="project.title" :project="project"></project-item>
        </div>
    </div>`
}