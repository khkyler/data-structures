var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){

    for (var key in storage) {
      var newKey = parseInt(key) + 1;
      storage[newKey] = storage[key];
    };
    counter++;
    storage[0] = value;
  };

  someInstance.dequeue = function(){
    if (counter > 0) {
      var value = storage[counter - 1];
      delete storage[counter - 1];
      counter--;
      return value;
    }
  };

  someInstance.size = function(){
    return counter;
  };

  return someInstance;
};
