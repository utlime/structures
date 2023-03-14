import type { IHeap } from './IHeap';
type PriorityItem<T> = Readonly<{
    item: T;
    priority: number;
}>;
type isAGreaterOrEqualB<T> = (a: T, b: T) => boolean;
export declare class BinaryHeap<T> implements IHeap<T> {
    private readonly storage;
    private readonly comparator;
    constructor(comparator?: isAGreaterOrEqualB<PriorityItem<T>>);
    extract(): T | undefined;
    insert(item: T, priority: number): void;
    private compare;
}
export {};
