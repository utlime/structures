var UtlimeQueue = (function (exports) {
  'use strict';

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

  return exports;

}({}));
//# sourceMappingURL=index.iife.js.map
