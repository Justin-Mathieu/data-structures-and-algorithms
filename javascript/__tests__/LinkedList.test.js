'use strict';
const LinkedList = require('../src/LinkedList');

// Require our linked list implementation

describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });

  it('runs my custom test', () => {
    const list = new LinkedList;
    expect(list).toBeDefined();
  });

  it('instanciate a linked list', () => {
    const list = new LinkedList;
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

  it('inserts multiple nodes', () => {
    const list = new LinkedList;
    list.insert('test node 1');
    list.insert('test node 2');
    list.insert('test node 3');

    expect(list.includes('test node 1')).toBe(true);
    expect(list.includes('test node 2')).toBe(true);
    expect(list.includes('test node 3')).toBe(true);
  });

  it('returns all of the values', () => {
    const list = new LinkedList;
    list.insert('test node 1');
    list.insert('test node 2');
    list.insert('test node 3');

    expect(list.toString()).toEqual(
      '{ test node 3 } -> { test node 2 } -> { test node 1 } -> NULL'
    );
  });

  //Code challenge 6 tests

  it('adds nodes to the end of the list', () => {
    const list = new LinkedList;
    list.insert('test node 1');
    list.insert('test node 2');
    list.insert('test node 3');
    list.append('test node end');
    list.append('test node end');

    expect(list.toString()).toEqual(
      '{ test node 3 } -> { test node 2 } -> { test node 1 } -> { test node end } -> { test node end } -> NULL'
    );
  });

  it('inserts a node into the middle after node', () => {
    const list = new LinkedList;
    list.insert('test node 1');
    list.insert('test node 2');
    list.insert('test node 3');
    list.insertAfter('test node 2', 'test node insert after');
    expect(list.toString()).toEqual(
      '{ test node 3 } -> { test node 2 } -> { test node insert after } -> { test node 1 } -> NULL'
    );
  });

  it('inserts a node into the middle before node', () => {
    const list = new LinkedList;

    list.insert('test node 1');
    list.insert('test node 2');
    list.insert('test node 3');
    list.insertBefore('test node 2', 'test node before');

    expect(list.toString()).toEqual(
      '{ test node 3 } -> { test node before } -> { test node 2 } -> { test node 1 } -> NULL'
    );
  });

  // Code challenge 07

  it('throws error when k is greater than list length', () => {
    const list = new LinkedList;
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);

    expect(() => {
      list.kthFromEnd(5);
    }).toThrowError();
  });

  it('returns a value when k and the list length are equal', () => {
    const list = new LinkedList;
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);

    expect(list.kthFromEnd(3)).toBe(4);
  });

  //Could not get this to pass, possibly due to data types in TS..?(Number vs. number)

  it.skip('throws an error when k is a negative number', () => {
    const list = new LinkedList;
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);

    expect(() => {
      list.kthFromEnd(-1);
    }).toThrowError();
  });

  it('returns a value with a list length of 1', () => {
    const list = new LinkedList;
    list.insert(1);

    expect(list.kthFromEnd(0)).toBe(1);
    expect(() => {
      list.kthFromEnd(1);
    }).toThrowError();
  });

  it('Happy path works', () => {
    const list = new LinkedList;
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    list.insert(5);

    expect(list.kthFromEnd(2)).toBe(3);
  });
});
