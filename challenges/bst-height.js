function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

/*

Find the tallest height of a binary search tree.

Ex. the tallest height of:

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

is 3, because the tallest height of the tree connects the numbers 4 - 7 - 9 - 8
and has 3 links.

*/

const bstHeight = tree => {
  
  const helperFun = (node, height = 0) => {
    if (!node) return height - 1;
    height = Math.max(helperFun(node.left, height + 1), helperFun(node.right, height + 1));
    return height;
  }

  return helperFun(tree);
};

/*
  Extension:

  Write a function to see if a binary tree is "superbalanced".
  An empty tree is balanced. A non-empty binary tree T is balanced if:
    1) Left subtree of T is balanced
    2) Right subtree of T is balanced
    3) The difference between heights of left subtree and right subtree is not more than 1.
  example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF

  A superbalanced tree is a tree that is balanced at every subtree level as well.

  Ex. 
        4                       4
      /   \                   /   \
     2     7                2       7
    / \     \             /  \     /  \
   1   3     9           1    3   5    9
            /                         /
           8                         8

  The tree on the left is balanced - height of left side is 2, height of right side is 3.
  But, it is not superbalanced since for the 7 subtree, height of left is 0, height of right is 2.
  
  The tree on the right is superbalanced since the difference in height is not more than 1 at any given subtree.
 */

  //need to compare height and check if both side have value
const superbalanced = tree => {
  if(!tree) return true;
  if(tree.left != null && tree.right != null) return superbalanced(tree.left) && superbalanced(tree.right) && Math.abs(bstHeight(tree.left) - bstHeight(tree.right)) <= 1;
  else if(tree.left != null && (tree.left.left != null || tree.left.right != null)) return false
  else if(tree.right != null && (tree.right.left != null || tree.right.right != null)) return false
  return true;
};
// let tree;

// tree = new BinarySearchTree(10);
// tree.left = new BinarySearchTree(5);
// tree.left.left = new BinarySearchTree(3);
// tree.left.right = new BinarySearchTree(6);
// tree.right = new BinarySearchTree(14);
// tree.left.left.left = new BinarySearchTree(1);

// console.log(superbalanced(tree))
module.exports = {BinarySearchTree, bstHeight, superbalanced};
