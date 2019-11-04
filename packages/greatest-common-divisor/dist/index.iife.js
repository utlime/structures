var UtlimeGreatestCommonDivisor = (function (exports) {
  'use strict';

  var GreatestCommonDivisor = function (a, b) {
      var _a;
      while (b > 0) {
          a %= b;
          _a = [b, a], a = _a[0], b = _a[1];
      }
      return a;
  };

  exports.gcd = GreatestCommonDivisor;

  return exports;

}({}));
//# sourceMappingURL=index.iife.js.map
