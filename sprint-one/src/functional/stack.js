var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    if (!Object.keys(storage).length) {
      storage[0] = value;
    } else {
      storage[Object.keys(storage).length] = value;
    }
  };

  someInstance.pop = function() {
    var value = storage[Object.keys(storage).length - 1];
    delete storage[Object.keys(storage).length - 1];
    return value;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
