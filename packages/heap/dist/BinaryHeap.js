import { BinaryTree } from './BinaryTree';
export class BinaryHeap {
    storage = new BinaryTree();
    comparator;
    constructor(comparator) {
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
