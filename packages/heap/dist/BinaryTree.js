export class BinaryTree {
    storage = [];
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
