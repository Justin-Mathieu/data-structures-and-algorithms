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

module.exports = Stack;
