class RollingHash {
    constructor(base, max) {
        this.base = base;
        this.max = max;
    }
    hash(source) {
        return this.extend(0, source);
    }
    extend(hash, extension) {
        let extended = hash;
        for (let i = 0; i < extension.length; i++) {
            extended = (this.base * extended + extension.charCodeAt(i)) % this.max;
        }
        return extended;
    }
}

export { RollingHash };
//# sourceMappingURL=index.js.map
