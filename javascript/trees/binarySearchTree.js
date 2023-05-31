const { Node, BinaryTree } = require('./binaryTree.js');

class BinarySearchTree extends BinaryTree {
  add(number) {
    let newNode = new Node(number, undefined, undefined);
    let root = this.root;
    if (!root) {
      root = newNode;
    }
    if (root.value === number) {
      return undefined;
    }
    while (root) {
      if (root.value > number) {
        if (root.left === undefined) {
          root = newNode;
          return this;
        }
      } else if (root.value < number) {
        if (root.right === undefined) {
          root.right = newNode;
          return this;
        }
      }

    }
  }
}

module.exports = { BinarySearchTree };
