import { Stack } from '@utlime/stack';
import { AsyncConcurrentLimit } from './AsyncConcurrentLimit';
export class AsyncConcurrentStack extends AsyncConcurrentLimit {
    stack;
    constructor(limit) {
        super(limit);
        this.stack = new Stack();
    }
    push(task) {
        this.stack.push(task);
    }
    pull() {
        return this.stack.pop();
    }
}
