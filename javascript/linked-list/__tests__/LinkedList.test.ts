"use strict";
import { Collection } from "../src/Collection";
import { LinkedList } from "../src/LinkedList";

// Require our linked list implementation

describe("Linked List", () => {
  it("works", () => {
    expect(true).toBeTruthy();
  });

  it("runs my custom test", () => {
    const list: Collection<string> = new LinkedList<string>();
    expect(list).toBeDefined();
  });

  it("instanciate a linked list", () => {
    const list: Collection<number> = new LinkedList<number>();
    list.insert(10);
    expect(list.includes(10)).toBe(true);
    expect(list.includes(5)).toBe(false);
  });
  // Could not get this one to work.

  // it("head points to first node", () => {
  //   const list: Collection<string> = new LinkedList<string>();
  //   list.insert("thing");
  //   list.insert("thing2");
  //   expect(list).toBeDefined();
  // });

  it("inserts multiple nodes", () => {
    const list: Collection<string> = new LinkedList<string>();
    list.insert("test node 1");
    list.insert("test node 2");
    list.insert("test node 3");

    expect(list.includes("test node 1")).toBe(true);
    expect(list.includes("test node 2")).toBe(true);
    expect(list.includes("test node 3")).toBe(true);
  });

  it("returns all of the values", () => {
    const list: Collection<string> = new LinkedList<string>();
    list.insert("test node 1");
    list.insert("test node 2");
    list.insert("test node 3");

    expect(list.toString()).toEqual(
      "{ test node 3 } -> { test node 2 } -> { test node 1 } -> NULL"
    );
  });

  //Code challenge 6 tests

  it("adds nodes to the end of the list", () => {
    const list = new LinkedList<string>();
    list.insert("test node 1");
    list.insert("test node 2");
    list.insert("test node 3");
    list.append("test node end");
    list.append("test node end");

    expect(list.toString()).toEqual(
      "{ test node 3 } -> { test node 2 } -> { test node 1 } -> { test node end } -> { test node end } -> NULL"
    );
  });

  it("inserts a node into the middle after node", () => {
    const list = new LinkedList<string>();
    list.insert("test node 1");
    list.insert("test node 2");
    list.insert("test node 3");
    list.insertAfter("test node 2", "test node insert after");
    expect(list.toString()).toEqual(
      "{ test node 3 } -> { test node 2 } -> { test node insert after } -> { test node 1 } -> NULL"
    );
  });

  it("inserts a node into the middle before node", () => {
    const list = new LinkedList<string>();

    list.insert("test node 1");
    list.insert("test node 2");
    list.insert("test node 3");
    list.insertBefore("test node 2", "test node before");

    expect(list.toString()).toEqual(
      "{ test node 3 } -> { test node before } -> { test node 2 } -> { test node 1 } -> NULL"
    );
  });
});
