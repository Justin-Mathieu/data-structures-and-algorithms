const LinkedList = require('../code-challenges/linked-list-implementation');


xdescribe('kth from end', () => {
  it('can query kth element', () => {
    const ll = new LinkedList;
    ll.append(1);
    ll.append(3);
    ll.append(8);
    ll.append(2);

    expect(ll.kthFromEnd(0)).toBe(2);
    expect(ll.kthFromEnd(2)).toBe(3);
  });

  it('throws error when k is greater than list length', () => {
    const list = new LinkedList;
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);

    expect(() => {
      list.kthFromEnd(5);
    }).toThrowError();
  });

  it('returns a value when k and the list length are equal', () => {
    const list = new LinkedList;
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);

    expect(list.kthFromEnd(3)).toBe(4);
  });


  it('throws error when k is greater than list length', () => {
    const list = new LinkedList;
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);

    expect(() => {
      list.kthFromEnd(5);
    }).toThrowError();
  });

  it('returns a value when k and the list length are equal', () => {
    const list = new LinkedList;
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);

    expect(list.kthFromEnd(3)).toBe(4);
  });

  it.skip('throws an error when k is a negative number', () => {
    const list = new LinkedList;
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);

    expect(() => {
      list.kthFromEnd(-1);
    }).toThrowError();
  });

  it('returns a value with a list length of 1', () => {
    const list = new LinkedList;
    list.insert(1);

    expect(list.kthFromEnd(0)).toBe(1);
    expect(() => {
      list.kthFromEnd(1);
    }).toThrowError();
  });

  it('Happy path works', () => {
    const list = new LinkedList;
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    list.insert(5);

    expect(list.kthFromEnd(2)).toBe(3);
  });
});
