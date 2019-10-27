export class BinaryTree<T> {
  private readonly storage: T[] = [];

  push(value: T) {
    this.storage.push(value);
  }

  pop(): T | undefined {
    return this.storage.pop();
  }

  swap(a: number, b: number) {
    [this.storage[a], this.storage[b]] = [this.storage[b], this.storage[a]];
  }

  value(position: number): T | undefined {
    return this.storage[position];
  }

  parent(position: number): number | undefined {
    const parent = Math.floor((position - 1) / 2);
    return this.exists(parent) ? parent : undefined;
  }

  left(position: number): number | undefined {
    const left = 2 * position + 1;
    return this.exists(left) ? left : undefined;
  }

  right(position: number): number | undefined {
    const right = 2 * position + 2;
    return this.exists(right) ? right : undefined;
  }

  root(): number | undefined {
    return this.storage.length > 0 ? 0 : undefined;
  }

  tail(): number | undefined {
    return this.storage.length > 0 ? this.storage.length - 1 : undefined;
  }

  exists(a: number): boolean {
    return a >= 0 && a < this.storage.length;
  }
}
