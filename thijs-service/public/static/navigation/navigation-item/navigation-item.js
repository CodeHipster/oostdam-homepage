import addCss from '../../add-css.js'

export default {
    beforeCreate: function () {
        addCss('static/navigation/navigation-item/navigation-item.css');
    },
    props: [
        'title',
        'isActive'
    ],
    methods: {
        click: function () {
            this.$emit('navigate', this.title)
        }
    },
    template: `
    <div class="navigation-item i-grow c-center" v-bind:class="{ selected: isActive }" @click="click">{{title}}</div>`
}