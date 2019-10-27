import { BinaryHeap } from '@utlime/heap';
import { IPriorityQueue } from './IPriorityQueue';

export class PriorityQueue<T> implements IPriorityQueue<T> {
  private heap: BinaryHeap<{ queueItem: T; order: number }>;

  private counter: number = 0;

  constructor(min: boolean = false) {
    this.heap = new BinaryHeap(({ priority: priorityA, item: itemA }, { priority: priorityB, item: itemB }) => {
      if (priorityA != priorityB) {
        if (min) {
          return priorityA < priorityB;
        }

        return priorityA > priorityB;
      }

      return itemA.order < itemB.order;
    });
  }

  dequeue(): T | undefined {
    const item = this.heap.extract();

    if (item != null) {
      return item.queueItem;
    }

    return undefined;
  }

  enqueue(queueItem: T, priority: number) {
    this.heap.insert({ queueItem, order: this.counter++ }, priority);
  }
}
