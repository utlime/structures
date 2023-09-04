import { ThrottleSkipError } from './ThrottleSkipError';
import { Task, IAsyncThrottle } from './IAsyncThrottle';

export class AsyncThrottle implements IAsyncThrottle {
  private currentTask?: Promise<any>;
  private trailingTask?: () => void;
  private trailingReject?: () => void;
  private trailing: boolean = false;

  constructor(options: { trailing: boolean } = { trailing: false }) {
    if (options.trailing) {
      this.trailing = true;
    }
  }

  add<T>(task: Task<T>): Promise<T> {
    if (this.currentTask == null) {
      const promise = task();

      this.currentTask = promise.finally(() => {
        delete this.currentTask;

        if (this.trailing) {
          this.trailingTask?.();

          delete this.trailingReject;
          delete this.trailingTask;
        }
      });

      return promise;
    }

    if (this.trailing) {
      this.trailingReject?.();

      return new Promise((resolve, reject) => {
        this.trailingReject = () => {
          reject(new ThrottleSkipError());
        };

        this.trailingTask = () => {
          resolve(this.add(task));
        };
      });
    }

    return Promise.reject(new ThrottleSkipError());
  }
}
