class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }

  get peek() {
    return this.items[this.top];
  }

  push(newItem) {
    this.top += 1;
    this.items[this.top] = newItem;
  }

  pop() {
    delete this.items[this.top];
    this.top -= 1;
  }
}

describe('unit test stack function', () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  it('test init stack', () => {
    expect(stack.items).toEqual({});
    expect(stack.top).toBe(-1);
  });

  it('test add items in stack', () => {
    stack.push('cat');
    stack.push('dog');

    expect(stack.peek).toBe('dog');
  });

  it('test pop items in stack', () => {
    stack.push('cat');
    stack.push('dog');
    stack.pop();

    expect(stack.peek).toBe('cat');
  });
});
