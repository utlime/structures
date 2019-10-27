import { MinHeap } from '../src';

describe('MinHeap', () => {
  it('should keep right priority order', () => {
    const heap = new MinHeap<number>();

    [1, 4, 2, 3, 3, 9, 9, 4, 4].forEach(value => {
      heap.insert(value, value);
    });

    [1, 2, 3, 3, 4, 4, 4, 9, 9, undefined].forEach(expected => {
      expect(heap.extract()).toBe(expected);
    });
  });
});
