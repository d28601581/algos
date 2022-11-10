
const solution = (n) => {
  // Type your solution here
  const helper = (num) => {
    if(num < 0) return 0;
    else if(num === 0) return 1;
    return helper(num - 3) + helper(num - 2) + helper(num - 1);
  }
  return   helper(n);
};

console.log(solution(3))