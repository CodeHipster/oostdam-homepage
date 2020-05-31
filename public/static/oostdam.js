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
            activeItem: ""            
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
    template: `
    <div class="root container-column">
        <navigation @navigate="navigate"></navigation>
        <kiteboarding v-show="activeItem == 'my kiteboarding'"></kiteboarding>
        <software v-show="activeItem == 'my software'"></software>
        <resume v-show="activeItem == 'my resume'"></resume>
    </div>`
})