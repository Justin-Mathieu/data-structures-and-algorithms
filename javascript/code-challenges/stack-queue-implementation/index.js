const { isThisTypeNode } = require('typescript');
const { Node } = require('../linked-list-implementation');

class Stack {
  constructor() {
    this.top = null;
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

    this.top = new Node(value);
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
  constructor() {
    this.front = null;
    this.back = null;

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

  peek() {
    if (this.front) {
      return this.front.value;
    } else {
      throw new Error('Empty list');
    }
  }

  enqueue(value) {
    if (!this.front) {
      this.front = new Node(value);
    } else {
      while (this.front.next) {
        this.front = this.front.next;
      }
      this.front.next = new Node(value);
    }

  }


  dequeue() {
    let save;
    if (this.front) {
      save = this.front.value;
      if (this.front === this.back) {
        this.back = null;
      }
      this.front = this.front.next;
    }
    return save;
  }


  isEmpty() {
    if (this.front !== null) {
      return false;
    } else {
      return true;
    }
  }
}

module.exports = { Stack, Queue };
