import { Queue } from '@utlime/queue';
import { AsyncConcurrentLimit } from './AsyncConcurrentLimit.js';
import type { Task } from './IAsyncConcurrentLimit';

export class AsyncConcurrentQueue extends AsyncConcurrentLimit<undefined> {
  protected queue: Queue<Task<any>>;

  constructor(limit: number) {
    super(limit);

    this.queue = new Queue();
  }
  protected push<T>(task: Task<T>) {
    this.queue.enqueue(task);
  }

  protected pull(): Task<any> | undefined {
    return this.queue.dequeue();
  }
}
