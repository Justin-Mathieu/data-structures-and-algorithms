import { Queue } from "./queue";

describe("Queue", () => {
  it("can enqueue", () => {
    const q = new Queue<string>();

    expect(() => q.enqueue("Frodo")).not.toThrow();
  });

  it("enqueues", () => {
    const q = new Queue<string>();

    q.enqueue("Frodo");
    q.enqueue("Sam");

    expect(q.size).toBe(2);
    expect(q.peek).toBe("Frodo");
  });

  xit("dequeues", () => {
    const q = new Queue<string>();
    q.enqueue("test1");
    q.enqueue("test2");
    // q.enqueue("test3");

    // expect(q.size).toBe(3);
    expect(q.peek).toBe("test2");

    q.dequeue();

    expect(q.size).toBe(3);
  });
});