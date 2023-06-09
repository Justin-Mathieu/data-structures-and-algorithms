const { Queue } = require('../stack-queue-implementation');

function fizzBuzz(tree) {
  let queue = new Queue();
  let current = tree.root;
  queue.enqueue(current);
  while (current) {
    current = queue.dequeue();
    if (current?.value % 3 === 0 && current?.value % 5 === 0) {
      current.value = "FizzBuzz";
    } else if (current?.value % 3 === 0) {
      current.value = "Fizz";
    } else if (current?.value % 5 === 0) {
      current.value = "Buzz";
    } else if (typeof current?.value === 'number') {
      current.value = `${current?.value}`
    }
    for (let i = 0; i < current?.child.length; i++) {
      queue.enqueue(current.child[i]);
    }
  }
  return tree;
}


module.exports = { fizzBuzz };
