var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var obj = Object.create(queueMethods);
  return obj;
};

var queueMethods = {
  counter: 0,
    size: function(){
      return this.counter;
    },
    enqueue: function(value){
      for(var key in this){
        var newKey = parseInt(key) + 1;
        this[newKey] = this[key];
      };
      this.counter++;

      this[0] = value;
    },
    dequeue: function(){
      if( this.counter > 0 ){
        var value = this[this.counter - 1];
        delete this[this.counter - 1];
        this.counter--;
        return value;
      }
    }
};


