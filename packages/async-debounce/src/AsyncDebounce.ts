import { DebounceSkipError } from './DebounceSkipError';
import type { IAsyncDebounce, Task } from './IAsyncDebounce';

export class AsyncDebounce implements IAsyncDebounce {
  private timeout: number;
  private timerId: any = null;
  private reject: Function | null = null;

  constructor(timeout: number) {
    this.timeout = timeout;
  }

  run<T>(task: Task<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      this.reject?.(new DebounceSkipError());
      this.reject = reject;

      clearTimeout(this.timerId);
      this.timerId = setTimeout(() => {
        task()
          .then(resolve, reject)
          .finally(() => {
            if (reject === this.reject) {
              this.reject = null;
            }
          });
      }, this.timeout);
    });
  }

  wrap<V, T extends (...args: any[]) => Promise<V>>(func: T): T {
    return ((...args) => this.run<V>(() => func(...args))) as T;
  }
}
