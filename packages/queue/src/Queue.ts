import { IQueue } from './IQueue';

export class Queue<T> implements IQueue<T> {
  private storage: T[] = [];

  dequeue(): T | undefined {
    return this.storage.shift();
  }

  enqueue(item: T) {
    this.storage.push(item);
  }
}
