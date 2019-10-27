(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.UtlimeStack = {})));
}(this, (function (exports) { 'use strict';

  var Stack = /** @class */ (function () {
      function Stack() {
          this.storage = [];
      }
      Stack.prototype.pop = function () {
          return this.storage.pop();
      };
      Stack.prototype.push = function (item) {
          this.storage.push(item);
      };
      return Stack;
  }());

  exports.Stack = Stack;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
