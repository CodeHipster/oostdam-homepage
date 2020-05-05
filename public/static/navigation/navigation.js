import addCss from '../add-css.js'
import navigationItem from './navigation-item/navigation-item.js'

export default {
    beforeCreate: function () {
        addCss('static/navigation/navigation.css');
    },
    created: function () {
        this.$emit('navigate', this.activeItem);
    },
    data: function () {
        return {
            items: [
                'my kiteboarding',
                'my software',
                'my resume',
            ],
            activeItem: 'my kiteboarding',
        }
    },
    components: {
        'navigation-item': navigationItem
    },
    methods:{
        navigate: function(item){
            this.activeItem = item;
            this.$emit('navigate', this.activeItem);
        }  
    },
    template: `
    <div class=navigation>
        <div class=box>
            <div class="name">Thijs Oostdam</div>
            <navigation-item v-for="item in items" :key="item" :title="item" :isActive="item == activeItem" @navigate="navigate"></navigation-item>
        </div>
    </div>`
}