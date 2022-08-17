export class Stack<T> {
  top: Node<T> | undefined;

  get size(): number {
    let size = 0;
    let current = this.top;

    while (current) {
      size += 1;
      current = current.next;
    }
    return size;
  }

  get peek(): T {
    let current = this.top;
    if (current) {
      return current.item;
    } else {
      throw new Error("Empty LIst");
    }
  }

  push(t: T): void {
    let newNode = { item: t, next: this.top };
    this.top = newNode;
  }

  pop(): T {
    if (this.top !== undefined) {
      this.top = this.top.next;
    } else {
      throw new Error("Empty LIst");
    }
    return this.top.item;
  }

  isEmpty(stack: Stack<T>): boolean {
    if (this.top) {
      return false;
    } else {
      return true;
    }
  }
}
interface Node<T> {
  item: T;
  next: Node<T> | undefined;
}
