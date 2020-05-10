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
    <div class=root>
        <navigation @navigate="navigate"></navigation>
        <kiteboarding v-if="activeItem == 'my kiteboarding'"></kiteboarding>
        <software v-if="activeItem == 'my software'"></software>
        <resume v-if="activeItem == 'my resume'"></resume>
    </div>`
})