export class ThrottleSkipError extends Error {
    constructor(message) {
        super(message ?? 'This task was skipped');
    }
}
