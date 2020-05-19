import addCss from '../add-css.js'
import ImageRotator from './image-rotator.js'

export default {
    beforeCreate: function () {
        addCss('static/kiteboarding/kiteboarding.css');
    },
    mounted: function () {
        this.imageRotator.setImages(this.media);
    },
    destroyed: function(){
        console.log("destroyed kiteboarding");
        this.imageRotator.destroy();
    },
    data: function () {
        return {
            imageRotator: new ImageRotator(this.setBackground),
            media: [
                "static/kiteboarding/media/DSC04484.JPG",
                "static/kiteboarding/media/360-transition.webp",
                "static/kiteboarding/media/DSC04540.JPG",
                "static/kiteboarding/media/DSC04583.JPG",
                "static/kiteboarding/media/DSC04671.JPG",
                "static/kiteboarding/media/inverted-frontroll.webp",
                "static/kiteboarding/media/DSC04681.JPG",
                "static/kiteboarding/media/DSC04697.JPG",
                "static/kiteboarding/media/DSC04760.JPG",
            ]
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