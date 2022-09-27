function Node(value) {
  this.value = value;
  this.next = null;
}

/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 * If the input is null, your function should return null
 *
 * Example:
 * If the linked list is:
 *
 *      1 -> 2 -> 3 -> 4 -> 5
 *
 * The result should like like:
 *
 *      5 -> 4 -> 3 -> 2 -> 1
 *
 * Extension:
 * Do it in place
 *
 */

const reverseLinkedList = head => {
  if (!head) return null;
  // let newHead = new Node(head.value);
  // let newNode;
  // while(head.next){
  //   head = head.next;
  //   newNode = new Node(head.value);
  //   newNode.next = newHead;
  //   newHead = newNode;
  // }
  // return newHead;

  let p1 = head;
  let p2 = p1?.next;
  let p3 = p2?.next;
  p1.next = null;
  while(p2 != null){
    p2.next = p1;
    p1 = p2;
    p2 = p3;
    p3 = p3?.next;
  }
  return p1;
};
module.exports = { Node, reverseLinkedList }
