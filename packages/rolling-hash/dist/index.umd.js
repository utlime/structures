(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.UtlimeRollingHash = {})));
}(this, (function (exports) { 'use strict';

  class RollingHash {
      constructor(base, max) {
          this.base = base;
          this.max = max;
      }
      hash(source) {
          return this.extend(0, source);
      }
      extend(hash, extension) {
          let extended = hash;
          for (let i = 0; i < extension.length; i++) {
              extended = (this.base * extended + extension.charCodeAt(i)) % this.max;
          }
          return extended;
      }
  }

  exports.RollingHash = RollingHash;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
