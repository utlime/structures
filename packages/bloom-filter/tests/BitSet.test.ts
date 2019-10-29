import { BitSet } from '../src/BitSet';

describe('BitSet', () => {
  it('should put in correct position', () => {
    const bitSet = new BitSet(10);

    bitSet.set(3, 1);

    expect(bitSet.get(3)).toBe(1);
    expect(bitSet.get(1)).toBe(0);
  });
  it('should put in correct position when position out of size', () => {
    const bitSet = new BitSet(10);

    bitSet.set(10, 1);

    expect(bitSet.get(0)).toBe(1);
  });
  it('should return correct string representation', () => {
    const bitSet = new BitSet(10);

    bitSet.set(3, 1);
    bitSet.set(5, 1);
    bitSet.set(9, 1);

    expect(bitSet.toString()).toBe('0001010001');
  });
});
