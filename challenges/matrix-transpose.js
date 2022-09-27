/* 

Given a two dimensional array, write a function called 'matrixTranspose' that returns 
a transposed version of that array.

Example: 
const twoDimArray = [['fred', 'barney'], 
                     [30, 40], 
                     [true, false]]
                      
console.table(matrixTranspose(twoDimArray)); // -> [['fred', 30, true], 
                                                    ['barney', 40, false]]

*/

// 00   00
// 01   10
// 10   01
// 11   11
// 20   02
// 21   12

const matrixTranspose = matrix => {
  const ans = [];
  for(let i = 0; i < matrix[0]?.length; i++){
    ans[i] = [];
  }
  for(let i = 0; i < matrix[0]?.length; i++){
    for(let j = 0; j < matrix.length; j++){
      ans[i][j] = matrix[j][i];
    }
  }
  return ans;
};
// const twoDimArray = [['fred', 'barney'], 
//                      [30, 40], 
//                      [true, false]]
                      
// console.table(matrixTranspose(twoDimArray));

/*

Extension:
Given an nxn matrix, write a function called 'matrixRotate' that rotates the matrix 90 degrees clockwise.
If given an mxn matrix, return undefined.

For example:  
const matrix = [  [1, 2, 3],
                  [4, 5, 6],
                  [7, 8, 9]  ]

console.table(matrixRotate(matrix)) // ->  [  [7, 4, 1],
                                              [8, 5, 2],
                                              [9, 6, 3]  ]

BONUS: Rotate the matrix in place. In other words, the space complexity of the solution should be O(1).

*/


const matrixRotate = matrix => {
  if(matrix.length == 0) return matrix;
  if(matrix.length != matrix[0].length) return undefined;
  for(let i = 0; i < Math.floor(matrix.length / 2); i++){
    for(let j = i; j < matrix.length - i - 1; j++){
      let first = matrix[i][j];
      matrix[i][j] = matrix[matrix.length - 1 - j][i];
      matrix[matrix.length - 1 - j][i] = matrix[matrix.length - 1 - i][matrix.length - 1 - j];
      matrix[matrix.length - 1 - i][matrix.length - 1 - j] = matrix[j][matrix.length - 1 - i];
      matrix[j][matrix.length - 1 - i] = first;
    }
  }
  return matrix;
};
const matrix = [  [1, 2, 3],
                  [4, 5, 6],
                  [7, 8, 9]  ]

console.table(matrixRotate(matrix))
// ->  [  [7, 4, 1],
//        [8, 5, 2],
//        [9, 6, 3]  ]


module.exports = { matrixTranspose, matrixRotate };
