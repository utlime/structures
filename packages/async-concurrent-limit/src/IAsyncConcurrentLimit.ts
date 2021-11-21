export type Task<T> = () => Promise<T>;

export interface IAsyncConcurrentLimit<O extends any> {
  add<T>(task: Task<T>, options: O): Promise<T>;
}
