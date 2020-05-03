import addCss from './add-css.js'
import navigation from './navigation/navigation.js';
import kiteboarding from './kiteboarding/kiteboarding.js';

new Vue({
    el: '.root',
    beforeCreate: function () {
        addCss('static/oostdam.css');
    },
    components:{
        'kiteboarding': kiteboarding,
        'navigation': navigation
    },
    template: `
    <div class=root>
        <navigation></navigation>
        <kiteboarding></kiteboarding>
    </div>`
})