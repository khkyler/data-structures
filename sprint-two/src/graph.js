

var Graph = function(){
  this.storage = {};
};

Graph.prototype.addNode = function(node){
  //this.storage = new Graph();
  this.storage[node] = {edge: {}};

};

Graph.prototype.contains = function(node){
  for (var key in this.storage){
    if (key === node){
      return true;
    }
  }
  return false;

};

Graph.prototype.removeNode = function(node){
  var temp = this.storage[node];
  delete this.storage[node];
  return temp;
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var from = this.storage[fromNode].edge;
  //var to = this.storage[toNode].edge;

  if(from.hasOwnProperty(toNode)){
    return true;
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.storage[toNode].edge[fromNode] = toNode;
  this.storage[fromNode].edge[toNode] = fromNode;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.storage[toNode].edge[fromNode];
  delete this.storage[fromNode].edge[toNode];
};

Graph.prototype.forEachNode = function(cb){
  for (var key in this.storage){
      cb(key);
    }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



