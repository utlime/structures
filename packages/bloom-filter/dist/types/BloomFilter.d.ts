import { IBloomFilter } from './IBloomFilter';
export declare class BloomFilter<T> implements IBloomFilter<T> {
    private readonly bitSet;
    private readonly hash;
    constructor(size: number, hash: Array<(item: T) => number>);
    add(item: T): void;
    has(item: T): boolean;
}
//# sourceMappingURL=BloomFilter.d.ts.map