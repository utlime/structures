export type Task<T> = () => Promise<T>;
export interface IAsyncThrottle {
    add<T>(task: Task<T>): Promise<T>;
}
