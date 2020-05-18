import addCss from '../add-css.js'
import ImageRotator from './image-rotator.js'

export default {
    beforeCreate: function () {
        addCss('static/kiteboarding/kiteboarding.css');
    },
    created: function () {
        fetch('static/kiteboarding/media/')
            .then(response => response.text())
            .then(text => {
                var images = this.parseMedia("static/kiteboarding/media/", text);
                this.imageRotator.setImages(images);
            });
    },
    data: function () {
        return {
            imageRotator: new ImageRotator(this.setBackground)
        }
    },
    methods: {
        next: function () {
            this.imageRotator.next();
        },
        previous: function () {
            this.imageRotator.previous();
        },
        setBackground: function (image) {
            this.$el.style.backgroundImage = `url(${image})`;
        },
        parseMedia: function (prefix, html) {
            var el = document.createElement('html');
            el.innerHTML = html;

            var media = [];
            var hrefs = el.getElementsByTagName('a');
            var i;
            for (i = 0; i < hrefs.length; i++) {
                media.push(prefix + hrefs[i].getAttribute("href"));
            }

            return media;
        }
    },
    template: `
    <div class=kiteboarding>        
        <div class=arrow>
            <img src='static/kiteboarding/arrow-left.svg' @click='previous()'>
        </div>
        <div class=arrow>
            <img src='static/kiteboarding/arrow-right.svg' @click='next()'>
        </div>
    </div>`
}