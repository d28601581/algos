/**
 * Write a function that takes two parameters (an integer, and the head of a
 * singly linked list) and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 * 
 * Additional Information:
 *  - invalid inputs should return undefined
 *  - should find the last node by passing in 1
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head){
  if (k === 0 || !head) return undefined;
  // let arr = [];
  // while(head != null){
  //   arr.push(head.value);
  //   head = head.next;
  // }
  // if(arr.length < k) return undefined;
  // //console.log(arr)

  // return arr[arr.length - k]

  //two pointers
  let current = head;
  //console.log(current.value)
  while(k > 1){
    if(head.next == null) return undefined;
    head = head.next;
    k--;
  }
  //console.log(head.value)
  while(head.next != null){
    head = head.next;
    current= current.next;
  }

  return current.value;
}
// const a = new Node('A');
// const b = new Node('B');
// const c = new Node('C');
// const d = new Node('D');
// const e = new Node('E');

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;

// console.log(kthToLastNode(2, a))

//Do not delete! 
module.exports = {Node, kthToLastNode};