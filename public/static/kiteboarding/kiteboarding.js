import addCss from '../add-css.js'

export default {
    beforeCreate: function () {
        addCss('static/kiteboarding/kiteboarding.css');
    },
    template: `
    <div class=kiteboarding>
    </div>`
}