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
                    <img :src="project.image" :alt="project.title">
                    <div class=list> 
                        <div class=title>{{project.title}}</div>
                        <div>source: <a class=github target="_blank" :href="project.sourceCode">Github</a> </div>
                        <a class=link target="_blank" :href="project.link">Live demo</a>
                        <div class=year>{{project.year}}</div>
                    </div>
                </div>
                <div class=description>{{project.description}}</div>
            </div>
        </div>
    </div>`
}

{/* <img :src="project.image" :alt="project.title" v-if="focus != project.title">
<div class=info v-if="focus == project.title"> */}

// v-bind:class="{ transparent: show }"