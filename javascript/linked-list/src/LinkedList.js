
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

  insert(item) {
    this.head = {
      value: item,
      next: this.head,
    };
    this.length += 1;
  }

  includes(item) {
    let current = this.head;
    while (current !== undefined) {
      if (current.value === item) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
  toString() {
    let current = this.head;
    let str = "";
    while (current !== undefined) {
      str += `{ ${current.value} } -> `;
      current = current.next;
    }
    return `${str}NULL`;
  }

  // Code challenge 06
  append(item) {
    let current = this.head;
    const newNode = { value: item, next: undefined };
    if (this.head === undefined) {
      this.insert(item);
      return;
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length += 1;
  }

  insertBefore(value, item) {
    let current = this.head;
    if (current.value === value) {
      this.insert(item);
    } else if (!this.includes(value)) {
      return "Not found in list";
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
    let Node1 = { value: item, next: undefined };
    let current = this.head;
    if (current.value === value) {
      current.next = Node1;
    } else {
      while (current.value !== value) {
        current = current.next;
      }
      const stashed = current.next;
      const newNode = { value: item, next: stashed };
      current.next = newNode;
    }
    this.length += 1;
  }

  //Expertiment with kthFromEnd using an array (Probably not the best solution...)

  kthFromEnd(k) {
    let current = this.head;
    let anArray = [];
    if (this.length <= k) {
      throw new Error('Not in list');
    } else {
      while (current !== undefined) {
        anArray.push(current.item);
        current = current.next;
      }

      anArray.reverse();
      return anArray[k];
    }
  }

  //Code Challenge 08 Zip
  zip(list1, list2) {
    let newList = new LinkedList;
    let currentll1 = list1.head;
    let currentll2 = list2.head;

    let counter = 0;
    while (currentll1 && currentll2) {
      if (counter % 2 === 0) {
        newList.append(currentll1.value);
        currentll1 = currentll1.next;
      }
      if (counter % 2 !== 0) {
        newList.append(currentll2.item);
        currentll2 = currentll2.next;
      }

      counter += 1;
    }

    if (currentll1 === undefined) {
      newList.append(currentll2.item);
      currentll1 = currentll2.next;
    }
    if (currentll2 === undefined) {
      newList.append(currentll1.item);
      currentll2 = currentll1.next;
    }
    return newList;
  }
}

module.exports = LinkedList;
