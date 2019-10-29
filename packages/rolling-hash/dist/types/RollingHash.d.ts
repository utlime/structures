import { IRollingHash } from './IRollingHash';
export declare class RollingHash implements IRollingHash {
    private readonly base;
    private readonly max;
    constructor(base: number, max: number);
    hash(source: string): number;
    extend(hash: number, extension: string): number;
}
//# sourceMappingURL=RollingHash.d.ts.map