var UtlimeQueue = (function (exports) {
  'use strict';

  class Queue {
      constructor() {
          this.storage = [];
      }
      dequeue() {
          return this.storage.shift();
      }
      enqueue(item) {
          this.storage.push(item);
      }
  }

  exports.Queue = Queue;

  return exports;

}({}));
//# sourceMappingURL=index.iife.js.map
