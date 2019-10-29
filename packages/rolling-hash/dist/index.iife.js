var UtlimeRollingHash = (function (exports) {
  'use strict';

  var RollingHash = /** @class */ (function () {
      function RollingHash(base, max) {
          this.base = base;
          this.max = max;
      }
      RollingHash.prototype.hash = function (source) {
          return this.extend(0, source);
      };
      RollingHash.prototype.extend = function (hash, extension) {
          var extended = hash;
          for (var i = 0; i < extension.length; i++) {
              extended = (this.base * extended + extension.charCodeAt(i)) % this.max;
          }
          return extended;
      };
      return RollingHash;
  }());

  exports.RollingHash = RollingHash;

  return exports;

}({}));
//# sourceMappingURL=index.iife.js.map
