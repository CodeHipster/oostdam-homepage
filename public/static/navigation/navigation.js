import addCss from '../add-css.js'

export default {
    beforeCreate: function () {
        addCss('static/navigation/navigation.css');
    },
    template: `
    <div class=navigation>
        <div class=box>
            <div class="item name">Thijs Oostdam</div>
            <div class="item selected">my kiteboarding</div>
            <div class="item">my software</div>
            <div class="item">my resume</div>
        </div>
    </div>`
}