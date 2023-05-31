const Stack = require('./stack');
const Node = require('../linked-list/LinkedList');



class PseudoQueue {
  constructor(value) {
    this.stack1 = new Stack(new Node(value));
    this.stack2 = new Stack;
  }


  enqueue(value) {
    while (this.stack1 !== null) {
      this.stack2.push(this.stack1.pop());

    }
    this.stack1.push(new Node(value));

    while (this.stack2 !== null) {
      this.stack1.push(this.stack2.pop());
    }
  }

  dequeue() {
    while (this.stack1 !== null) {
      this.stack2.push(this.stack1.pop());
    }
    let popped = this.stack2.pop();


    while (this.stack2 !== null) {
      this.stack1.push(this.stack2.pop());
    }

    return popped.value;

  }
}

module.exports = PseudoQueue;
