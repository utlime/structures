import { PriorityQueue } from '../src';

describe('PriorityQueue', () => {
  it('should keep right max priority order', () => {
    const queue = new PriorityQueue<Number>();
    queue.enqueue(1, 3);
    queue.enqueue(2, 2);
    queue.enqueue(3, 1);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBe(undefined);
  });
  it('should keep right min priority order', () => {
    const queue = new PriorityQueue<Number>(true);
    queue.enqueue(1, 1);
    queue.enqueue(2, 2);
    queue.enqueue(3, 3);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBe(undefined);
  });
  it('should keep FIFO order', () => {
    const queue = new PriorityQueue<Number>();
    queue.enqueue(3, 1);
    queue.enqueue(4, 1);
    queue.enqueue(5, 1);
    queue.enqueue(1, 3);
    queue.enqueue(2, 2);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBe(4);
    expect(queue.dequeue()).toBe(5);
    expect(queue.dequeue()).toBe(undefined);
  });
});
