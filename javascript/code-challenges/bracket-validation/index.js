const Stack = require('../stack-queue-implementation');

function validateBrackets(string) {
  let stack = new Stack();
  let open = ['(', '[', '{'];
  let close = [')', ']', '}'];
  for (let i = 0; i < string.length; i++) {
    if (open.includes(string[i])) {
      stack.push(string[i]);
    } else if (close.includes(string[i])) {
      let top = stack.pop();
      if (open.indexOf(top) !== close.indexOf(string[i])) {
        return false;
      }
    }
  }
  if (stack.top) {
    return false;
  }
  return true;
}

module.exports = validateBrackets;
