class Stack {
  constructor(top) {
    this.top = top;
  }
  get size() {
    let size = 0;
    let current = this.top;

    while (current) {
      size += 1;
      current = current.next;
    }
    return size;
  }

  get peek() {
    let current = this.top;
    if (current) {
      return current.item;
    } else {
      throw new Error('Empty LIst');
    }
  }

  push(value) {
    let newNode = { item: value, next: this.top };
    this.top = newNode;
  }

  pop() {
    if (this.top !== undefined) {
      this.top = this.top.next;
    } else {
      throw new Error('Empty LIst');
    }
    return this.top.item;
  }

  isEmpty(stack) {
    if (stack.top) {
      return false;
    } else {
      return true;
    }
  }
}

class Queue {
  constructor(front) {
    this.front = front;

  }


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
      throw new Error('Empty list');
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
      this.front = this.front.next;
    } else {
      throw new Error('Empty list');
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

module.exports = Stack, Queue;
