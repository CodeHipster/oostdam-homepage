import addCss from './add-css.js'
import navigation from './navigation/navigation.js';
import kiteboarding from './kiteboarding/kiteboarding.js';
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
        <resume v-if="activeItem == 'my resume'"></resume>
    </div>`
})