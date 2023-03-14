import { BinaryHeap } from './BinaryHeap';
import type { IHeap } from './IHeap';

export class MaxHeap<T> implements IHeap<T> {
  private readonly heap: BinaryHeap<T>;

  constructor() {
    this.heap = new BinaryHeap();
  }

  insert(item: T, priority: number) {
    this.heap.insert(item, priority);
  }

  extract(): T | undefined {
    return this.heap.extract();
  }
}
