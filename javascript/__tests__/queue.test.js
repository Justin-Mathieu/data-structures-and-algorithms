const { Queue } = require('../code-challenges/stack-queue-implementation');

describe('Queue', () => {

  it('enqueues', () => {
    const q = new Queue();

    q.enqueue('Frodo');
    q.enqueue('Sam');

    expect(q.peek()).toBe('Frodo');
  });

  it('dequeues', () => {
    const q = new Queue();
    q.enqueue('test1');
    q.enqueue('test2');
    q.enqueue('test3');
    q.enqueue('test4');
    q.enqueue('test5');
    q.enqueue('test6');



    console.log(q);
    expect(q.peek()).toBe('test1');
    q.dequeue();
    expect(q.peek()).toBe('test2');


  });

  it(' isEmpty returns a boolean', () => {
    const q = new Queue();

    expect(q.isEmpty()).toBe(true);
    q.enqueue('test1');
    expect(q.isEmpty()).toBe(false);
  });

  it('peek should return the value of the head node', () => {
    const q = new Queue();

    q.enqueue('test');

    expect(q.peek()).toBe('test');
  });
});
