var Stack = function() {
  var someInstance = {};
  _.extend(someInstance, stackMethods);
  someInstance.storage = {};
  someInstance.count = 0;
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  if (!Object.keys(this.storage).length) {
    this.storage[0] = value;
    this.count++;
  } else {
    this.storage[Object.keys(this.storage).length] = value;
    this.count++;
  }
};

stackMethods.pop = function() {
  var target = this.storage[Object.keys(this.storage).length - 1];
  delete this.storage[Object.keys(this.storage).length - 1];
  this.count--;
  if (this.count < 0) this.count = 0;
  return target;
};

stackMethods.size = function() {
  return this.count;
};
