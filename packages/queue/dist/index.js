var Queue = /** @class */ (function () {
    function Queue() {
        this.storage = [];
    }
    Queue.prototype.dequeue = function () {
        return this.storage.shift();
    };
    Queue.prototype.enqueue = function (item) {
        this.storage.push(item);
    };
    return Queue;
}());

export { Queue };
//# sourceMappingURL=index.js.map
