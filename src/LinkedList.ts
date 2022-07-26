import { Collection, display } from "./Collection";

export class LinkedList<T> implements Collection<T> {
  start: Node<T> | undefined;
  insert(item: T) {
    this.start = {
      item: item,
      next: this.start,

    };

  }
  includes(item: T): boolean {
    let current = this.start;
    while (current !== undefined) {
      if (current.item === item) {
        return true;
      }
      current = current.next

    }
    return false;
  }
  toString(): string {
    let current = this.start;
    let str = '';
    while (current !== undefined) {
      let item = display(current.item);
      str += `{ ${current.item} } -> `;
      current = current.next;
    }
    return `${str}NULL`;
  }
}
interface Node<T> {
  item: T;
  next: Node<T> | undefined;
}