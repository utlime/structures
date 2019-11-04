var GreatestCommonDivisor = function (a, b) {
    var _a;
    while (b > 0) {
        a %= b;
        _a = [b, a], a = _a[0], b = _a[1];
    }
    return a;
};

export { GreatestCommonDivisor as gcd };
//# sourceMappingURL=index.js.map
