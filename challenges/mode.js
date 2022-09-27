/*

Given an array of numbers (integers), return the mode, that is, the number that
appears most often. If there are multiple modes, use the max of the modes.

Assume that at least one number is present in the array.

e.g.
mode([3, 2, 4, 3]) -> 3
mode([7, 5, 8, 8, 2, 5]) -> 8

*/

const mode = array => {
    let count = {};
    array.forEach(element => {
        if(!count[element]){
            count[element] = 0;
        }
        count[element]++;
    });
    let most = 0, ans;
    for(let i in count){
        if(count[i] > most) {
            most = count[i];
            ans = parseInt(i);
        } else if (count[i] === most){
            if(parseInt(i) > ans) ans = i;
        }
    }
    return parseInt(ans);
};
//console.log(mode([12, 5, 32, 4]))

/*

Extension:

Given an arbitrarily nested array of numbers (integers), return the mode, that
is, the number that appears most often. If there are multiple modes, use the max
of the modes.

Assume that at least one number is present in the nested array structure,
although some of the nested arrays may be empty.

e.g.
mode([[3], [2, [4]], 3]) -> 3
mode([7, [[5, [8], 8], 2, 5]]) -> 8
mode([4, []]) -> 4 

*/

const modeNested = array => {
    let count = {};
    function countNum(array){
        array.forEach((element) => {
            if(Array.isArray(element)){
                countNum(element);
            } else {
                if(!count[element]){
                    count[element] = 0;
                }
                count[element]++;
            }
        })
    }
    countNum(array);
    let most = 0, ans;
    for(let i in count){
        if(count[i] > most) {
            most = count[i];
            ans = parseInt(i);
        } else if (count[i] === most){
            if(parseInt(i) > ans) ans = i;
        }
    }
    return parseInt(ans);
  
};
//console.log(modeNested([7, [[5, [8], 8], 2, 5]]))

module.exports = {mode, modeNested};
