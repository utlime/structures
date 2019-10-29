declare type Bit = 0 | 1;
export declare class BitSet {
    private readonly map;
    private readonly size;
    constructor(size: number);
    set(position: number, value: Bit): void;
    get(position: number): Bit;
    toString(): string;
}
export {};
//# sourceMappingURL=BitSet.d.ts.map