'use strict';

const { preOrder, postOrder, inOrder } = require('./traversal');
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

}
class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  preOrder() {
    let root = this.root;
    let traversal = [];
    traversal.push(root.value);

    if (root.left) {
      let leftTraversal = preOrder(root.left);
      traversal = traversal.concat(leftTraversal);
    }
    if (root.right) {
      let rightTraversal = preOrder(root.right);
      traversal = traversal.concat(rightTraversal);
    }
    return traversal;
  }
  inOrder() {
    let root = this.root;
    let traversal = [];
    if (root.left) {
      let traversalLeft = inOrder(root.left);
      traversal = traversal.concat(traversalLeft);
    }
    traversal.push(root.value);
    if (root.right) {
      let traversalRight = inOrder(root.right);
      traversal = traversal.concat(traversalRight);
    }
    return traversal;
  }

  postOrder() {
    let root = this.root;
    let traversal = [];
    if (root.left) {
      let leftTraversal = postOrder(root.left);
      traversal = traversal.concat(leftTraversal);
    }
    if (root.right) {
      let rightTraversal = postOrder(root.right);
      traversal = traversal.concat(rightTraversal);
    }
    traversal.push(root.value);
    return traversal;
  }


  treeMax() {
    let array = inOrder(this.root);
    return Math.max(...array);
  }

}

class BinarySearchTree extends BinaryTree {

  add(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return;
    }
    let prev = null;
    let curr = this.root;
    while (curr) {
      if (curr.value > value) {
        prev = curr;
        curr = curr.left;
      }
      else if (curr.value < value) {
        prev = curr;
        curr = curr.right;
      }
    }
    if (prev.value > value) {
      prev.left = new Node(value);
    }
    else {
      prev.right = new Node(value);
    }
    return this;
  }




  contains(value) {
    let stuff = inOrder(this.root);
    return stuff.includes(value);
  }

}

module.exports = { Node, BinaryTree, BinarySearchTree };
