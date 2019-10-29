import { IRollingHash } from './IRollingHash';

export class RollingHash implements IRollingHash {
  private readonly base: number;
  private readonly max: number;

  constructor(base: number, max: number) {
    this.base = base;
    this.max = max;
  }

  hash(source: string): number {
    return this.extend(0, source);
  }

  extend(hash: number, extension: string): number {
    let extended = hash;

    for (let i = 0; i < extension.length; i++) {
      extended = (this.base * extended + extension.charCodeAt(i)) % this.max;
    }

    return extended;
  }
}
