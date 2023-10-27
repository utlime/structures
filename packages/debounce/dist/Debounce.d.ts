import type { IDebounce } from './IDebounce';
export declare class Debounce implements IDebounce {
    private timeout;
    private timerId;
    constructor(timeout: number);
    add(task: Function): void;
    wrap<T extends (...args: any[]) => void>(func: T): T;
}
