'use strict';

// need to write the "callback" compareYear
function sortYear(arr) {
  return arr.sort(compareYear);
}


function compareYear(A, B) {
  //do the thing
  return B.year - A.year;

}

function sortTitle(arr) {
  return arr.sort(compareTitle);
}


function compareTitle(a, b) {
  const aTitle = a.title.replace('The ', '');
  const bTitle = b.title.replace('The ', '');

  return aTitle.localeCompare(bTitle);
}









module.exports = { sortYear, compareYear, sortTitle, compareTitle };
