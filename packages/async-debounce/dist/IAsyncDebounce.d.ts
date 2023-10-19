export type Task<T> = () => Promise<T>;
export interface IAsyncDebounce {
    run<T>(task: Task<T>): Promise<T>;
}
