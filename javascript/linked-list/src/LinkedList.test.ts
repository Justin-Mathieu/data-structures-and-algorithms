import { next } from "../../node_modules/cheerio/lib/api/traversing";
import { Collection } from "./Collection";
import { LinkedList } from "./LinkedList";

describe("linked list", () => {
  it("runs my custom test", () => {
    const list: Collection<string> = new LinkedList<string>();
    expect(list).toBeDefined();
  });

  it('instanciate a linked list', () => {
    const list: Collection<number> = new LinkedList<number>();
    list.insert(10);
    expect(list.includes(10)).toBe(true);
    expect(list.includes(5)).toBe(false);
  })



  it('head points to first node', () => {
    const list: Collection<string> = new LinkedList<string>();
    list.insert('thing');
    expect(next).toBeDefined();
  });


  it('inserts multiple nodes', () => {
    const list: Collection<string> = new LinkedList<string>();
    list.insert('test node 1');
    list.insert('test node 2')
    list.insert('test node 3')

    expect(list.includes('test node 1')).toBe(true);
    expect(list.includes('test node 2')).toBe(true);
    expect(list.includes('test node 3')).toBe(true);

  });

  it('returns all of the values', () => {
    const list: Collection<string> = new LinkedList<string>();
    list.insert('test node 1');
    list.insert('test node 2');
    list.insert('test node 3');

    expect(list.toString()).toEqual('{ test node 3 } -> { test node 2 } -> { test node 1 } -> NULL')
  })

});
