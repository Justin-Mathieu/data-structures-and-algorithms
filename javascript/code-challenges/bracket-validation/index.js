

function bracketValidation(string) {
  let stack = [];
  if (string.length === 1) {
    return false;
  }
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(' || string[i] === '{' || string[i] === '[') {
      stack.push(string[i]);
    }
    if (string[i] === ')' || string[i] === '}' || string[i] === ']') {



      switch (stack[stack.length - 1]) {
        case '(':
          if (string[i] === ')') {
            stack.pop();

          }
          break;

        case '{':
          if (string[i] === '}') {
            stack.pop();

          }
          break;

        case '[':
          if (string[i] === ']') {
            stack.pop();

          }
          break;


      }
    }

  }

  if (stack.length > 0) {
    return false;
  }

  else {
    return true;
  }
}

module.exports = bracketValidation;
