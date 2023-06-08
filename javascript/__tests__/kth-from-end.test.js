const LinkedList = require('../code-challenges/linked-list-implementation');

describe('linked list', () => {
  describe('kth from end', () => {
    it('can query kth element', () => {
      const ll = new LinkedList;
      ll.append(1);
      ll.append(3);
      ll.append(8);
      ll.append(2);

      expect(ll.kthFromEnd(0)).toBe(2);
      expect(ll.kthFromEnd(2)).toBe(3);
    });

    it('throws an exception when longer than list', () => {
      const ll = new LinkedList;
      ll.append(1);
      ll.append(3);
      ll.append(8);
      ll.append(2);

      expect(() => {
        ll.kthFromEnd(0);
      }).toThrow();
    });
  });
});