import { Stack } from '@utlime/stack';
import { AsyncConcurrentLimit } from './AsyncConcurrentLimit';
import type { Task } from './IAsyncConcurrentLimit';

export class AsyncConcurrentStack extends AsyncConcurrentLimit<undefined> {
  protected stack: Stack<Task<any>>;

  constructor(limit: number) {
    super(limit);

    this.stack = new Stack();
  }

  protected push<T>(task: Task<T>) {
    this.stack.push(task);
  }

  protected pull(): Task<any> | undefined {
    return this.stack.pop();
  }
}
