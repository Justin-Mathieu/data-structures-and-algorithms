

function merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= righ[j]) {
      arr[k] = left[i];
      i++;
    }
    else {
      arr[k] = right[j];
      j++
    }
    k++
  }
}


function mergeSort(arr) {
  let n = arr.length;
  if (n > 1) {
    let mid = n / 2;
    let left = arr[0..mid];
    let right = arr[mid..n];
    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr)

  }
}