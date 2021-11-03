(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.UtlimeBloomFilter = {})));
}(this, (function (exports) { 'use strict';

  class BitSet {
      constructor(size) {
          this.map = new Map();
          this.size = size;
      }
      set(position, value) {
          this.map.set(position % this.size, value);
      }
      get(position) {
          return this.map.get(position % this.size) || 0;
      }
      toString() {
          const str = [];
          for (let i = 0; i < this.size; i++) {
              str.push(this.get(i));
          }
          return str.join('');
      }
  }

  class BloomFilter {
      constructor(size, hash) {
          this.bitSet = new BitSet(size);
          this.hash = hash;
      }
      add(item) {
          this.hash.forEach(hash => {
              this.bitSet.set(hash(item), 1);
          });
      }
      has(item) {
          return !this.hash.some(hash => this.bitSet.get(hash(item)) === 0);
      }
  }

  exports.BloomFilter = BloomFilter;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
