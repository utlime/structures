import { Queue } from '@utlime/queue';
import { AsyncConcurrentLimit } from './AsyncConcurrentLimit';
import type { Task } from './IAsyncConcurrentLimit';
export declare class AsyncConcurrentQueue extends AsyncConcurrentLimit<undefined> {
    protected queue: Queue<Task<any>>;
    constructor(limit: number);
    protected push<T>(task: Task<T>): void;
    protected pull(): Task<any> | undefined;
}
