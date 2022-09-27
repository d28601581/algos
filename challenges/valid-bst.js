/* 
  Given a node representing the root of a binary tree, write a function to check if it is a valid binary *search* tree. 
  
  A binary tree is a valid binary search tree if it satisfies the following constraints:
    - For any given node, the value of ALL of the child nodes in its left branches must be less than its value.
    - For any given node, the value of ALL of the child nodes in its right branches must be greater than its value.
    - The tree contains no duplicate values.

  For example, this would be a valid BST:

         4
       /   \ 
     2      5
   /   \
  1     3

  whereas this would not be a valid BST:

         3
       /   \
     2      5
   /   \
  1    *4*

  because the node with value 4 on the left-hand side of the tree, but it's value is greater than the root node value 3.
  For this to be considered a valid BST the tree would need to look like this:
  
         3
       /   \
     2      5
   /      /
  1     *4*


         10
       /   \
     5      14
   /   \   
  3     6  
         \ 
         11
*/


function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

const validBST = tree => {

  const valid = (tree) => {
    console.log(tree)
    if(tree === null) return null;
    let max = valid(tree.left);
    let min = valid(tree.right);

    if (max === false || min === false) return false;
    if (max === null) max = tree.value;
    if (min === null) min = tree.value;

    max = Math.max(tree.value, max);
    min = Math.min(tree.value, min);
    console.log(max, min)

    if(tree.value >= max && tree.value <= min){
      return tree.value;
    } else {
      return false;
    }
  }

  return (valid(tree) === false) ? false : true;
}
const tree = new BinaryTree(10);
  tree.left = new BinaryTree(5);
  tree.left.left = new BinaryTree(3);
  tree.left.right = new BinaryTree(6);
  tree.right = new BinaryTree(14);
  tree.left.right.right = new BinaryTree(11);

console.log(validBST(tree))
module.exports = { BinaryTree, validBST };
