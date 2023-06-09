const { LinkedList } = require('../code-challenges/linked-list-implementation');

describe('Tests for linked list insertions', () => {
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
});
