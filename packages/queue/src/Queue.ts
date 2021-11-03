import { IQueue } from './IQueue';

type Item<T> = [T, Item<T> | null];

export class Queue<T> implements IQueue<T> {
  private root: Item<T> | null = null;
  private tail: Item<T> | null = null;

  dequeue(): T | undefined {
    if (this.root != null) {
      const [item, root] = this.root;

      if (this.root === this.tail) {
        this.root = this.tail = root;
      } else {
        this.root = root;
      }

      return item;
    }

    return undefined;
  }

  enqueue(item: T) {
    const wrapped: Item<T> = [item, null];

    if (this.tail != null) {
      this.tail[1] = wrapped;
      this.tail = wrapped;
    } else {
      this.root = wrapped;
      this.tail = wrapped;
    }
  }
}
