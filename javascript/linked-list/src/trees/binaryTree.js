
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

function breadthFirst(tree) {
  if (!tree.root) {
    return null;
  }
  let root = tree.root;
  let queue = [];
  let values = [];

  queue.push(root);

  while (queue.length > 0) {
    let front = queue.shift();
    values.push(front.value);

    if (front.left) {
      queue.push(front.left);
    }

    if (front.right) {
      queue.push(front.right);
    }

  }
  return values;

}


function treeFizzBuzz(tree) {
  if (!tree.root) {
    return null;
  }
  let root = tree.root;
  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let front = queue.shift();
    if (front.value % 3 === 0) {
      front.value = 'Fizz';
    }
    if (front.value % 5 === 0) {
      front.value = 'Buzz';
    }
    if (front.value % 3 === 0 && front.value % 5 === 0) {
      front.value = 'FizzBuzz';
    } else { front.value = front.value.toString(); }

    if (front.left) {
      queue.push(front.left);
    }

    if (front.right) {
      queue.push(front.right);
    }

  }
  return tree;


}

class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }


  preOrder() {
    let traversal = [];
    traversal.push(this.value);
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

  treeMax() {
    let array = inOrder(this.root);
    return Math.max(...array);
  }
}


module.exports = { Node, BinaryTree, breadthFirst, treeFizzBuzz };
