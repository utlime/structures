(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@utlime/heap')) :
  typeof define === 'function' && define.amd ? define(['exports', '@utlime/heap'], factory) :
  (factory((global.UtlimePriorityQueue = {}),global.UtlimeHeap));
}(this, (function (exports,heap) { 'use strict';

  class PriorityQueue {
      constructor(min = false) {
          this.counter = 0;
          this.heap = new heap.BinaryHeap(({ priority: priorityA, item: itemA }, { priority: priorityB, item: itemB }) => {
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

  exports.PriorityQueue = PriorityQueue;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
