
const { BinarySearchTree, Node } = require('../code-challenges/binary-tree/index');


describe('Binary Search Tree', () => {

  const bst = new BinarySearchTree();
  bst.add(2);
  bst.add(3);
  bst.add(4);
  bst.add(5);


  console.log(bst);

  console.log(bst.preOrder());

  it('looks up whether an item is in the tree', () => {
    expect(bst.contains(2)).toBe(true);
    expect(bst.contains(8)).toBe(false);
  });

  it('adds in order', () => {
    expect(bst.preOrder()).toBe([2, 3, 4, 5]);
  });

});
