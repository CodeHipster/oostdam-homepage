import addCss from './add-css.js'
import navigation from './navigation/navigation.js';
import kiteboarding from './kiteboarding/kiteboarding.js';
import software from './software/software.js';
import resume from './resume/resume.js';

new Vue({
    el: '.root',
    beforeCreate: function () {
        addCss('static/oostdam.css');
    },
    data: function(){
        return {
            activeItem: "",
            show: {
              kiteboarding: false,
              software: false,
              resume: false,
            }          
        }
    },
    components:{
        'kiteboarding': kiteboarding,
        'navigation': navigation,
        'resume': resume,
        'software': software
    },
    methods: {
        navigate: function (target){
            this.activeItem = target
        }
    },
    computed: {
      showKiteboarding(){
        return this.activeItem == 'my kiteboarding'
      },
      showSoftware(){
        return this.activeItem == 'my software'
      },
      showResume(){
        return this.activeItem == 'my resume'
      }
    },
    template: `
    <div class="root c-column">
        <navigation @navigate="navigate"></navigation>
        <kiteboarding v-show="showKiteboarding"></kiteboarding>
        <software v-show="showSoftware"></software>
        <resume v-show="showResume"></resume>
    </div>`
})