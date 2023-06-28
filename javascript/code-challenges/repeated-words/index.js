'use strict';
function repeatedWords(str) {
  let arr = str.split(' ');
  let repeatedWord = null;

  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];

    if (arr.indexOf(word) !== i) {
      // Found a repeated word
      repeatedWord = word;
      break;
    }
  }

  return repeatedWord;
}

module.exports = repeatedWords;
