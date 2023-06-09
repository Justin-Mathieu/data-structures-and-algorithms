
const { BinarySearchTree } = require('../code-challenges/binary-tree/index');


describe('Binary Search Tree', () => {
  const bst = new BinarySearchTree();
  bst.add(8);
  bst.add(6);
  bst.add(7);
  bst.add(5);
  bst.add(3);
  bst.add(0);
  bst.add(9);

  it('looks up whether an item is in the tree', () => {
    expect(bst.contains(2)).toBe(false);
    expect(bst.contains(8)).toBe(true);
  });

  it('adds in correct place (preorder)', () => {
    expect(bst.preOrder()).toEqual([8, 6, 5, 3, 0, 7, 9]);
  });

});
