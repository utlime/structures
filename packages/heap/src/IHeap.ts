export interface IHeap<T> {
  insert(item: T, priority: number): void;
  extract(): T | undefined;
}
