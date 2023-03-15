import { BitSet } from './BitSet.js';
export class BloomFilter {
    bitSet;
    hash;
    constructor(size, hash) {
        this.bitSet = new BitSet(size);
        this.hash = hash;
    }
    add(item) {
        this.hash.forEach(hash => {
            this.bitSet.set(hash(item), 1);
        });
    }
    has(item) {
        return !this.hash.some(hash => this.bitSet.get(hash(item)) === 0);
    }
}
