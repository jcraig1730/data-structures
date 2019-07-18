class Queue {
  constructor() {
    this.storage = {};
    this.queueSize = 0;
  }

  enqueue(value) {
    if (!this.queueSize) {
      this.storage[0] = value;
      this.queueSize++;
    } else {
      this.storage[this.queueSize] = value;
      this.queueSize++;
    }
  }

  dequeue() {
    var target = this.storage[0];
    delete this.storage[0];
    this.queueSize--;
    if (this.queueSize < 0) this.queueSize = 0;
    for (var i = 0; i < this.queueSize; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    return target;
  }

  size() {
    return this.queueSize;
  }
}
