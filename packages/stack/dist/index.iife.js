var UtlimeStack = (function (exports) {
  'use strict';

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

  return exports;

}({}));
//# sourceMappingURL=index.iife.js.map
