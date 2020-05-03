import addCss from '../add-css.js'

export default {
    beforeCreate: function () {
        addCss('static/kiteboarding/kiteboarding.css');
    },
    template: `
    <div class=kiteboarding>
        <div class=button-left>
            <img src='static/kiteboarding/arrow-left.png'>
        </div>
        <div class=button-right>
            <img src='static/kiteboarding/arrow-right.png'>
        </div>
    </div>`
}