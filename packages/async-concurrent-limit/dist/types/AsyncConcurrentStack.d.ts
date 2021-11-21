import { Stack } from '@utlime/stack';
import { AsyncConcurrentLimit } from './AsyncConcurrentLimit';
import { Task } from './IAsyncConcurrentLimit';
export declare class AsyncConcurrentStack extends AsyncConcurrentLimit<undefined> {
    protected stack: Stack<Task<any>>;
    constructor(limit: number);
    protected push<T>(task: Task<T>): void;
    protected pull(): Task<any> | undefined;
}
//# sourceMappingURL=AsyncConcurrentStack.d.ts.map