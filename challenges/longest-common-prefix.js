/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "". (Note: All given inputs are in lowercase letters a-z.)

ex: longestCommonPrefix(["flower","flow","flight"]) --> "fl"

longestCommonPrefix(["dog","racecar","car"]) --> "" (There is no common prefix among the input strings)

*/

const longestCommonPrefix = (strs) => {
  if(strs.length === 1) return strs[0];
  if(strs.length === 0) return '';
  let ans = '';
  let current = strs[0];
  for(let i = 1; i < strs.length; i++){
    for(let j = 0; j < current.length; j++){
      if(current[j] === strs[i][j]) ans += current[j];
    }
    current = ans;
    ans = '';
  }
  return current;
};

module.exports = { longestCommonPrefix };
