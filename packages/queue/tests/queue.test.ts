import { Queue } from '../src';

describe('Queue', () => {
  it('should keep FIFO order', () => {
    const queue = new Queue<Number>();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBe(undefined);
  });
});
