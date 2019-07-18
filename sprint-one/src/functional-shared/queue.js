var Queue = function() {
  var someInstance = {};
  _.extend(someInstance, queueMethods);
  someInstance.storage = {};
  someInstance.count = 0;
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  if (!Object.keys(this.storage).length) {
    this.storage[0] = value;
    this.count++;
  } else {
    this.storage[Object.keys(this.storage).length] = value;
    this.count++;
  }
};

queueMethods.dequeue = function() {
  var target = this.storage[0];
  delete this.storage[0];
  this.count--;
  if (this.count < 0) this.count = 0;
  for (var i = 0; i < Object.keys(this.storage).length; i++) {
    this.storage[i] = this.storage[i + 1];
  }
  return target;
};

queueMethods.size = function() {
  return this.count;
};
