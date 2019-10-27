import { BinaryHeap } from '@utlime/heap';

var PriorityQueue = /** @class */ (function () {
    function PriorityQueue(min) {
        if (min === void 0) { min = false; }
        this.counter = 0;
        this.heap = new BinaryHeap(function (_a, _b) {
            var priorityA = _a.priority, itemA = _a.item;
            var priorityB = _b.priority, itemB = _b.item;
            if (priorityA != priorityB) {
                if (min) {
                    return priorityA < priorityB;
                }
                return priorityA > priorityB;
            }
            return itemA.order < itemB.order;
        });
    }
    PriorityQueue.prototype.dequeue = function () {
        var item = this.heap.extract();
        if (item != null) {
            return item.queueItem;
        }
        return undefined;
    };
    PriorityQueue.prototype.enqueue = function (queueItem, priority) {
        this.heap.insert({ queueItem: queueItem, order: this.counter++ }, priority);
    };
    return PriorityQueue;
}());

export { PriorityQueue };
//# sourceMappingURL=index.js.map
