import { Debounce } from '../src';

function delay(timeout: number) {
  return new Promise(resolve => {
    setTimeout(resolve, 10);
  });
}

describe('Debounce', () => {
  it('should call only last task', async () => {
    const debounce = new Debounce(1);
    const tasks = [jest.fn(), jest.fn(), jest.fn()];

    tasks.forEach(task => {
      debounce.add(task);
    });

    await delay(10);

    expect(tasks[0]).not.toBeCalled();
    expect(tasks[1]).not.toBeCalled();
    expect(tasks[2]).toBeCalled();
  });
});
