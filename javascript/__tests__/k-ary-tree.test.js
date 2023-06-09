const { fizzBuzz } = require('../code-challenges/fizz-buzz-tree');

class KaryNode {
  constructor(value, k) {
    this.value = value;
    this.child = new Array(k).fill(null);
  }
}

class KaryTree {
  constructor(root = null) {
    this.root = root;
  }
}

describe('Tests for linked list insertions', () => {
  let Tree = new KaryTree(new KaryNode(10, 4));
  Tree.root.child[0] = new KaryNode(5, 1);
  Tree.root.child[1] = new KaryNode(4, 2);
  Tree.root.child[2] = new KaryNode(3, 1);
  Tree.root.child[3] = new KaryNode(2, 1);




  it('adds nodes to the end of the list', () => {

    console.log(Tree.root);
    let result = fizzBuzz(Tree);

    expect(Tree.root).toBeDefined();
    expect(result.root.value).toEqual('Buzz');
  });

});
