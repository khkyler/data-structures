var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  var counter = 0;

  list.addToTail = function(value){
    //check if head = null
    if (this.head === null){
      //set it value if it is
      this.head = Node(value);
      //make tail the same value
      this.tail = this.head;
    } else {
      //set temp value for the current node
      this.tail.next = Node(value);
      //make current tail next
      this.tail = this.tail.next;
      //set new as tail

    };
  };

  list.removeHead = function(){
    //set current as head
    var current = this.head;
    //set the next head as the current head
    this.head = this.head.next;

    return current.value;
  };

  list.contains = function(target){
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

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



