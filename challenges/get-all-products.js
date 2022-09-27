/*

Given an array of at least two integers (which may be positive, negative, or zero),
return an array of all the possible products made by multiplying all but one number.
In other words, find all the products of multiplying any array.length - 1 numbers
in the array.

Example:

getAllProducts([1, 7, 3, 4]) -> [84, 12, 28, 21]
this is done via:
[7*3*4, 1*3*4, 1*7*4, 1*7*3]

getAllProducs([2, 5, 3]) -> [15, 6, 10]
this is done via:
[5*3, 2*3, 2*5]

Be careful in this problem! What if there is a zero (or multiple zeroes) in the
input array? How would you handle this?

*/

const getAllProducts = array => {
  let products = array.reduce((a,b) => a * b);
  if(products === 0){
    let zeroCount = 0;
    let prod = 1;
    for(let i = 0; i < array.length; i++){
      if(array[i] === 0){
        zeroCount++;
        if(zeroCount >= 2){
          return Array(array.length).fill(0);
        }
      } else {
        prod *= array[i];
      }
    }
    let arr = Array(array.length - 1).fill(0);
    arr.push(prod);
    return arr;
  }
  let arr = [];
  for(let i = 0; i < array.length; i++){
    arr.push(products / array[i]);
  }
  return arr;
};

module.exports = {getAllProducts};
