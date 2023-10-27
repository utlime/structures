export class Debounce {
    timeout;
    timerId = null;
    constructor(timeout) {
        this.timeout = timeout;
    }
    add(task) {
        clearTimeout(this.timerId);
        this.timerId = setTimeout(task, this.timeout);
    }
    wrap(func) {
        return ((...args) => this.add(() => func(...args)));
    }
}
