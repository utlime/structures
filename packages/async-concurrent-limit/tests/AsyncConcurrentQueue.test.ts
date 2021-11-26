import { AsyncConcurrentQueue } from '../src';

describe('AsyncConcurrentQueue', () => {
  it('should not run more tasks that limit', async () => {
    const task = () =>
      new Promise(resolve => {
        setTimeout(resolve);
      });

    const concurrentLimit = new AsyncConcurrentQueue(3);

    const p1 = concurrentLimit.add(task);
    const p2 = concurrentLimit.add(task);
    const p3 = concurrentLimit.add(task);

    const extraTask = jest.fn(task);

    const p4 = concurrentLimit.add(extraTask);

    expect(extraTask).not.toBeCalled();

    await Promise.all([p1, p2, p3]);

    expect(extraTask).toBeCalled();
  });

  it('should run tasks in correct order', async () => {
    let index: number = 0;
    const order: number[] = [];

    const task = () => {
      const taskNumber = (index += 1);
      return () =>
        new Promise(resolve => {
          setTimeout(() => {
            order.push(taskNumber);
            resolve(taskNumber);
          });
        });
    };

    const concurrentLimit = new AsyncConcurrentQueue(3);

    const tasks = [];

    tasks.push(concurrentLimit.add(task()));
    tasks.push(concurrentLimit.add(task()));
    tasks.push(concurrentLimit.add(task()));
    tasks.push(concurrentLimit.add(task()));
    tasks.push(concurrentLimit.add(task()));
    tasks.push(concurrentLimit.add(task()));
    tasks.push(concurrentLimit.add(task()));

    await Promise.all(tasks);

    tasks.push(concurrentLimit.add(task()));
    tasks.push(concurrentLimit.add(task()));
    tasks.push(concurrentLimit.add(task()));

    await Promise.all(tasks);

    expect(order).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('should run tasks in correct order 2', async () => {
    let index: number = 0;
    const order: number[] = [];

    const task = (delay: number = 0) => {
      const taskNumber = (index += 1);
      return () =>
        new Promise(resolve => {
          setTimeout(() => {
            order.push(taskNumber);
            resolve(taskNumber);
          }, delay);
        });
    };

    const concurrentLimit = new AsyncConcurrentQueue(3);

    const tasks = [];

    tasks.push(concurrentLimit.add(task(50)));
    tasks.push(concurrentLimit.add(task(100)));
    tasks.push(concurrentLimit.add(task(150)));

    await tasks[0];

    tasks.push(concurrentLimit.add(task()));

    await tasks[3];

    await Promise.all(tasks);

    expect(order).toEqual([1, 4, 2, 3]);
  });
});
