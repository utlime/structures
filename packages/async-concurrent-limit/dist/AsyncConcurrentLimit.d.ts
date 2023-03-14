import type { IAsyncConcurrentLimit, Task } from './IAsyncConcurrentLimit';
export declare abstract class AsyncConcurrentLimit<O> implements IAsyncConcurrentLimit<O> {
    private readonly limit;
    private active;
    private process;
    protected constructor(limit: number);
    protected abstract push<T>(task: Task<T>, options?: O): void;
    protected abstract pull(): Task<any> | undefined;
    add<T>(task: Task<T>, options?: O): ReturnType<Task<T>>;
    private runTask;
    private runTasks;
    private schedule;
    private runProcess;
}
