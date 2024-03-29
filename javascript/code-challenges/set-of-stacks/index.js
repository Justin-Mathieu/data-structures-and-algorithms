export class SetOfStacks<T> {
  private stackArray: Stack<T>[] = [];

  // Must use the below Stack class internally.
  // When you need to create a new stack, do so with:
  //
  //    let stack = new Stack<T>(this.maxHeight);
  //
  constructor(private readonly maxHeight: number) { }

  push(t: T): void {
    if (this.stackArray.length === 0) {
      this.stackArray.push(new Stack < T > (this.maxHeight));
    }
    let top = this.stackArray[this.stackArray.length - 1];
    if (top.size === this.maxHeight) {
      top = new Stack < T > (this.maxHeight);
      this.stackArray.push(top);
    }
    top.push(t);
  }

  pop(): T | undefined {
    let top = this.stackArray[this.stackArray.length - 1];
    if (top) {
      let t = top.pop();
      if (top.size === 0) {
        this.stackArray.pop();
      }
      return t;
    }
    return undefined;
  }

  get peek(): T | undefined {
    let top = this.stackArray[this.stackArray.length - 1];
    if (top) {
      return top.peek;
    }
    return undefined;
  }

  // BONUS QUESTION
  get size(): number {
    return this.stackArray.reduce((c, s) => c + s.size, 0);
  }
}

class Stack {
  readonly _arr: T[] = [];

  constructor(private readonly maxHeight: number) { }

  push(t: T) {
    if (this._arr.length > this.maxHeight) {
      throw new Error("Stack toppled over!");
    }
    this._arr.push(t);
  }

  pop() {
    return this._arr.pop();
  }

  get peek(): T | undefined {
    return this._arr[this._arr.length - 1];
  }

  get size(): number {
    return this._arr.length;
  }
}
