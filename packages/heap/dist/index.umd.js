(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.UtlimeHeap = {})));
}(this, (function (exports) { 'use strict';

  class BinaryTree {
      constructor() {
          this.storage = [];
      }
      push(value) {
          this.storage.push(value);
      }
      pop() {
          return this.storage.pop();
      }
      swap(a, b) {
          [this.storage[a], this.storage[b]] = [this.storage[b], this.storage[a]];
      }
      value(position) {
          return this.storage[position];
      }
      parent(position) {
          const parent = Math.floor((position - 1) / 2);
          return this.exists(parent) ? parent : undefined;
      }
      left(position) {
          const left = 2 * position + 1;
          return this.exists(left) ? left : undefined;
      }
      right(position) {
          const right = 2 * position + 2;
          return this.exists(right) ? right : undefined;
      }
      root() {
          return this.storage.length > 0 ? 0 : undefined;
      }
      tail() {
          return this.storage.length > 0 ? this.storage.length - 1 : undefined;
      }
      exists(a) {
          return a >= 0 && a < this.storage.length;
      }
  }

  class BinaryHeap {
      constructor(comparator) {
          this.storage = new BinaryTree();
          this.comparator = comparator != null ? comparator : ({ priority: a }, { priority: b }) => a >= b;
      }
      extract() {
          const root = this.storage.root();
          const tail = this.storage.tail();
          if (root != null && tail != null) {
              this.storage.swap(root, tail);
          }
          const item = this.storage.pop();
          let position = this.storage.root();
          while (position != null) {
              const left = this.storage.left(position);
              const right = this.storage.right(position);
              let next;
              if (right != null && left != null && !this.compare(left, right)) {
                  next = right;
              }
              else if (left != null) {
                  next = left;
              }
              if (next != null && !this.compare(position, next)) {
                  this.storage.swap(position, next);
                  position = next;
              }
              else {
                  position = undefined;
              }
          }
          return item != null ? item.item : undefined;
      }
      insert(item, priority) {
          this.storage.push({ item, priority });
          let position = this.storage.tail();
          let parent = this.storage.parent(position);
          while (parent != null && !this.compare(parent, position)) {
              this.storage.swap(position, parent);
              position = parent;
              parent = this.storage.parent(position);
          }
      }
      compare(a, b) {
          return this.comparator(this.storage.value(a), this.storage.value(b));
      }
  }

  class MinHeap {
      constructor() {
          this.heap = new BinaryHeap(({ priority: a }, { priority: b }) => a <= b);
      }
      insert(item, priority) {
          this.heap.insert(item, priority);
      }
      extract() {
          return this.heap.extract();
      }
  }

  class MaxHeap {
      constructor() {
          this.heap = new BinaryHeap();
      }
      insert(item, priority) {
          this.heap.insert(item, priority);
      }
      extract() {
          return this.heap.extract();
      }
  }

  exports.BinaryHeap = BinaryHeap;
  exports.MinHeap = MinHeap;
  exports.MaxHeap = MaxHeap;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
