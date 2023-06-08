
const { BinaryTree, Node } = require('../code-challenges/binary-tree');
const { breadthFirst } = require('../code-challenges/binary-tree-breadth');

describe('Binary Tree', () => {
  const tree = new BinaryTree(
    new Node(
      1,
      new Node(7, new Node(2), new Node(6, new Node(3), new Node(11))),
      new Node(9, undefined, new Node(9, new Node(5)))
    )
  );


  it('does a breadth first trasversal', () => {
    expect(breadthFirst(tree)).toEqual([1, 7, 9, 2, 6, 9, 3, 11, 5]);
  });

});
