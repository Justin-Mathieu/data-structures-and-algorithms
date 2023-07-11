function removeDuplicates(list) {
  let current = list.head;
  while (current) {
    let temp = current;
    if (temp.value === current.value) {
      temp = temp.next;
    }
    else {
      current.next = temp;
      current = current.text;
    }
  }
}
