/*
You are given an array of integers with both positive and negative numbers.
A valid subarray is any slice of consecutive elements from the array.
(
  e.g. the following are some valid subarrays of [3, 11, 2, 7, 4]
  [3, 11, 2]
  [11, 2, 7]
  [2]
  [3, 11, 2, 7, 4]
)
Find the subarray with the largest sum from the input array.

e.g.
input = [1, -2, 3, 10, -4, 7, 2, -5]
maxSubarray(input); 
// returns 18 from subarray [3, 10, -4, 7, 2]

input2 = [15, 20, -5, 10]
maxSubarray(input2); 
// returns 40 from subarray [15, 20, -5, 10]
*/

const maxSubarray = (arr) => {
  let maxSum = -Infinity;
  // for(let i = 0; i < arr.length; i++){
  //   let currentSum = 0;
  //   for(let j = i; j < arr.length; j++){
  //     currentSum += arr[j];
  //     maxSum = Math.max(maxSum, currentSum);
  //   }
  // }
  let currentSum = 0;
  for(let i = 0; i < arr.length; i++){
    if(currentSum < 0) currentSum = 0;
    currentSum += arr[i];
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
}

/*
  Extension: solve in linear time and constant space
  Hint: Kadane's Algorithm
*/

const kadanesMaxSubarray = (arr) => {
  let sum = -Infinity;
  for(let i = 1; i < arr.length; i++){
    arr[i] = Math.max(arr[i], arr[i] + arr[i-1]);
    sum = Math.max(sum, arr[i]);
  }
  return sum;
}

module.exports = { maxSubarray, kadanesMaxSubarray };
