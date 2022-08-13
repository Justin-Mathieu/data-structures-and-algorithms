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
    let remove = this.top;
    let newTop = remove?.next;
    if (remove !== undefined) {
      newTop = remove.next;
      remove.next = undefined;
    } else {
      throw new Error("Empty LIst");
    }
    return remove.item;
  }

  isEmpty(stack: Stack<T>): boolean {
    if (this.top) {
      return true;
    } else {
      return false;
    }
  }
}
interface Node<T> {
  item: T;
  next: Node<T> | undefined;
}
