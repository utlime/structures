import { BinaryHeap } from './BinaryHeap';
import { IHeap } from './IHeap';

export class MinHeap<T> implements IHeap<T> {
  private readonly heap: BinaryHeap<T>;

  constructor() {
    this.heap = new BinaryHeap(({ priority: a }, { priority: b }) => a <= b);
  }

  insert(item: T, priority: number) {
    this.heap.insert(item, priority);
  }

  extract(): T | undefined {
    return this.heap.extract();
  }
}
