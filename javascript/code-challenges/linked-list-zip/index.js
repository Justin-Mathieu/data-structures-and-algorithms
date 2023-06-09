const { LinkedList } = require('../linked-list-implementation');

function zip(list1, list2) {
  let newList = new LinkedList;
  let currentll1 = list1.head;
  let currentll2 = list2.head;


  while (currentll1 || currentll2) {
    if (currentll1) {
      newList.append(currentll1.value);
      currentll1 = currentll1.next;
    }
    if (currentll2) {
      newList.append(currentll2.value);
      currentll2 = currentll2.next;
    }
  }
  return newList;
}

module.exports = { zip };
