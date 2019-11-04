import { gcd } from '../src';

describe('GreatestCommonDivisor', () => {
  [
    { a: 50, b: 100, expected: 50 },
    { a: 75, b: 100, expected: 25 },
    { a: 7, b: 13, expected: 1 },
    { a: 100, b: 50, expected: 50 },
    { a: 50, b: 50, expected: 50 },
  ].forEach(({ a, b, expected }) => {
    it(`should should return ${expected} as gcd of ${a} and ${b}`, () => {
      expect(gcd(a, b)).toBe(expected);
    });
  });
});
