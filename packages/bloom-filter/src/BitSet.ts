type Bit = 0 | 1;

export class BitSet {
  private readonly map: Map<number, Bit> = new Map();
  private readonly size: number;

  constructor(size: number) {
    this.size = size;
  }

  set(position: number, value: Bit) {
    this.map.set(position % this.size, value);
  }

  get(position: number): Bit {
    return this.map.get(position % this.size) || 0;
  }

  toString(): string {
    const str = [];

    for (let i = 0; i < this.size; i++) {
      str.push(this.get(i));
    }

    return str.join('');
  }
}
