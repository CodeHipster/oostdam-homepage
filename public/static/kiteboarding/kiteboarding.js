import addCss from '../add-css.js'
import ItemRotator from '../item-rotator.js'

export default {
    beforeCreate: function () {
        addCss('static/kiteboarding/kiteboarding.css');
    },
    created: function(){
            this.preload(this.itemRotator.peekNext);
            this.preload(this.itemRotator.peekPrevious);
    },
    data: function () {
        return {
            itemRotator: new ItemRotator([
                '/static/kiteboarding/media/DSC04484.JPG',
                '/static/kiteboarding/media/DSC04540.JPG',
                '/static/kiteboarding/media/DSC04583.JPG',
                '/static/kiteboarding/media/DSC04671.JPG',
                '/static/kiteboarding/media/DSC04681.JPG',
                '/static/kiteboarding/media/DSC04760.JPG',
                '/static/kiteboarding/media/DSC04697.JPG',
            ])
        }
    },
    methods: {
        next: function () {
            this.setBackground(this.itemRotator.next());
            console.log("preload next: " + this.itemRotator.peekNext());
            this.preload(this.itemRotator.peekNext())
        },
        previous: function () {
            this.setBackground(this.itemRotator.previous());
            this.preload(this.itemRotator.peekPrevious())
        },
        setBackground: function (image) {
            this.$el.style.backgroundImage = `url(${image})`;
        },
        preload: function (image) {
            new Image().src = image;
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