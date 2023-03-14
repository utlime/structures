import { Queue } from '@utlime/queue';
import { AsyncConcurrentLimit } from './AsyncConcurrentLimit';
export class AsyncConcurrentQueue extends AsyncConcurrentLimit {
    queue;
    constructor(limit) {
        super(limit);
        this.queue = new Queue();
    }
    push(task) {
        this.queue.enqueue(task);
    }
    pull() {
        return this.queue.dequeue();
    }
}
//# sourceMappingURL=AsyncConcurrentQueue.js.map