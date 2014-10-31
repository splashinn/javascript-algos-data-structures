# stack.js
# splashinn

var stackMethods = {
  push : function(value){
    var storage = this.storage;
    storage[storage['length']] = value;
    storage['length'] += 1;
  },
  pop : function() {
    var storage = this.storage;
    if(storage['length'] > 0) {
      var transientvalue = storage[storage['length'] - 1];
      storage['length'] -= 1;
      return transientvalue;
    }
  },
  size : function() {
    return this.storage['length'];
  }
}

var makeStack = function() {
  // Hey! Copy your code from src/functional/stack.js and paste it here
  var instance = {};

  // Use an object with numeric keys to store values
  instance['storage'] = {};
  instance.storage['length'] = 0;

  for(var key in stackMethods) {
    instance[key] = stackMethods[key];
    console.log(instance[key] === stackMethods[key]); //TODO REMOVE THIS
  }

  // Implement the stackMethods below
  return instance;
};