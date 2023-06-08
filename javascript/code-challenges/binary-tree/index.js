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
  constructor(root) {
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
  constructor(root) {
    super(root);
  }
  add(number) {

    if (!this.root) {
      this.root = new Node(number);
    } else {
      let root = this.root;


      if (root.value < number) {
        if (root.left === null) {
          root.left = new Node(number);
          return this;
        }
        let root = root.right;
      } if (root.value < number) {
        if (root.right === null) {
          root.right = new Node(number);
          return this;
        }
      }
    }
  }















  contains(value) {
    let root = this.root;
    if (!root) {
      return false;
    }
    if (root.value === value) {
      return true;
    }
    if (root.left.value === value) {
      return true;
    }
    if (root.right.value === value) {
      return true;
    }
    else { return false; }


  }




}

module.exports = { Node, BinaryTree, BinarySearchTree };
