var Stack = /** @class */ (function () {
    function Stack() {
        this.storage = [];
    }
    Stack.prototype.pop = function () {
        return this.storage.pop();
    };
    Stack.prototype.push = function (item) {
        this.storage.push(item);
    };
    return Stack;
}());

export { Stack };
//# sourceMappingURL=index.js.map
