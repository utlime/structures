import { BinaryHeap } from './BinaryHeap.js';
export class MaxHeap {
    heap;
    constructor() {
        this.heap = new BinaryHeap();
    }
    insert(item, priority) {
        this.heap.insert(item, priority);
    }
    extract() {
        return this.heap.extract();
    }
}
