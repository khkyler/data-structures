var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k,v];
  if(!this._storage[i]){
    this._storage[i] = [tuple];
  } else {
    console.log(tuple);
    //var temp = this._storage[i];
    this._storage[i].push(tuple);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // if (k === 'Steven')  {debugger}
  if (!this._storage[i]){
    return null;
  } else {
    for(var j = 0; j<this._storage[i].length; j++){
      if (this._storage[i][j][0] === k){
        return this._storage[i][j][1];
      }
    }
  }

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  delete this._storage[i];
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
