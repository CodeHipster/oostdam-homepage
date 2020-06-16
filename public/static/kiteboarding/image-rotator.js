import LoopList from '../loop-list.js'

export default class {

    constructor(applyImage) {
        this.loopList = undefined;
        this.interval = 8000;
        this.applyImage = applyImage;
        this.timer = setTimeout(function () { this.next(); }.bind(this), this.interval);
    }

    setImages(images) {
        this.loopList = new LoopList(images);
        this.applyImage(this.loopList.current())
        this.preload(this.loopList.peekNext());
        this.preload(this.loopList.peekPrevious());
    }

    next() {
        if (this.loopList) {
            var media = this.loopList.next();
            this.applyImage(media);
            this.preload(this.loopList.peekNext())

            this.setTimer(()=> this.next(), this.getInterval(media));
        }
    }

    previous() {
        if (this.loopList) {
            var media = this.loopList.previous();
            this.applyImage(media);
            this.preload(this.loopList.peekPrevious());
            
            this.setTimer(()=> this.previous(), this.getInterval(media));
        }
    }

    preload(image) {
        new Image().src = image;
    }

    destroy() {
        clearInterval(this.timer);
    }

    getInterval(image) {
        if (image.endsWith(".webp")) return 2 * this.interval; //Animations have twice the default interval.
        else return this.interval;
    }

    setTimer(method, interval){
        clearInterval(this.timer);
        this.timer = setTimeout(method, interval);
    }

}