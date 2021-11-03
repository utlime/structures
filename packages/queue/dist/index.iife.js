var UtlimeQueue = (function (exports) {
  'use strict';

  class Queue {
      constructor() {
          this.root = null;
          this.tail = null;
      }
      dequeue() {
          if (this.root != null) {
              const [item, root] = this.root;
              if (this.root === this.tail) {
                  this.root = this.tail = root;
              }
              else {
                  this.root = root;
              }
              return item;
          }
          return undefined;
      }
      enqueue(item) {
          const wrapped = [item, null];
          if (this.tail != null) {
              this.tail[1] = wrapped;
              this.tail = wrapped;
          }
          else {
              this.root = wrapped;
              this.tail = wrapped;
          }
      }
  }

  exports.Queue = Queue;

  return exports;

}({}));
//# sourceMappingURL=index.iife.js.map
