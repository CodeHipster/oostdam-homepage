import addCss from '../add-css.js'
import deviceType from '../device-type.js'
import navigationItem from './navigation-item/navigation-item.js'

export default {
    beforeCreate: function () {
        addCss('static/navigation/navigation.css');
    },
    created: function () {
        this.$emit('navigate', this.activeItem);
        console.log(screen.availWidth + " " + deviceType)
    },
    data: function () {
        return {
            items: [
                'my kiteboarding',
                'my software',
                'my resume',
            ],
            activeItem: 'my kiteboarding',
            deviceType: deviceType,
            showMenu: false, 
        }
    },
    components: {
        'navigation-item': navigationItem
    },
    methods:{
        navigate: function(item){
            this.activeItem = item;
            this.$emit('navigate', this.activeItem);
        },
        toggleMenu: function(){
            this.showMenu = !this.showMenu;
        }
    },
    template: `
    <div class="navigation c-center">
        <div class="menu i-grow c-column c-stretch" v-if="deviceType != 'desk'" @click="toggleMenu">
            <div class=c-center><img src='static/navigation/menu.svg'></div>
            <div class="items i-grow c-stretch c-column" v-if="showMenu">
                <div class="name i-grow c-center">Thijs Oostdam</div>
                <navigation-item v-for="item in items" :key="item" :title="item" :isActive="item == activeItem" @navigate="navigate"></navigation-item>
            </div>
        </div>
        <div class="desk i-grow c" v-if="deviceType == 'desk'">
            <div class="name i-grow c-center">Thijs Oostdam</div>
            <navigation-item v-for="item in items" :key="item" :title="item" :isActive="item == activeItem" @navigate="navigate"></navigation-item>
        </div>
    </div>`
}