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
                {
                    title: "This website",
                    year: '2020',
                    image: 'static/software/media/website.png',
                    sourceCode: 'https://github.com/CodeHipster/oostdam-homepage',
                    tech: [
                        'Golang',
                        'JavaScript',
                        'VueJS',
                        'Html',
                        'Css',
                        'Flexbox',
                        'Google App Engine',
                    ],
                    description: "This website, made to showcase my hobbies(kiteboarding, software development) and my resume. It is running in the Google cloud using their App Engine serverless framework. Using VueJS and Flexbox to make it suitable for desktop and mobile devices.",
                    link: "/"
                },
                {
                    title: "Ray tracer",
                    year: '2020',
                    image: 'static/software/media/raytracer.png',
                    sourceCode: 'https://github.com/CodeHipster/java-raytracer',
                    tech: [
                        'Java',
                        'Java Flow',
                        'Java Swing'
                    ],
                    description: "A ray tracer made with only using Java (No dependencies on any other libraries). Using the Java 9 Modules to decouple the rendering from the viewing. Also using Java 9 Flow for reactive streams, this makes it possible to see the progress of the render by streaming the pixels that get traced. The ray tracer implements point lights, reflection and refraction.",
                },
                {
                    title: "Statics server",
                    year: '2020',
                    image: 'static/software/media/static-server.png',
                    sourceCode: 'https://github.com/CodeHipster/statics-server',
                    tech: [
                        'Golang'
                    ],
                    description: "A simple server made in Golang to serve static content (html, css, javascript, images etc.). Ideal for local development without having to install PHP or Node or CORS exceptions. Windows and unix binaries available. "
                },
                {
                    title: "Flutter clock",
                    year: '2020',
                    image: 'static/software/media/flutter-clock.png',
                    sourceCode: 'https://github.com/CodeHipster/flutter-fantasy-clock',
                    tech: [
                        'Dart',
                        'Flutter',
                        'WebP',
                    ],
                    description: "A fantasy themed clock made in Flutter(from Google) with the Dart language. Artwork made by Kaj Fischer."
                },
                {
                    title: "Style transfer",
                    year: '2019',
                    image: 'static/software/media/style-transfer.jpg',
                    tech: [
                        'Python',
                        'Tensorflow',
                    ],
                    description: "Learning the style from an image in a neural network and then applying that style to a 360 degrees video. The video is best watched with an AR/VR headset. Artwork made by Kaj Fischer.",
                    link: 'https://storage.googleapis.com/oostdam-website-static-content/lucy_360.mp4',
                },
                {
                    title: "Carpooling",
                    year: '2017',
                    image: 'static/software/media/carpool.png',
                    sourceCode: 'https://github.com/CodeHipster/java-carpool',
                    tech: [
                        'Java',
                        'JavaScript',
                        'Html',
                        'VueJS',
                        'Maven',
                        'SQL',
                        'REST',
                    ],
                    description: "Carpooling application with a Java backend, data stored using SQL and a vuejs frontend using googlemaps api.",
                },
                {
                    title: "Tic Tac Toe",
                    year: '2017',
                    image: 'static/software/media/tictactoe.png',
                    sourceCode: 'https://github.com/CodeHipster/ethereum-tictactoe',
                    tech: [
                        'Ethereum',
                        'Solidity',
                        'Blockchain',
                        'JavaScript',
                        'Html',
                    ],
                    description: "A simple game, but made for the ethereum network using smart contracts. Cheating is not possible (unless you beat the network) and the whole world can observe the result.",
                },
                {
                    title: "Drops in the pond",
                    year: '2016',
                    image: 'static/software/media/drops-in-pond.png',
                    sourceCode: 'https://github.com/CodeHipster/drops-in-the-pond',
                    tech: [
                        'JavaScript',
                    ],
                    description: "A fiddle made on a bored evening when the only thing available was a browser. It is a crude 2d water simulation. You can play with the simulation by following the link.",
                    link: 'static/software/drops/drops-in-pond.html',
                },
                {
                    title: "Snowflake",
                    year: '2015',
                    image: 'static/software/media/snowflake.png',
                    sourceCode: 'https://github.com/CodeHipster/snowFlake',
                    tech: [
                        'JavaScript',
                    ],
                    description: "A javascript application that renders a koch fractal. It uses streams to continously update the screen and keep the memory footprint at a minimum while still maintaining great performance. The number of lines drawn per frame is dynamic to keep a steady fps. Follow the link to see the app in action.",
                    link: 'static/software/snowflake/snowflake.html',
                },
                {
                    title: "Game of life",
                    year: '2015',
                    image: 'static/software/media/game-of-life.png',
                    sourceCode: 'https://github.com/CodeHipster/game-of-life',
                    tech: [
                        'JavaScript',
                    ],
                    description: "A javascript implementation of the 'game of life' by John Conway. A binary grid with a few simple rules can create complex patterns. Follow the link to play the game.",
                    link: 'static/software/game-of-life/index.html',
                },
            ],
            focussedProject: "none",
        }
    },
    methods: {
        focusEvent: function (projectTitle) {
            this.focussedProject = projectTitle
        },
        noFocusEvent: function () {
            this.focussedProject = "none"
        }
    },
    template: `
    <div class=software>
        <div class=content>
            <project-item 
            v-for="project in projects" 
            :key="project.title" 
            :project="project"
            :focus="focussedProject"
            @focus=focusEvent
            @noFocus=noFocusEvent></project-item>
        </div>
    </div>`
}