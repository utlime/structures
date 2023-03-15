import { Queue } from '@utlime/queue';
import { AsyncConcurrentLimit } from './AsyncConcurrentLimit.js';
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
