function preOrder(root) {
  // Root, Left, Right
  // Return a single array
  let traversal = [];
  traversal.push(root.value); // Root

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


function inOrder(root) {
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


function postOrder(root) {
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


class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left; // A Node
    this.right = right; // A Node
  }


  preOrder() {
    let traversal = [];
    traversal.push(this.value); // Root
    if (this.left) {
      let leftTraversal = this.left.preOrder();
      traversal = traversal.concat(leftTraversal);
    }
    if (this.right) {
      let rightTraversal = this.right.preOrder();
      traversal = traversal.concat(rightTraversal);
    } return traversal;
  }


  inOrder() {
    let traversal = [];

    if (this.left) {
      let leftTraversal = this.left.inOrder();
      traversal = traversal.concat(leftTraversal);
    }
    traversal.push(this.value);

    if (this.right) {
      let rightTraversal = this.right.inOrder();
      traversal = traversal.concat(rightTraversal);
    }


    return traversal;
  }


  postOrder() {
    let traversal = [];
    if (this.left) {
      let leftTraversal = this.left.postOrder();
      traversal = traversal.concat(leftTraversal);
    }
    if (this.right) {
      let rightTraversal = this.right.postOrder();
      traversal = traversal.concat(rightTraversal);
    }
    traversal.push(this.value);
    return traversal;
  }
}


class BinaryTree {
  constructor(root) {
    this.root = root;
  }
  preOrder() {
    return preOrder(this.root);
  }

  inOrder() {
    return inOrder(this.root);
  }

  postOrder() {
    return postOrder(this.root);
  }
}


module.exports = { Node, BinaryTree };
