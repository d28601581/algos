/*
You have an unsorted array of n + 1 numbers, with the numbers from 1 to n.
One number is duplicated. Find it.
ex: [1,5,4,3,6,2,4,7] should return 4
*/

const duplicateNumber = array => {
  let set = new Set();
  let ans;
  array.forEach(element => {
      if(!set.has(element)){
          set.add(element);
      } else {
          ans = element;
      }
  });
  return ans;
};
//console.log(duplicateNumber([1,5,4,3,6,2,4,7]))


/* EXTENSION:
You have an unsorted array of n + 1 numbers, with the range of k to k + n - 1, with an extra number that is a duplicate.
(k is not necessarily 1) Find the duplicate. Do this in O(n) time and O(1) space complexity.
ex: [3, 4, 7, 6, 8, 5, 6] should return 6
*/

const duplicateNumberAdvanced = array => {
    // array.sort();
    // console.log(array);
    // for(let i = 0; i < array.length - 1; i++){
    //     if(array[i] === array[i+1]){
    //         return array[i];
    //     }
    // }
    // return undefined;
  let total = 0;
  let min = Infinity;
  for (let i = 0; i < array.length; i++){
    total += array[i];
    if(min > array[i]) min = array[i];
  }
  return total - ((array.length - 1) / 2 * (min + min + array.length - 2));
};

//console.log(duplicateNumberAdvanced([1,5,4,3,6,2,4,7]))


module.exports = { duplicateNumber, duplicateNumberAdvanced };
