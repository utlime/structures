import { RollingHash } from '../src';

describe('RollingHash', () => {
  it('should be implemented correctly', () => {
    const base = 10;
    const max = 50;

    const hash = new RollingHash(base, max);

    const a = 'a'.charCodeAt(0);
    const b = 'b'.charCodeAt(0);
    const c = 'c'.charCodeAt(0);

    expect(hash.hash('abc')).toBe((a * base ** 2 + b * base ** 1 + c * base ** 0) % max);
  });
  it('should create different values for different sources', () => {
    const hash = new RollingHash(50, 1000);

    expect(hash.hash('abc')).not.toBe(hash.hash('acb'));
    expect(hash.hash('abc')).not.toBe(hash.hash('abcd'));
  });
  it('should be extendable', () => {
    const hash = new RollingHash(7, 1000);

    expect(hash.extend(hash.hash('ab'), 'cd')).toBe(hash.hash('abcd'));
  });
});
