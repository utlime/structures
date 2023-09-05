import type { Task, IAsyncThrottle } from './IAsyncThrottle';
export declare class AsyncThrottle implements IAsyncThrottle {
    private currentTask?;
    private trailingTask?;
    private trailingReject?;
    private trailing;
    constructor(options?: {
        trailing: boolean;
    });
    add<T>(task: Task<T>): Promise<T>;
}
