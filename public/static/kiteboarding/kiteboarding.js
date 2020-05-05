import addCss from '../add-css.js'

export default {
    beforeCreate: function () {
        addCss('static/kiteboarding/kiteboarding.css');
    },
    template: `
    <div class=kiteboarding>
        <div class=button-left>
            <img src='static/kiteboarding/arrow-left.svg'>
        </div>
        <div class=button-right>
            <img src='static/kiteboarding/arrow-right.svg'>
        </div>
    </div>`
}