import { Debounce } from '../src';

function delay(timeout: number = 10) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

describe('Debounce', () => {
  it('should call only last task', async () => {
    const debounce = new Debounce(1);
    const tasks = [jest.fn(), jest.fn(), jest.fn()];

    tasks.forEach(task => {
      debounce.add(task);
    });

    await delay();

    expect(tasks[0]).not.toBeCalled();
    expect(tasks[1]).not.toBeCalled();
    expect(tasks[2]).toBeCalled();
  });

  it('should call only last task', async () => {
    const debounce = new Debounce(1);
    const fn = jest.fn();
    const wrap = debounce.wrap(fn);
    const tasks = [wrap, wrap, wrap];

    tasks.forEach(task => {
      task();
    });

    await delay();

    expect(fn).toBeCalledTimes(1);
  });
});
