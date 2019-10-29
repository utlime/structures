var UtlimeBloomFilter = (function (exports) {
  'use strict';

  var BitSet = /** @class */ (function () {
      function BitSet(size) {
          this.map = new Map();
          this.size = size;
      }
      BitSet.prototype.set = function (position, value) {
          this.map.set(position % this.size, value);
      };
      BitSet.prototype.get = function (position) {
          return this.map.get(position % this.size) || 0;
      };
      BitSet.prototype.toString = function () {
          var str = [];
          for (var i = 0; i < this.size; i++) {
              str.push(this.get(i));
          }
          return str.join('');
      };
      return BitSet;
  }());

  var BloomFilter = /** @class */ (function () {
      function BloomFilter(size, hash) {
          this.bitSet = new BitSet(size);
          this.hash = hash;
      }
      BloomFilter.prototype.add = function (item) {
          var _this = this;
          this.hash.forEach(function (hash) {
              _this.bitSet.set(hash(item), 1);
          });
      };
      BloomFilter.prototype.has = function (item) {
          var _this = this;
          return !this.hash.some(function (hash) { return _this.bitSet.get(hash(item)) === 0; });
      };
      return BloomFilter;
  }());

  exports.BloomFilter = BloomFilter;

  return exports;

}({}));
//# sourceMappingURL=index.iife.js.map
