const LinkedList = require('../src/LinkedList');

describe('LinkedList', () => {
  it('checks if an item is included', () => {
    const list = new LinkedList();

    list.insert('Frodo');
    list.insert('Sam');
    list.insert('Merry');
    list.insert('Pippin');

    expect(list.includes('Sam')).toBe(true);
    expect(list.includes('Bilbo')).toBe(false);
  });

});
