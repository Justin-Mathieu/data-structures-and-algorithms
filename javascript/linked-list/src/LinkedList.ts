import { Node } from "@babel/traverse";
import { append } from "../../node_modules/cheerio/lib/api/manipulation";
import { Collection, display } from "./Collection";

export class LinkedList<T> implements Collection<T> {
  head: Node<T> | undefined;
  length = 0;

  insert(item: T) {
    this.head = {
      item: item,
      next: this.head,
    };
    this.length += 1;
  }

  includes(item: T): boolean {
    let current = this.head;
    while (current !== undefined) {
      if (current.item === item) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
  toString(): string {
    let current = this.head;
    let str = "";
    while (current !== undefined) {
      let item = display(current.item);
      str += `{ ${current.item} } -> `;
      current = current.next;
    }
    return `${str}NULL`;
  }

  // Code challenge 06
  append(item: T): void {
    let current = this.head;
    const newNode = { item: item, next: undefined };
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

  insertBefore(value: T, item: T) {
    let current = this.head;
    if (current.item === value) {
      this.insert(item);
    } else if (!this.includes(value)) {
      return "Not found in list";
    } else {
      while (current.next.item !== value) {
        current = current.next;
      }
      const stashed = current.next;
      const newNode = { item: item, next: stashed };
      current.next = newNode;
    }
    this.length += 1;
  }

  insertAfter(value: T, item: T) {
    let Node1 = { item: item, next: undefined };
    let current = this.head;
    if (current.item === value) {
      current.next = Node1;
    } else {
      while (current.item !== value) {
        current = current.next;
      }
      const stashed = current.next;
      const newNode = { item: item, next: stashed };
      current.next = newNode;
    }
    this.length += 1;
  }

  //Expertiment with kthFromEnd using an array (Probably not the best solution...)

  kthFromEnd(k: number) {
    let current = this.head;
    let anArray = [];
    if (this.length <= k) {
      throw new Error("Not in list");
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
  static zip(list1: LinkedList<any>, list2: LinkedList<any>) {
    let newList = new LinkedList();
    let currentll1 = list1.head;
    let currentll2 = list2.head;

    let counter = 0;
    while (currentll1 && currentll2) {
      if (counter % 2 === 0) {
        newList.append(currentll1?.item);
        currentll1 = currentll1?.next;
      }
      if (counter % 2 !== 0) {
        newList.append(currentll2?.item);
        currentll2 = currentll2?.next;
      }

      counter += 1;
    }

    if (currentll1 === undefined) {
      newList.append(currentll2?.item);
      currentll1 = currentll2?.next;
    }
    if (currentll2 === undefined) {
      newList.append(currentll1?.item);
      currentll2 = currentll1?.next;
    }
    return newList;
  }
}

interface Node<T> {
  item: T;
  next: Node<T> | undefined;
}