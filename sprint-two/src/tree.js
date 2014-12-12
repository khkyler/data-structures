var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = null;  // fix me

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){

};

treeMethods.contains = function(target){
  var current = this.head;
  while (current){
    if (current.value === target) {
      return true;
    }else {
      current = current.next;
    }
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
