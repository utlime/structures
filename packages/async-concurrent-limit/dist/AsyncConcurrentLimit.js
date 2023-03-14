export class AsyncConcurrentLimit {
    limit;
    active;
    process;
    constructor(limit) {
        this.limit = limit;
        this.active = new Set();
        this.process = null;
    }
    add(task, options) {
        const result = this.schedule(task, options);
        this.runProcess();
        return result;
    }
    runTask(task) {
        const promise = task();
        this.active.add(promise);
        promise.finally(() => this.active.delete(promise));
        return promise;
    }
    runTasks() {
        let nextTask;
        while (this.active.size < this.limit && (nextTask = this.pull()) != null) {
            this.runTask(nextTask);
        }
    }
    schedule(task, options) {
        return new Promise(resolve => {
            const wrapped = () => {
                const promise = task();
                resolve(promise);
                return promise;
            };
            this.push(wrapped, options);
        });
    }
    runProcess() {
        if (this.process == null) {
            const loop = () => {
                this.runTasks();
                if (this.active.size === 0) {
                    return Promise.resolve();
                }
                return Promise.race(this.active).then(loop, loop);
            };
            this.process = Promise.resolve()
                .then(loop)
                .finally(() => {
                this.process = null;
            });
        }
        else {
            Promise.resolve().then(() => this.runTasks());
        }
    }
}
//# sourceMappingURL=AsyncConcurrentLimit.js.map