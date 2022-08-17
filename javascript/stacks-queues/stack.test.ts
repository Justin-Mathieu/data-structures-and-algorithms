import { Stack } from "./stack";

xdescribe("Stack", () => {
  it("can push", () => {
    const s = new Stack<string>();

    expect(() => s.push("Frodo")).not.toThrow();
  });

  it("pushes", () => {
    const s = new Stack<string>();

    s.push("Frodo");
    s.push("Sam");

    expect(s.size).toBe(2);
    expect(s.peek).toBe("Sam");
  });

  it("isEmpty returns a boolean", () => {
    const s = new Stack<string>();

    expect(s.isEmpty(s)).toBe(true);

    s.push("test");

    expect(s.isEmpty(s)).toBe(false);
  });

  it("pops the top node", () => {
    const s = new Stack<string>();
    s.push("test1");
    s.push("test2");
    s.push("test3");

    s.pop();

    expect(s.peek).toBe("test2");
    expect(s.size).toBe(2);
  });
});
