import type { IHeap } from './IHeap';
export declare class MaxHeap<T> implements IHeap<T> {
    private readonly heap;
    constructor();
    insert(item: T, priority: number): void;
    extract(): T | undefined;
}
