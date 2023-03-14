import { BinaryHeap } from '@utlime/heap';
export class PriorityQueue {
    heap;
    counter = 0;
    constructor(min = false) {
        this.heap = new BinaryHeap(({ priority: priorityA, item: itemA }, { priority: priorityB, item: itemB }) => {
            if (priorityA != priorityB) {
                if (min) {
                    return priorityA < priorityB;
                }
                return priorityA > priorityB;
            }
            return itemA.order < itemB.order;
        });
    }
    dequeue() {
        const item = this.heap.extract();
        if (item != null) {
            return item.queueItem;
        }
        return undefined;
    }
    enqueue(queueItem, priority) {
        this.heap.insert({ queueItem, order: this.counter++ }, priority);
    }
}
//# sourceMappingURL=PriorityQueue.js.map