var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
        this.storage = [];
    }
    BinaryTree.prototype.push = function (value) {
        this.storage.push(value);
    };
    BinaryTree.prototype.pop = function () {
        return this.storage.pop();
    };
    BinaryTree.prototype.swap = function (a, b) {
        var _a;
        _a = [this.storage[b], this.storage[a]], this.storage[a] = _a[0], this.storage[b] = _a[1];
    };
    BinaryTree.prototype.value = function (position) {
        return this.storage[position];
    };
    BinaryTree.prototype.parent = function (position) {
        var parent = Math.floor((position - 1) / 2);
        return this.exists(parent) ? parent : undefined;
    };
    BinaryTree.prototype.left = function (position) {
        var left = 2 * position + 1;
        return this.exists(left) ? left : undefined;
    };
    BinaryTree.prototype.right = function (position) {
        var right = 2 * position + 2;
        return this.exists(right) ? right : undefined;
    };
    BinaryTree.prototype.root = function () {
        return this.storage.length > 0 ? 0 : undefined;
    };
    BinaryTree.prototype.tail = function () {
        return this.storage.length > 0 ? this.storage.length - 1 : undefined;
    };
    BinaryTree.prototype.exists = function (a) {
        return a >= 0 && a < this.storage.length;
    };
    return BinaryTree;
}());

var BinaryHeap = /** @class */ (function () {
    function BinaryHeap(comparator) {
        this.storage = new BinaryTree();
        this.comparator = comparator != null ? comparator : function (_a, _b) {
            var a = _a.priority;
            var b = _b.priority;
            return a >= b;
        };
    }
    BinaryHeap.prototype.extract = function () {
        var root = this.storage.root();
        var tail = this.storage.tail();
        if (root != null && tail != null) {
            this.storage.swap(root, tail);
        }
        var item = this.storage.pop();
        var position = this.storage.root();
        while (position != null) {
            var left = this.storage.left(position);
            var right = this.storage.right(position);
            var next = void 0;
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
    };
    BinaryHeap.prototype.insert = function (item, priority) {
        this.storage.push({ item: item, priority: priority });
        var position = this.storage.tail();
        var parent = this.storage.parent(position);
        while (parent != null && !this.compare(parent, position)) {
            this.storage.swap(position, parent);
            position = parent;
            parent = this.storage.parent(position);
        }
    };
    BinaryHeap.prototype.compare = function (a, b) {
        return this.comparator(this.storage.value(a), this.storage.value(b));
    };
    return BinaryHeap;
}());

var MinHeap = /** @class */ (function () {
    function MinHeap() {
        this.heap = new BinaryHeap(function (_a, _b) {
            var a = _a.priority;
            var b = _b.priority;
            return a <= b;
        });
    }
    MinHeap.prototype.insert = function (item, priority) {
        this.heap.insert(item, priority);
    };
    MinHeap.prototype.extract = function () {
        return this.heap.extract();
    };
    return MinHeap;
}());

var MaxHeap = /** @class */ (function () {
    function MaxHeap() {
        this.heap = new BinaryHeap();
    }
    MaxHeap.prototype.insert = function (item, priority) {
        this.heap.insert(item, priority);
    };
    MaxHeap.prototype.extract = function () {
        return this.heap.extract();
    };
    return MaxHeap;
}());

export { BinaryHeap, MinHeap, MaxHeap };
//# sourceMappingURL=index.js.map
