export class DebounceSkipError extends Error {
    constructor(message) {
        super(message ?? 'This task was skipped');
    }
}
