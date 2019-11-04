(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.UtlimeGreatestCommonDivisor = {})));
}(this, (function (exports) { 'use strict';

  var GreatestCommonDivisor = function (a, b) {
      var _a;
      while (b > 0) {
          a %= b;
          _a = [b, a], a = _a[0], b = _a[1];
      }
      return a;
  };

  exports.gcd = GreatestCommonDivisor;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
