/*
  * Below, you are provided the construtors for a doubly linked list as well as a constructor for the nodes it's composed of
  * Construct a doubly linked list & modify it's prototype to contain methods named 'add' and 'remove'
  * The 'add' method should add an additional node to the end of the doubly linked list
  * The 'remove' method should remove the first instance of a node containing a specific value from the doubly linked list
  
  Example doubly linked list
  null <-> 4 <-> 9 <-> 2 <-> 1 <-> null

  Example after using 'add' method to add 6
  null <-> 4 <-> 9 <-> 2 <-> 1 <-> 6 <-> null

  Example after using 'remove' method to remove 2
  null <-> 4 <-> 9 <-> 1 <-> 6 <-> null

  NOTE: must use non-arrow functions for object constructors and prototype methods
  @see: https://dmitripavlutin.com/when-not-to-use-arrow-functions-in-javascript/
*/

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
This method should add a node to the end of the doubly linked list
 */
DoublyLinkedList.prototype.add = function (val) {
  if(!this.head) {
    this.head = this.tail = new Node(val)
    return;
  };
  const newNode = new Node(val);
  newNode.prev = this.tail;
  this.tail.next = newNode;
  this.tail = newNode;
};
// const list = new DoublyLinkedList();
// list.add(1);
// list.add(2);
// list.add(3);
// console.log(list)
/*
This method should remove the first instance of a node with the inputted value from the doubly linked list
 */
DoublyLinkedList.prototype.remove = function (val) {
  if(this.head.val === val){
    this.head = this.head.next;
    this.head.prev = null;
    return;
  }
  let curr = this.head.next;
  while(curr != null){
    if(curr.next === null){
      this.tail = this.tail.prev;
      this.tail.next = null;
      return;
    } else if(curr.val === val){
      curr.prev.next = curr.next;
      curr.next.prev = curr.prev;
      return;
    }
  }
};

module.exports = { DoublyLinkedList, Node };