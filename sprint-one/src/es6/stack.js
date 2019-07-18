class Stack {
  constructor() {
    this.storage = {};
    this.stackSize = 0;
  }

  push(value) {
    if (!this.stackSize) {
      this.storage[0] = value;
      this.stackSize++;
    } else {
      this.storage[this.stackSize] = value;
      this.stackSize++;
    }
  }

  pop() {
    var target = this.storage[this.stackSize - 1];
    delete this.storage[this.stackSize - 1];
    this.stackSize--;
    if (this.stackSize < 0) this.stackSize = 0;
    return target;
  }

  size() {
    return this.stackSize;
  }
}
