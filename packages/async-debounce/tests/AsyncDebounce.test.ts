import { AsyncDebounce, DebounceSkipError } from '../src';

function delay(timeout: number = 10) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout, timeout);
  });
}

describe('AsyncDebounce', () => {
  it('should call only last task', async () => {
    const debounce = new AsyncDebounce(1);
    const tasks = [delay, delay, delay];
    const result = tasks.map(task => debounce.run(task));

    await expect(result[0]).rejects.toThrow(new DebounceSkipError());
    await expect(result[1]).rejects.toThrow(new DebounceSkipError());
    await expect(result[2]).resolves.toEqual(10);
  });
  it('should call all tasks', async () => {
    const debounce = new AsyncDebounce(1);

    await expect(debounce.run(delay)).resolves.toEqual(10);
    await expect(debounce.run(delay)).resolves.toEqual(10);
    await expect(debounce.run(delay)).resolves.toEqual(10);
  });
  it('should able to wrap task', async () => {
    const wrapped = new AsyncDebounce(1).wrap(delay);

    await expect(wrapped(1)).resolves.toEqual(1);
    await expect(wrapped(2)).resolves.toEqual(2);
    await expect(wrapped(3)).resolves.toEqual(3);
  });
  it('should be called after timeout', async () => {
    const timer1 = 75;
    const timer2 = 25;
    const fn = jest.fn().mockImplementation(delay);
    const wrapped = new AsyncDebounce(timer1 + timer2).wrap(fn);

    const result = wrapped(1);

    await delay(timer1);

    expect(fn).not.toBeCalled();

    await delay(timer2);

    expect(fn).toBeCalled();

    await result;
  });
});
