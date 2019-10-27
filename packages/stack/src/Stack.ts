import { IStack } from './IStack';

export class Stack<T> implements IStack<T> {
  private storage: T[] = [];

  pop(): T | undefined {
    return this.storage.pop();
  }

  push(item: T) {
    this.storage.push(item);
  }
}
