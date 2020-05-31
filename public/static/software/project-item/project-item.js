import addCss from '../../add-css.js'
import deviceType from '../../device-type.js'

export default {
    beforeCreate: function () {
        addCss('static/software/project-item/project-item.css');
    },
    props: [
        'focus',
        'project'
    ],
    computed:{
        techConcat: function(){
            return this.project.tech.join(', ');
        }
    },
    methods: {
        // click: function () {
        //     window.open(this.project.url, '_blank');
        // }
        click: function(){
            if(deviceType != 'desk'){
                console.log("click")
                this.$emit('focus', this.project.title)
            }
        },
        mouseOver: function(){
            if(deviceType == 'desk'){
                console.log("mouseOver")
                this.$emit('focus', this.project.title)
            }
        },
        mouseLeave: function(){
            if(deviceType == 'desk'){
                console.log("mouseLeave")
                this.$emit('noFocus')
            }
        }
    },
    template: `
    <div class=project-item
        @click=click
        @mouseover=mouseOver
        @mouseleave=mouseLeave>        
        <div class=content>
            <img :src="project.image" :alt="project.title" v-if="focus != project.title">
            <div class=info v-if="focus == project.title">
                <div class=header>
                    <div class=list> 
                        <div class=title>{{project.title}}</div>
                        <div v-if="project.link">Showcase: <a class=link target="_blank" :href="project.link">{{project.title}}</a></div>
                        <div>source: <a class=github target="_blank" :href="project.sourceCode">Github</a> </div>
                        <div class=year>{{project.year}}</div>
                    </div>
                    <img :src="project.image" :alt="project.title">
                </div>
                <div class=description>{{project.description}}</div>
                <div class=tech><b>Technology used:</b> {{techConcat}}</div>
            </div>
        </div>
    </div>`
}

{/* <img :src="project.image" :alt="project.title" v-if="focus != project.title">
<div class=info v-if="focus == project.title"> */}

// v-bind:class="{ transparent: show }"