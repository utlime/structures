import { AsyncDebounce, DebounceSkipError } from '../src';

function delay(timeout: number = 10) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout, true);
  });
}

describe('AsyncDebounce', () => {
  it('should call only last task', async () => {
    const debounce = new AsyncDebounce(1);
    const tasks = [delay, delay, delay];
    const result = tasks.map(task => debounce.run(task));

    await expect(result[0]).rejects.toThrow(new DebounceSkipError());
    await expect(result[1]).rejects.toThrow(new DebounceSkipError());
    await expect(result[2]).resolves.toBeTruthy();
  });
  it('should call all tasks', async () => {
    const debounce = new AsyncDebounce(1);

    await expect(debounce.run(delay)).resolves.toBeTruthy();
    await expect(debounce.run(delay)).resolves.toBeTruthy();
    await expect(debounce.run(delay)).resolves.toBeTruthy();
  });
});
