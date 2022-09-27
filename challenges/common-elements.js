/*

Write a function called commonElements that takes in any number of arrays in the 
argument. The arrays may contain both numbers and strings. It should return a new array
with all the common elements (both numbers and/or strings) from the given input. 
If there are no common numbers/strings, return "Nothing in Common!"
Assume there are no duplicates within the array.


ex: 
arr1 = [2, 10,'cat', 3, 99, 2000, 'dog', 'lion'];
arr2 = [3, 7, 2, 2000, 1, 'dog', 'cat'];
arr3 = [2, 100, 2000, 'dog', 3, 'lion'];

commonElements(arr1, arr2, arr3) -> [2, 3, 2000, 'dog']
*/

const commonElements = (...args) => {
  let container = new Set(args[0]);
  let ans = [];
  //console.log(container)


  for (let i = 1; i < args.length; i++){
    ans = [];
    for(let j = 0; j < args[i].length; j++){
      if(!container.has(args[i][j])){
          container.add(args[i][j]);
      } else {
          ans.push(args[i][j]);
      }
    }
    //  console.log(ans)
    //  console.log(container)
    container = new Set(ans);
  }
  if(ans.length === 0) return 'Nothing in Common!';
  return ans;
}

// arr1 = [2, 10,'cat', 3, 99, 2000, 'dog', 'lion'];
// arr2 = [3, 7, 2, 2000, 1, 'dog', 'cat'];
// arr3 = [2, 100, 2000, 'dog', 3, 'lion'];


// console.log(commonElements([],['dog'],[1,2,'dog'],['dog']))


/*
** Extension **
Refactor your function to have O(n) time complexity.
*/

const commonElementsOptimized = (...args) => {
    let container = new Set(args[0]);
    let ans = [];    
    for (let i = 1; i < args.length; i++){
      ans = [];
      for(let j = 0; j < args[i].length; j++){
        if(!container.has(args[i][j])){
            container.add(args[i][j]);
        } else {
            ans.push(args[i][j]);
        }
    }
    container = new Set(ans);
    }
    if(ans.length === 0) return 'Nothing in Common!';
    return ans;
}

module.exports = {commonElements, commonElementsOptimized} 