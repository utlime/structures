const GreatestCommonDivisor = (a, b) => {
    while (b > 0) {
        a %= b;
        [a, b] = [b, a];
    }
    return a;
};

export { GreatestCommonDivisor as gcd };
//# sourceMappingURL=index.js.map
