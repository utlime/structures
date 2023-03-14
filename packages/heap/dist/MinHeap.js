import { BinaryHeap } from './BinaryHeap';
export class MinHeap {
    heap;
    constructor() {
        this.heap = new BinaryHeap(({ priority: a }, { priority: b }) => a <= b);
    }
    insert(item, priority) {
        this.heap.insert(item, priority);
    }
    extract() {
        return this.heap.extract();
    }
}
