(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.UtlimeStack = {})));
}(this, (function (exports) { 'use strict';

  class Stack {
      constructor() {
          this.storage = [];
      }
      pop() {
          return this.storage.pop();
      }
      push(item) {
          this.storage.push(item);
      }
  }

  exports.Stack = Stack;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
