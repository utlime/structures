import { BinaryHeap } from './BinaryHeap';
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
//# sourceMappingURL=MaxHeap.js.map