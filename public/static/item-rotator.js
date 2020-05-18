export default class {
    constructor(items) {
        if (!Array.isArray(items) || items.length == 0) {
            throw new Error("Item rotator needs items to rotate over.");
        }
        this.items = items;
        this.current = 0;
    }

    nextIndex() {
        if (this.current == this.items.length - 1) {
            return 0;
        } else {
            return this.current + 1;
        }
    }

    previousIndex() {
        if (this.current == 0) {
            return this.items.length - 1;
        } else {
            return this.current - 1;
        }
    }

    next() {
        this.current = this.nextIndex()
        return this.items[this.current];
    }

    previous() {
        this.current = this.previousIndex()
        return this.items[this.current];
    }

    peekNext() {
        return this.items[this.nextIndex()]
    }

    peekPrevious() {
        return this.items[this.previousIndex()]
    }

    current(){
        return this.current;
    }
}