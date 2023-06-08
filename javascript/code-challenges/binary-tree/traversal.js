function preOrder(root) {

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

module.exports = { postOrder, preOrder, inOrder };
