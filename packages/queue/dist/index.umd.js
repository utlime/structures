(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.UtlimeQueue = {})));
}(this, (function (exports) { 'use strict';

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

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
