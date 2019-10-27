import { IHeap } from './IHeap';
declare type PriorityItem<T> = Readonly<{
    item: T;
    priority: number;
}>;
declare type isAGreaterOrEqualB<T> = (a: T, b: T) => boolean;
export declare class BinaryHeap<T> implements IHeap<T> {
    private readonly storage;
    private readonly comparator;
    constructor(comparator?: isAGreaterOrEqualB<PriorityItem<T>>);
    extract(): T | undefined;
    insert(item: T, priority: number): void;
    private compare;
}
export {};
//# sourceMappingURL=BinaryHeap.d.ts.map