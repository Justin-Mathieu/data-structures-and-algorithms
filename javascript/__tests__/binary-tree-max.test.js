const { BinaryTree, Node } = require('../code-challenges/binary-tree');

describe('Binary Tree', () => {
  const tree = new BinaryTree(
    new Node(1,
      new Node(7, new Node(2), new Node(6, new Node(3), new Node(11))),
      new Node(9, undefined, new Node(9, new Node(5)))
    )
  );

  it('returns the highest number', () => {
    expect(tree.treeMax()).toEqual(11);

  });
});
