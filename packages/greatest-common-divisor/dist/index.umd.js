(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.UtlimeGreatestCommonDivisor = {})));
}(this, (function (exports) { 'use strict';

  const GreatestCommonDivisor = (a, b) => {
      while (b > 0) {
          a %= b;
          [a, b] = [b, a];
      }
      return a;
  };

  exports.gcd = GreatestCommonDivisor;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
