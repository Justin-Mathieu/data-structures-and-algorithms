function fizzBuzz(tree) {
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

module.exports = { fizzBuzz };
