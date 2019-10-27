(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.UtlimeQueue = {})));
}(this, (function (exports) { 'use strict';

  var Queue = /** @class */ (function () {
      function Queue() {
          this.storage = [];
      }
      Queue.prototype.dequeue = function () {
          return this.storage.shift();
      };
      Queue.prototype.enqueue = function (item) {
          this.storage.push(item);
      };
      return Queue;
  }());

  exports.Queue = Queue;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
