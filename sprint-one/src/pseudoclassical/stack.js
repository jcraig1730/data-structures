var Stack = function() {
  this.storage = {};
  this.stackSize = 0;
};

Stack.prototype.push = function(value) {
  console.log(this.push);
  if (!this.stackSize) {
    this.storage[0] = value;
    this.stackSize++;
  } else {
    this.storage[this.stackSize] = value;
    this.stackSize++;
  }
};
Stack.prototype.pop = function() {
  var target = this.storage[this.stackSize - 1];
  delete this.storage[this.stackSize - 1];
  this.stackSize--;
  if (this.stackSize < 0) this.stackSize = 0;
  return target;
};

Stack.prototype.size = function() {
  return this.stackSize;
};

var a = new Stack();
console.log(a.push('hello'));
