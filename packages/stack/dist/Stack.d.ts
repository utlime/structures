import type { IStack } from './IStack';
export declare class Stack<T> implements IStack<T> {
    private storage;
    pop(): T | undefined;
    push(item: T): void;
}
