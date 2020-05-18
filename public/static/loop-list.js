export default class {

    index;
    items;

    constructor(items) {
        if (!Array.isArray(items) || items.length < 2) {
            throw new Error("LoopList needs atleast 2 items to rotate over.");
        }
        this.items = items;
        this.index = 0;
    }

    nextIndex() {
        if (this.index == this.items.length - 1) {
            return 0;
        } else {
            return this.index + 1;
        }
    }

    previousIndex() {
        if (this.index == 0) {
            return this.items.length - 1;
        } else {
            return this.index - 1;
        }
    }

    next() {
        this.index = this.nextIndex()
        return this.items[this.index];
    }

    previous() {
        this.index = this.previousIndex()
        return this.items[this.index];
    }

    peekNext() {
        return this.items[this.nextIndex()]
    }

    peekPrevious() {
        return this.items[this.previousIndex()]
    }

    current(){
        return this.items[this.index];
    }
}