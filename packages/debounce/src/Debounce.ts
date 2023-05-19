import type { IDebounce } from './IDebounce';

export class Debounce implements IDebounce {
  private timeout: number;
  private timerId: any = null;

  constructor(timeout: number) {
    this.timeout = timeout;
  }

  add(task: Function) {
    clearTimeout(this.timerId);
    this.timerId = setTimeout(task, this.timeout);
  }
}
