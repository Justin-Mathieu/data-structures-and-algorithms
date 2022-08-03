import { Node } from "@babel/traverse";
import { append } from "../../node_modules/cheerio/lib/api/manipulation";
import { Collection, display } from "./Collection";

export class LinkedList<T> implements Collection<T> {
  head: Node<T> | undefined;
  insert(item: T) {
    this.head = {
      item: item,
      next: this.head,
    };
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
  }
  // Code challenge 07
  //   kth(k: T) {
}

interface Node<T> {
  item: T;
  next: Node<T> | undefined;
}
