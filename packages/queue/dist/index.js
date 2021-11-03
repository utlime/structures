class Queue {
    constructor() {
        this.storage = [];
    }
    dequeue() {
        return this.storage.shift();
    }
    enqueue(item) {
        this.storage.push(item);
    }
}

export { Queue };
//# sourceMappingURL=index.js.map
