export class BitSet {
    map = new Map();
    size;
    constructor(size) {
        this.size = size;
    }
    set(position, value) {
        this.map.set(position % this.size, value);
    }
    get(position) {
        return this.map.get(position % this.size) || 0;
    }
    toString() {
        const str = [];
        for (let i = 0; i < this.size; i++) {
            str.push(this.get(i));
        }
        return str.join('');
    }
}
//# sourceMappingURL=BitSet.js.map