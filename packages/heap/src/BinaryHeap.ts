import { BinaryTree } from './BinaryTree';
import { IHeap } from './IHeap';

type PriorityItem<T> = Readonly<{ item: T; priority: number }>;

type isAGreaterOrEqualB<T> = (a: T, b: T) => boolean;

export class BinaryHeap<T> implements IHeap<T> {
  private readonly storage: BinaryTree<PriorityItem<T>> = new BinaryTree();

  private readonly comparator: isAGreaterOrEqualB<PriorityItem<T>>;

  constructor(comparator?: isAGreaterOrEqualB<PriorityItem<T>>) {
    this.comparator = comparator != null ? comparator : ({ priority: a }, { priority: b }) => a >= b;
  }

  extract(): T | undefined {
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
      } else if (left != null) {
        next = left;
      }

      if (next != null && !this.compare(position, next)) {
        this.storage.swap(position, next);
        position = next;
      } else {
        position = undefined;
      }
    }

    return item != null ? item.item : undefined;
  }

  insert(item: T, priority: number): void {
    this.storage.push({ item, priority });

    let position = <number>this.storage.tail();
    let parent = this.storage.parent(position);

    while (parent != null && !this.compare(parent, position)) {
      this.storage.swap(position, parent);
      position = parent;
      parent = this.storage.parent(position);
    }
  }

  private compare(a: number, b: number) {
    return this.comparator(<PriorityItem<T>>this.storage.value(a), <PriorityItem<T>>this.storage.value(b));
  }
}
