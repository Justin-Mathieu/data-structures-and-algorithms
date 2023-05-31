import { Queue } from "../stacks-queues/queue";

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

  it(" isEmpty returns a boolean", () => {
    const q = new Queue<string>();

    expect(q.isEmpty(q)).toBe(true);
    q.enqueue("test1");
    expect(q.isEmpty(q)).toBe(false);
  });

  it("peek should return the value of the head node", () => {
    const q = new Queue<string>();

    q.enqueue("test");

    expect(q.peek).toBe("test");
  });
});
