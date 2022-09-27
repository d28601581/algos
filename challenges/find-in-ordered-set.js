/*
Write a function findInOrderedSet that determines if a target value exists within an array of numbers.

Assuming that the array is sorted in ascending order, can you accomplish this with time complexity better than O(n)?

ex:
const nums = [-3, 0, 8, 13, 37]
findInOrderedSet(nums, 0);  -> true
findInOrderedSet(nums, 2);  -> false
*/

const findInOrderedSet = (array, target) => {
  function bS(arr, l, r, target){
    if(r >= l){
      let mid = l + Math.floor((r - l) / 2);
      // console.log(l)
      // console.log(arr[mid])
      // console.log(r)
      if(arr[mid] === target) return true;
      if(arr[mid] > target) return bS(arr, l, mid - 1, target);
      return bS(arr, mid + 1, r, target);
    }
    return false;
  }
  return bS(array, 0, array.length - 1, target);
};



/*
Extension:

Write a function findIn2dMatrix that determines if a target value exists within a two dimensional matrix.
The matrix has the following properties:
  - Each subarray in the matrix contains numbers sorted in ascending order
  - The *last* element in each subarray is smaller than than the *first* element in each following subarray  

ex:
const matrix = [
  [-3, -1,  2,  4,  5],
  [ 6,  7,  8, 13, 37],
  [41, 49, 50, 61, 75]
];
findIn2dMatrix(matrix, 13); -> true
findIn2dMatrix(matrix, 42); -> false

*/

const findIn2dMatrix = (matrix, target) => {
  for(let i = 0; i < matrix.length; i++){
    //console.log(matrix[i][matrix[i].length - 1])
    if(target <= matrix[i][matrix[i].length - 1]){
      return findInOrderedSet(matrix[i], target);
    }
  }
  return false;
};
// const matrix = [
//   [-9, -1,  2,  4,  5],
//   [ 6,  7,  8, 13, 37],
//   [39, 43, 49, 50, 61],
//   [64, 67, 72, 75, 81],
//   [88, 90, 95, 97, 99]
// ];
// findIn2dMatrix(matrix, 5)
module.exports = { findInOrderedSet, findIn2dMatrix };
