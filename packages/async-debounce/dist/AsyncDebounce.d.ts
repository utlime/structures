import type { IAsyncDebounce, Task } from './IAsyncDebounce';
export declare class AsyncDebounce implements IAsyncDebounce {
    private timeout;
    private timerId;
    private reject;
    constructor(timeout: number);
    run<T>(task: Task<T>): Promise<T>;
}
