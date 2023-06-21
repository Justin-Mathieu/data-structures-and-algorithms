
function insert(sortArr, value) {
  let i = 0;
  while (sortArr[i] > value) {
    i++;
  }
  while (i < sortArr.length) {
    let prev = sortArr[i];
    sortArr[i] = value;
    value = prev;
    i++;
  }
  sortArr.push(value);
}


function insertionSort(arr) {
  let sorted = [];
  sorted[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    insert(sorted, arr.length);
  }
}
