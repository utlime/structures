import type { IAsyncConcurrentLimit, Task } from './IAsyncConcurrentLimit';

export abstract class AsyncConcurrentLimit<O> implements IAsyncConcurrentLimit<O> {
  private readonly limit: number;
  private active: Set<ReturnType<Task<any>>>;
  private process: ReturnType<Task<any>> | null;

  protected constructor(limit: number) {
    this.limit = limit;
    this.active = new Set();
    this.process = null;
  }

  protected abstract push<T>(task: Task<T>, options?: O): void;
  protected abstract pull(): Task<any> | undefined;

  add<T>(task: Task<T>, options?: O): ReturnType<Task<T>> {
    const result = this.schedule(task, options);

    this.runProcess();

    return result;
  }

  private runTask<T>(task: Task<T>) {
    const promise = task();

    this.active.add(promise);

    promise.finally(() => this.active.delete(promise));

    return promise;
  }

  private runTasks() {
    let nextTask;
    while (this.active.size < this.limit && (nextTask = this.pull()) != null) {
      this.runTask(nextTask);
    }
  }

  private schedule<T>(task: Task<T>, options?: O): ReturnType<Task<T>> {
    return new Promise(resolve => {
      const wrapped: Task<T> = () => {
        const promise = task();

        resolve(promise);

        return promise;
      };

      this.push(wrapped, options);
    });
  }

  private runProcess() {
    if (this.process == null) {
      const loop = (): Promise<any> => {
        this.runTasks();

        if (this.active.size === 0) {
          return Promise.resolve();
        }

        return Promise.race(this.active).then(loop, loop);
      };

      this.process = Promise.resolve()
        .then(loop)
        .finally(() => {
          this.process = null;
        });
    } else {
      Promise.resolve().then(() => this.runTasks());
    }
  }
}
