import { IQueue } from './IQueue';
export declare class Queue<T> implements IQueue<T> {
    private root;
    private tail;
    dequeue(): T | undefined;
    enqueue(item: T): void;
}
//# sourceMappingURL=Queue.d.ts.map