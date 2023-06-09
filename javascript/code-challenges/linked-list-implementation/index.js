

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    this.head = {
      value: value,
      next: this.head,
    };
  }

  includes(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }


  toString() {
    let current = this.head;
    let str = '';
    while (current !== null) {
      str += `{ ${current.value} } -> `;
      current = current.next;
    }
    return `${str}NULL`;
  }

  // Code challenge 06
  append(item) {
    let current = this.head;
    const newNode = new Node(item);
    if (!this.head) {
      this.insert(item);
      return;
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }

  }

  insertBefore(value, item) {
    let current = this.head;
    if (current.value === value) {
      this.insert(item);
    } else if (!this.includes(value)) {
      return 'Not found in list';
    } else {
      while (current.next.value !== value) {
        current = current.next;
      }
      const stashed = current.next;
      const newNode = { value: item, next: stashed };
      current.next = newNode;
    }
    this.length += 1;
  }

  insertAfter(value, item) {
    let newNode = new Node(item);
    if (!this.head) {
      this.head = newNode;
    }
    let current = this.head;
    while (current) {
      if (current.value === value) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
    current.next = newNode;
  }

  //Expertiment with kthFromEnd using an array (Probably not the best solution...)

  kthFromEnd(k) {
    let current = this.head;
    let anArray = [];
    if (this.length <= k) {
      throw new Error('Not in list');
    } else {
      while (current !== null) {
        anArray.push(current.item);
        current = current.next;
      }

      anArray.reverse();
      return anArray[k];
    }
  }
}

module.exports = { LinkedList, Node };
