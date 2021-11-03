(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.UtlimeQueue = {})));
}(this, (function (exports) { 'use strict';

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

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
