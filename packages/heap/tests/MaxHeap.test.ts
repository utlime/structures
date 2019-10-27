import { MaxHeap } from '../src';

describe('MaxHeap', () => {
  it('should keep right priority order', () => {
    const heap = new MaxHeap<number>();

    [1, 4, 2, 3, 3, 9, 9, 4, 4].forEach(value => {
      heap.insert(value, value);
    });

    [9, 9, 4, 4, 4, 3, 3, 2, 1, undefined].forEach(expected => {
      expect(heap.extract()).toBe(expected);
    });
  });
});
