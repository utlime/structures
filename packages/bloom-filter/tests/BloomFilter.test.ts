import { BloomFilter } from '../src';

describe('BloomFilter', () => {
  it('should filter only missed items', () => {
    const hash = [
      (item: number) => item % 100,
      (item: number) => (item % 6) * 20,
      (item: number) => (item % 5) * 25,
      (item: number) => (item % 4) * 33 + 1,
    ];

    const bloomFilter = new BloomFilter(100, hash);

    bloomFilter.add(1);
    bloomFilter.add(5);
    bloomFilter.add(10);
    bloomFilter.add(9898);

    expect(bloomFilter.has(1)).toBeTruthy();
    expect(bloomFilter.has(5)).toBeTruthy();
    expect(bloomFilter.has(10)).toBeTruthy();
    expect(bloomFilter.has(9898)).toBeTruthy();

    expect(bloomFilter.has(11)).toBeFalsy();
    expect(bloomFilter.has(15)).toBeFalsy();
    expect(bloomFilter.has(99)).toBeFalsy();
    expect(bloomFilter.has(9999)).toBeFalsy();
  });
});
