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

module.exports = { breadthFirst };
