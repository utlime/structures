import { IPriorityQueue } from './IPriorityQueue';
export declare class PriorityQueue<T> implements IPriorityQueue<T> {
    private heap;
    private counter;
    constructor(min?: boolean);
    dequeue(): T | undefined;
    enqueue(queueItem: T, priority: number): void;
}
//# sourceMappingURL=PriorityQueue.d.ts.map