var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0;
  this.storage = {};
};

Queue.prototype = {
  size: function(){
    return this.counter;
  },
  enqueue: function(value){
    for(var key in this.storage){
      var newKey = parseInt(key) + 1;
      this.storage[newKey] = this.storage[key];
    };
    this.counter++;

    this.storage[0] = value;
  },
  dequeue: function(){
    if( this.counter > 0 ){
      var value = this.storage[this.counter - 1];
      delete this.storage[this.counter - 1];
      this.counter--;
      return value;
    }
  }
};
