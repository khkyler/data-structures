var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};

  _.extend(obj, stackMethods);

  return obj;
};

var stackMethods = {
  counter: 0,
  size: function(){
    return this.counter;
  },
  push: function(value){
    this[this.counter] = value;
    this.counter++;
  },
  pop: function(){
    if (this.counter > 0){
      var value = this[this.counter - 1];
      delete this[this.counter -1];
      this.counter--;
      return value;
    }

  }

};


