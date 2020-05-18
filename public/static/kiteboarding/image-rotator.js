import LoopList from '../loop-list.js'

export default class {

    loopList;
    applyImage;

    constructor(applyImage) {
        this.applyImage = applyImage;
    }

    setImages(images) {
        this.loopList = new LoopList(images);
        this.applyImage(this.loopList.current())
        this.preload(this.loopList.peekNext());
        this.preload(this.loopList.peekPrevious());
    }

    next() {
        if (this.loopList) {
            this.applyImage(this.loopList.next());
            this.preload(this.loopList.peekNext())
        }
    }

    previous() {
        if (this.loopList) {
            this.applyImage(this.loopList.previous());
            this.preload(this.loopList.peekPrevious());
        }
    }

    preload(image) {
        new Image().src = image;
    }


}