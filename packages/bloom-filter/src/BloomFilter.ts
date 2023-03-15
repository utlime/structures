import { BitSet } from './BitSet.js';
import type { IBloomFilter } from './IBloomFilter';

export class BloomFilter<T> implements IBloomFilter<T> {
  private readonly bitSet: BitSet;

  private readonly hash: Array<(item: T) => number>;

  constructor(size: number, hash: Array<(item: T) => number>) {
    this.bitSet = new BitSet(size);
    this.hash = hash;
  }

  add(item: T): void {
    this.hash.forEach(hash => {
      this.bitSet.set(hash(item), 1);
    });
  }

  has(item: T): boolean {
    return !this.hash.some(hash => this.bitSet.get(hash(item)) === 0);
  }
}
