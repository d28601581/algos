/*

Given n pairs of parentheses, write a function to generate all combinations of
well-formed parentheses.

For example, given n = 2, a solution set is:

[
  "(())",
  "()()"
]

Given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

Given n = 0, a solution set is:

[
  ""
]

*/

const generateParentheses = n => {

  let generateParenthesesHelper = n => {
    if(n === 0) return [''];
    if(n === 1) return ['()'];
    let a = new Set();
    let arr = generateParentheses(n - 1);
    for (let i = 0; i < arr.length; i++){
      a.add('(' + arr[i] + ')');
      a.add('()' + arr[i]);
      a.add(arr[i] + '()');
    }
    return Array.from(a);
  }
  return generateParenthesesHelper(n);
};

//console.log(generateParentheses(3))
module.exports = {generateParentheses};
