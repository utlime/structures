import { AsyncThrottle, ThrottleSkipError } from '../src';

describe('AsyncThrottle', () => {
  const createTask = () =>
    jest.fn(
      () =>
        new Promise(resolve => {
          setTimeout(resolve);
        })
    );

  test('it should throttle', async () => {
    const tasks = [createTask(), createTask(), createTask()];
    const throttle = new AsyncThrottle();
    await Promise.allSettled(tasks.map(task => throttle.add(task)));

    expect(tasks[0]).toHaveBeenCalled();
    expect(tasks[1]).not.toHaveBeenCalled();
    expect(tasks[2]).not.toHaveBeenCalled();
  });

  test('it should throttle single task as well', async () => {
    const task = createTask();
    const tasks = [task, task, task];
    const throttle = new AsyncThrottle();
    await Promise.allSettled(tasks.map(task => throttle.add(task)));

    expect(task).toBeCalledTimes(1);
  });

  test('it should not throttle once previous task resolved', async () => {
    const tasks = [createTask(), createTask(), createTask()];
    const throttle = new AsyncThrottle();
    await Promise.allSettled(tasks.slice(0, 2).map(task => throttle.add(task)));
    await Promise.allSettled(tasks.slice(2).map(task => throttle.add(task)));

    expect(tasks[0]).toHaveBeenCalled();
    expect(tasks[1]).not.toHaveBeenCalled();
    expect(tasks[2]).toHaveBeenCalled();
  });

  test('it should throw error for throtled tasks', async () => {
    const tasks = [createTask(), createTask()];
    const throttle = new AsyncThrottle();
    const result = await Promise.allSettled(tasks.map(task => throttle.add(task)));

    expect(result[0].status).toEqual('fulfilled');
    expect(result[1].status).toEqual('rejected');
    if (result[1].status === 'rejected') {
      expect(result[1].reason).toBeInstanceOf(ThrottleSkipError);
    }
  });

  test('it should throttle except trailing', async () => {
    const tasks = [createTask(), createTask(), createTask(), createTask()];
    const throttle = new AsyncThrottle({ trailing: true });
    await Promise.allSettled(tasks.map(task => throttle.add(task)));

    expect(tasks[0]).toHaveBeenCalled();
    expect(tasks[1]).not.toHaveBeenCalled();
    expect(tasks[2]).not.toHaveBeenCalled();
    expect(tasks[3]).toHaveBeenCalled();
  });
});
