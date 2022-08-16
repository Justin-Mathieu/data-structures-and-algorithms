export class Queue<T> {
  front: Node<T> | undefined;
  rear: Node<T> | undefined;

  get size(): number {
    let size = 0;
    let current = this.front;
    while (current) {
      size += 1;
      current = current.next;
    }
    return size;
  }

  get peek(): T {
    if (this.front !== undefined) {
      return this.front.item;
    } else {
      throw new Error("Empty list");
    }
  }

  enqueue(t: T): void {
    let newNode = { item: t, next: this.front };

    if (this.front === undefined) {
      this.front = newNode;
    } else {
      while (this.front.next) {
        this.front = this.front.next;
      }
      this.front.next = newNode;
    }
  }

  dequeue(): T {
    if (this.front !== undefined) {
      this.front = this.front;
    } else {
      throw new Error("Empty list");
    }
    return this.front.item;
  }

  isEmpty(queue: Queue<T>): boolean {
    if (this.front !== undefined) {
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
0;
