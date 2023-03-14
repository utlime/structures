export const GreatestCommonDivisor = (a, b) => {
    while (b > 0) {
        a %= b;
        [a, b] = [b, a];
    }
    return a;
};
