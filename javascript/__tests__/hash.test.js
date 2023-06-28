const HashTable = require('../code-challenges/hash-tables');

describe('Hash Table', () => {
  test('Set creates a value in the table', () => {
    let table = new HashTable(1024);
    table.set('test', { thing1: 124, thing2: 1432 });

    expect(table.get).toBeDefined();
  });

  test('Can get a value by the key', () => {
    let table = new HashTable(1024);
    table.set('testGet', { thing: 'TEST' });
    expect(table.get('testGet')).toEqual({ thing: 'TEST' });
  });

  test('Returns null for a value that does not exist', () => {
    let table = new HashTable(1024);
    table.set('testNull', { thing: 'tested' });

    expect(table.get('test')).toEqual(null);
  });

  test('returns list of keys', () => {
    let table = new HashTable(1024);
    table.set('testA', { thing2: 'test 1' });
    table.set('testB', { thing: 'test 2' });
    table.set('testC', { thing: 'test 3' });
    console.log('______*******_______=====>', table.keys());
    expect(table.keys()).toContainEqual('testA', 'testB', 'testC');
  });

  test('Handles a collision by replacement', () => {
    let table = new HashTable(1024);
    table.set('test', 'Replaced by TEST A');
    table.set('test', 'TEST A');

    expect(table.get('test')).toEqual('TEST A');
  });

});
