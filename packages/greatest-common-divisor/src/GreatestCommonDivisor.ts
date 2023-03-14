import type { IGreatestCommonDivisor } from './IGreatestCommonDivisor';

export const GreatestCommonDivisor: IGreatestCommonDivisor = (a, b) => {
  while (b > 0) {
    a %= b;
    [a, b] = [b, a];
  }

  return a;
};
