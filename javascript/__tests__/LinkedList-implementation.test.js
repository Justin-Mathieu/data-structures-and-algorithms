'use strict';
const { LinkedList } = require('../code-challenges/linked-list-implementation');

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
    expect(list.toString()).toBe('{ 10 } -> NULL');
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
});
