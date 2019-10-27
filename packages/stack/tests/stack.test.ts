import { Stack } from '../src';

describe('Stack', () => {
  it('should keep LIFO order', () => {
    const queue = new Stack<Number>();
    queue.push(1);
    queue.push(2);
    queue.push(3);

    expect(queue.pop()).toBe(3);
    expect(queue.pop()).toBe(2);
    expect(queue.pop()).toBe(1);
    expect(queue.pop()).toBe(undefined);
  });
});
