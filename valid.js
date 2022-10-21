class stack {
  constructor() {
    this.data = [];
  }

  push(value) {
    this.data.push(value);
  }

  pop() {
    this.data.pop();
  }

  top() {
    this.data[this.data.length - 1];
  }

  print() {
    return this.data;
  }

  isEmpty() {
    return this.data.length === 0;
  }
}
const myStack = new stack();

var isValid = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (["(", "[", "{"].includes(s[i])) {
      myStack.push(s[i]);
    } else {
    }
  }
  return true;
};

s = "()[]{}";

console.log(isValid(s));
