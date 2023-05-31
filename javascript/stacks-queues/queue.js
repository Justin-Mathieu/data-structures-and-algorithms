class Queue {
  front = this.front;
  rear = this.rear;

  get size() {
    let size = 0;
    let current = this.front;
    while (current) {
      size += 1;
      current = current.next;
    }
    return size;
  }

  get peek() {
    if (this.front !== undefined) {
      return this.front.item;
    } else {
      throw new Error("Empty list");
    }
  }

  enqueue(t) {
    let newNode = { item: t, next: undefined };

    if (this.front === undefined) {
      this.front = newNode;
    } else {
      while (this.front.next) {
        this.front = this.front.next;
      }
      this.front.next = newNode;
    }
  }

  dequeue() {
    if (this.front !== undefined) {
      this.front = this.front;
    } else {
      throw new Error("Empty list");
    }
    return this.front.item;
  }

  isEmpty(queue) {
    if (queue.front !== undefined) {
      return false;
    } else {
      return true;
    }
  }
}

