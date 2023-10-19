import { DebounceSkipError } from './DebounceSkipError';
export class AsyncDebounce {
    timeout;
    timerId = null;
    reject = null;
    constructor(timeout) {
        this.timeout = timeout;
    }
    run(task) {
        clearTimeout(this.timerId);
        this.reject?.(new DebounceSkipError());
        return new Promise((resolve, reject) => {
            this.reject = reject;
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
}
