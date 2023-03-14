export class Stack {
    storage = [];
    pop() {
        return this.storage.pop();
    }
    push(item) {
        this.storage.push(item);
    }
}
