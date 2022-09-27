/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 * @see: Permutations: https://stattrek.com/statistics/dictionary.aspx?definition=permutation
 * @see: Palindromes: https://examples.yourdictionary.com/palindrome-examples.html
 *
 * In terms of time complexity, see if you can solve this in O(n) / linear time.
 * 
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 * Hint: Think about the length of the string and how that relates to the frequencies of the characters
 */

const permPalin = str => {
  if(typeof str != 'string') return false;
  let ans = new Set();
  for(let i = 0; i < str.length; i++){
    if(ans.has(str[i])) ans.delete(str[i]);
    else ans.add(str[i]);
  }
  let count = 0;
  ans.forEach(() => {
    count++;
  })
  return count < 2;
};

/* 
 * Extension: Solve in constant space complexity.
 */
const permPalinAdvanced = str => {
  if(typeof str != 'string') return false;
  let ans = {};
  for(let i = 0; i < str.length; i++){
    if(ans[str[i]]) ans[str[i]]++;
    else ans[str[i]] = 1;
  }
  let count = 0;
  Object.values(ans).forEach(ele => {
    if(ele % 2 === 1) count++;
  })
  return count < 2;
};

module.exports = { permPalin };