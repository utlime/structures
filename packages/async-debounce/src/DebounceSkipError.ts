export class DebounceSkipError extends Error {
  constructor(message?: string) {
    super(message ?? 'This task was skipped');
  }
}
