
//BST
//determine if it's valid BST

// left is less that node's key
//right is greater than node's key.

//.     6
//.    / \
//.   4.  8
//.  / \. 
//. 1. 7.    

// input: array of numbers [6, 4, 8, 1, 7, null, null]
// output: boolean (true if it's valid BST, false if it's not validS

// what if it's an [7,null,null] => 

// if the length of array is less than 3, then return false;

// first level = 1 element = 2^0
// second level = 2 elements = 2^1 
// third levl = 4 elements = 2^2 //cached 4
// four level = 8 elements = 2^3 //8
// five = 16 elements = 2^4
//

class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

function BSTValid(array) {
  if (array.length<3) return false;
  
  let root = new Node(array[0]);
  let originRoot = root;
  array.shift();
  let que = [];
  while (array.length) {
    // console.log(array)
    // console.log(que)
    let newNode = new Node(array[0])
    if (root.left === null) {
      root.left = newNode;
      array.shift();
      que.push(root.left);
      continue;
    } else if (root.right === null) {
      root.right = newNode;
      array.shift();
      que.push(root.right);
      continue;
    }	else if(root.left != null && root.right != null){
      root = que.shift();
    }
  }
  
  function validTree(root, min, max) {
        
    let result = true;
    if (root.left !== null && root.left.val !== null) {
      if (root.left.val > root.val) {
        console.log(root.left.val, root.val)
        return false;
      } else {
        result = validTree(root.left)
        if (!result) return result;
      }
    }
    
    if (root.right !== null && root.right.val !== null) {
      if (root.right.val<root.val) {
        console.log(root.right.val, root.val)
        return false;
      } else {
        result = validTree(root.right)
        if (!result) return result;
      }
    }
    
    return result;
  }
  
  return validTree(originRoot, -Infinity, Infinity);
}

console.log(BSTValid([6, 4, 8, 1, 7, null, null]));


/*
			  6
    4      8
   1 7 null null
*/




















// //3 sum
// //itterate through the array
// //assign 2 pointers one of those pointers at the end and the other at the beginning

// function threeSum(array){
//   const solution = []
//   array = array.sort((a,b) => a - b )
//   for (let i = 0; i < array.length-2 ; i++) {    
//     if (array[i] != array[i-1]) {
      
    
//     let leftP = i+1;
//     let rightP = array.length - 1;
    
//     while(leftP < rightP) {
//       const sum = array[i] + array[leftP] + array[rightP];
//       if (sum === 0) {
//         console.log('peng help please')
//         const point = [array[i], array[leftP], array[rightP] ]
//         solution.push(point)
//         while(array[leftP] == array[leftP + 1]) leftP++
//         while(array[rightP] == array[rightP-1]) rightP--
//         leftP++;
//         rightP--;
        
        
//       }  
//       if( sum > 0) { 
//         rightP--;
//       }  
//       if( sum < 0 ) {
//         leftP++;
//       }
//     }  
    
//   }
//   }
  
// 	// const array21 = [];
// 	// for (let item of solution) {
// 	// array21.push(JSON.parse(item));
// 	// }
//   // for (let i = 0; i < solution.length - 1; i++) {
//   //   for (let j = i+1; j < solutionlength; j++) {
//   //     if (JSON.stringify(solution[i]) == JSON.stringify(solution[j])
//   //   }
//   // }
//   return solution;
  
// }
// let ans = threeSum([-1, 0, 1, 2, -1, -1]);

// // [-1, -1, -1, 0, 1, 2]
// console.log(ans);
// function threeSumPengCubed(array){
//   const solution = new Set()
//   array = array.sort((a,b) => a - b )
//   for (let i = 0; i < array.length - 2 ; i++) {
    
//     // if (array[i] == array?.[i-1]) continue;
//     let leftP = i+1;
//     let rightP = array.length - 1;
    
//     while(leftP < rightP) {
//       const sum = array[i] + array[leftP] + array[rightP];
//       if (sum === 0) {
//         console.log('peng help')
//         const point = [array[i], array[leftP], array[rightP] ]
//         // while(array[leftP] === array[leftP+1]) leftP++;
//         // while(array[rightP] === array[rightP-1]) rightP--;
//         // leftP++;
//         // rightP--

//         solution.add(JSON.stringify(point))
//         break;
//       }  
//       if( sum > 0) { 
//         rightP--;
//       }  
//       if( sum < 0 ) {
//         leftP++;
//       }
//     }
    
//   }
  
//   const array21 = [];
//   for (let item of solution) {
//   	array21.push(JSON.parse(item));
    
// 	}
//   // for (let i = 0; i < solution.length - 1; i++) {
//   //   for (let j = i+1; j < solutionlength; j++) {
//   //     if (JSON.stringify(solution[i]) == JSON.stringify(solution[j])
//   //   }
//   // }
//   return array21;
  
// }
  
//JSON.stringify(a1)==JSON.stringify(a2)t, 