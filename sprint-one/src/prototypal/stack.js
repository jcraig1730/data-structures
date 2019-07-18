var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.stackSize = 0;
  return someInstance;
};

// console.log('booya');
var stackMethods = {};
stackMethods.push = function(value) {
  if (!this.stackSize) {
    this[0] = value;
    this.stackSize++;
  } else {
    this[this.stackSize] = value;
    this.stackSize++;
  }
};

stackMethods.pop = function() {
  var target = this[this.stackSize - 1];
  delete this[this.stackSize - 1];
  this.stackSize--;
  if (this.stackSize < 0) this.stackSize = 0;
  return target;
};

stackMethods.size = function() {
  return this.stackSize;
};
