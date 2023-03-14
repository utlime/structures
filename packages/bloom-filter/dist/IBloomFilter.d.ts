export interface IBloomFilter<T> {
    add(item: T): void;
    has(item: T): boolean;
}
