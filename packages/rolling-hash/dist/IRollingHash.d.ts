export interface IRollingHash {
    hash(source: string): number;
    extend(hash: number, extension: string): number;
}
