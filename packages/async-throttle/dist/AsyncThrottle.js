import { ThrottleSkipError } from './ThrottleSkipError';
export class AsyncThrottle {
    currentTask;
    trailingTask;
    trailingReject;
    trailing = false;
    constructor(options = { trailing: false }) {
        if (options.trailing) {
            this.trailing = true;
        }
    }
    add(task) {
        if (this.currentTask == null) {
            const promise = task();
            this.currentTask = promise.finally(() => {
                delete this.currentTask;
                if (this.trailing) {
                    this.trailingTask?.();
                    delete this.trailingReject;
                    delete this.trailingTask;
                }
            });
            return promise;
        }
        if (this.trailing) {
            this.trailingReject?.();
            return new Promise((resolve, reject) => {
                this.trailingReject = () => {
                    reject(new ThrottleSkipError());
                };
                this.trailingTask = () => {
                    resolve(this.add(task));
                };
            });
        }
        return Promise.reject(new ThrottleSkipError());
    }
}
