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
    this._storage[i].push(tuple);
  }
  if ( this._storage.length > (this._limit * .75)){
    this.resize(2);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
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
  if ( this._storage.length < (this._limit * .25)){
    this.resize(.5);
  }
};

HashTable.prototype.resize = function (factor){
  var holding =[];
  for (var key in this){
    for(var j = 0; j < this._storage[key][j]; j++){
      holding.push(this._storage[key][j]);
    }
  }
  for (var j = 0; j < holding.length; j++){
    var i = getIndexBelowMaxForKey(holding[j][0], (factor * this._limit) );
    this
  }


};



/*
 * Complexity: What is the time complexity of the above functions?
 */
