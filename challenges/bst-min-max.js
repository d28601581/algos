function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}


/*

Given the root of a binary search tree, determine the difference of the maximum
and minimum value.

Note that the function signature is NOT defined as a method on the
BinarySearchTree prototype. Instead, we provide the root as an argument to the
function.

Ex:

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

returns 8, becuase 9 - 1 = 8

*/

const bstMinMax = (root) => {
  const helperFun = (node, min, max) => {
    if(node === null) return [min,max]
  
    if(min > node.value) min = node.value;
    if(max < node.value) max = node.value;
    min = Math.min(helperFun(node.left, min, max)[0], min);
    max = Math.max(helperFun(node.right, min, max)[1], max);
    return [min, max];
  }
  let ans = helperFun(root, Infinity, -Infinity)
  return ans[1] - ans[0];
};
let bst = new BinarySearchTree(6);
bstMinMax(bst);
/*

Extension: (not necessarily related in technique to above problem, but
nevertheless still a BST problem)

Given a binary search tree (BST), find the lowest common ancestor (LCA) of two
given nodes "p" and "q" in the BST. Return the LCA node itself.

Ex:

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

The LCA of node 1 and node 3 is node 2.
The LCA of node 8 and node 9 is node 9.
The LCA of node 2 and node 8 is node 4.

*/
const lowestCommonAncestor = (root, p, q) => {
  if (p === q) return p;
  let ans;
  const helperFun = (root, p, q) => {
    if(!root) return 0;
    let left = helperFun(root.left, p, q);
    let right = helperFun(root.right, p ,q)
    let current = 0;
    if(root.value === p.value || root.value === q.value) current = 1;
    if(current + left + right >= 2) ans = root;
    return current + left + right > 0 ? 1: 0;
  }
  helperFun(root, p, q)
  return ans;
}

module.exports = {BinarySearchTree, bstMinMax, lowestCommonAncestor};
