var UtlimeGreatestCommonDivisor = (function (exports) {
  'use strict';

  const GreatestCommonDivisor = (a, b) => {
      while (b > 0) {
          a %= b;
          [a, b] = [b, a];
      }
      return a;
  };

  exports.gcd = GreatestCommonDivisor;

  return exports;

}({}));
//# sourceMappingURL=index.iife.js.map
