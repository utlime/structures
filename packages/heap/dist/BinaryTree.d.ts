export declare class BinaryTree<T> {
    private readonly storage;
    push(value: T): void;
    pop(): T | undefined;
    swap(a: number, b: number): void;
    value(position: number): T | undefined;
    parent(position: number): number | undefined;
    left(position: number): number | undefined;
    right(position: number): number | undefined;
    root(): number | undefined;
    tail(): number | undefined;
    exists(a: number): boolean;
}
