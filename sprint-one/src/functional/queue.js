var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (!Object.keys(storage).length) {
      storage[0] = value;
      count++;
    } else {
      storage[Object.keys(storage).length] = value;
      count++;
    }
  };

  someInstance.dequeue = function() {
    var target = storage[0];
    delete storage[0];
    count--;
    count = count < 0 ? 0 : count;
    for (var i = 0; i < Object.keys(storage).length; i++) {
      storage[i] = storage[i + 1];
    }

    return target;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
