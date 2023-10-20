import { DebounceSkipError } from './DebounceSkipError';
export class AsyncDebounce {
    timeout;
    timerId = null;
    reject = null;
    constructor(timeout) {
        this.timeout = timeout;
    }
    run(task) {
        return new Promise((resolve, reject) => {
            this.reject?.(new DebounceSkipError());
            this.reject = reject;
            clearTimeout(this.timerId);
            this.timerId = setTimeout(() => {
                task()
                    .then(resolve, reject)
                    .finally(() => {
                    if (reject === this.reject) {
                        this.reject = null;
                    }
                });
            }, this.timeout);
        });
    }
    wrap(func) {
        return ((...args) => this.run(() => func(...args)));
    }
}
