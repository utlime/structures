import { BinaryHeap } from '../src';

describe('BinaryHeap', () => {
  it('should keep right priority order by default', () => {
    const heap = new BinaryHeap<Number>();

    [1, 4, 2, 3, 3, 9, 9, 4, 4].forEach(value => {
      heap.insert(value, value);
    });

    [9, 9, 4, 4, 4, 3, 3, 2, 1, undefined].forEach(expected => {
      expect(heap.extract()).toBe(expected);
    });
  });
  it('should keep right priority order', () => {
    const heap = new BinaryHeap<Number>(({ priority: a }, { priority: b }) => a <= b);

    [1, 4, 2, 3, 3, 9, 9, 4, 4].forEach(value => {
      heap.insert(value, value);
    });

    [1, 2, 3, 3, 4, 4, 4, 9, 9, undefined].forEach(expected => {
      expect(heap.extract()).toBe(expected);
    });
  });
});
