const { LinkedList } = require('../code-challenges/linked-list-implementation');
const { zip } = require('../code-challenges/linked-list-zip');

describe('linked list', () => {
  describe('zip', () => {
    it('can zip lists A', () => {
      const ll1 = new LinkedList();
      ll1.append(1);
      ll1.append(3);
      ll1.append(2);

      const ll2 = new LinkedList();
      ll2.append(5);
      ll2.append(9);
      ll2.append(4);

      let result = zip(ll1, ll2);
      expect(result.toString()).toBe(
        '{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 2 } -> { 4 } -> NULL'
      );
    });

    it('can zip lists B', () => {
      const ll1 = new LinkedList;
      ll1.append(1);
      ll1.append(3);

      const ll2 = new LinkedList;
      ll2.append(5);
      ll2.append(9);
      ll2.append(4);

      const result = zip(ll1, ll2);
      expect(result.toString()).toBe(
        '{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 4 } -> NULL'
      );
    });

    it('can zip lists C', () => {
      const ll1 = new LinkedList;
      ll1.append(1);
      ll1.append(3);
      ll1.append(2);

      const ll2 = new LinkedList;
      ll2.append(5);
      ll2.append(9);

      const result = zip(ll1, ll2);
      expect(result.toString()).toBe(
        '{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 2 } -> NULL'
      );
    });
  });
});
