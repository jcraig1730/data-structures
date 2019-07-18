var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.queueSize = 0;
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  if (!this.queueSize) {
    this.storage[0] = value;
    this.queueSize++;
  } else {
    this.storage[this.queueSize] = value;
    this.queueSize++;
  }
};

queueMethods.dequeue = function() {
  var target = this.storage[0];
  delete this.storage[0];
  this.queueSize--;
  for (var i = 0; i < this.queueSize; i++) {
    this.storage[i] = this.storage[i + 1];
  }

  if (this.queueSize < 0) this.queueSize = 0;
  return target;
};

queueMethods.size = function() {
  return this.queueSize;
};
