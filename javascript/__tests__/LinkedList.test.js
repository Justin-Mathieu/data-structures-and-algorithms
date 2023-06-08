'use strict';
const { LinkedList } = require('../code-challenges/linked-list-implementation');

// Require our linked list implementation

describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });

  it('runs my custom test', () => {
    const list = new LinkedList();
    expect(list).toBeDefined();
  });

  it('instanciate a linked list', () => {
    const list = new LinkedList();
    list.insert(10);
    expect(list.toString()).toBe();
    expect(list.includes(5)).toBe(false);
  });

  it('inserts multiple nodes', () => {
    const list = new LinkedList();
    list.insert('test node 1');
    list.insert('test node 2');
    list.insert('test node 3');

    expect(list.includes('test node 1')).toBe(true);
    expect(list.includes('test node 2')).toBe(true);
    expect(list.includes('test node 3')).toBe(true);
  });

  it('returns all of the values', () => {
    const list = new LinkedList();
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
