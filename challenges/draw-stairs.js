/* 

Write a function that logs to the console an nxn representation of a staircase for any 
given nonnegative height, n. If the passed-in height is negative, console log an empty string.
The staircase must climb up from left to right. Each level of stairs logs a string of
asterisks and/or leading spaces. Note that the last stair should only consist of 
asterisks without any leading spaces.
 
For example:     
drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

const drawStairs = n => {
  // if(n <= 0)   return '';
  // console.log(drawStairsHelper(n,n));
  for(let count = 1; count <= n; count++){
    console.log(' '.repeat(n-count) + '*'.repeat(count))
  }
};

// const drawStairsHelper = (n, total) => {
//   let ans = ''; 
//   for(let i = 0; i < total - n; i++){
//     ans += ' ';
//   }
//   for(let i = 0; i < n; i++){
//     ans += '*';
//   }

//   if(n === 1){
//     return ans + '\n';
//   } 
//   return drawStairsHelper(n - 1, total) + ans + '\n';
// }
/* 

Extension:
Write a function that logs to the console an nxn overlapping '+' and 'X' for a given 
number n where n must be an odd positive number. Note that each row of the star must
be 'n' characters long. Be sure to include any leading/trailing spaces per row.

Examples:
drawStar(1) ->
+

drawStar(3) ->
\|/
-+-
/|\

drawStar(5) ->
\ | /
 \|/ 
--+--
 /|\ 
/ | \

*/

const drawStar = n => {
  if(n % 2 === 0 || n <= 0) return;

  for(let i = 1; i <= n; i++){
    let str = '';
    for(let j = 1; j <= n; j++){
      if(i === Math.ceil(n/2) && i === j ){
        str += '+';
      } else if (i === j){
        str += '\\';
      } else if (j === Math.ceil(n/2)){
        str += '|';
      } else if (i + j === n + 1){
        str += '/';
      } else if (i === Math.ceil(n/2)){
        str += '-';
      } else {
        str += ' ';
      }
    }
    console.log(str);
  }

};


module.exports = { drawStairs, drawStar };
