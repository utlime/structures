var UtlimeStack = (function (exports) {
  'use strict';

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

  return exports;

}({}));
//# sourceMappingURL=index.iife.js.map
