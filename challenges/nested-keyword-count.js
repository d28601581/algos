/*

Given an arbitrarily nested array of strings, and a target keyword strong,
return the number of times a keyword appears in a nested array of arrays.

keywordCount(['bye', 'hi', ['cool', 'hi']], 'hi') -> 2 because 'hi' appears twice
keywordCount(['x', 'y', ['x', 'x'], 'a'], 'x') -> 3
keywordCount(['blah', 'key', ['inside', ['really inside']]], 'lol') -> 0

*/

const keywordCount = (array, keyword) => {
    if(array.length === 0) return 0;
    let count = 0;
    for(let i = 0; i < array.length; i++){
        if(Array.isArray(array[i])){
            count += keywordCount(array[i], keyword);
        } else if (array[i] === keyword){
            count++;
        }
    }
    return count;
};

/*

Extension:

Given a nested array of arrays, return an array of keywords that appear the most
often. Return multiple results within the array if there's a tie. Return the
multiple in lexiographical (alphabetic) order.

keywordMode([['cars', 'bat'], 'apple', 'bat', 'cars']) -> ['bat', 'cars']
keywordMode([['ace', 'cool'], ['hi'], 'cool']) -> ['cool']

*/

const keywordMode = array => {
    let container = {};
    const keywordModeHelper = array => {
        if(array.length === 0) return 0;

        for(let i = 0; i < array.length; i++){
            if(Array.isArray(array[i])) keywordModeHelper(array[i]);
            else if (!container[array[i]]) container[array[i]] = 1;
            else container[array[i]]++;
        }
    }
    keywordModeHelper(array);

    const arr = [];
    let most = 0;
    for(const key in container){
        if(most < container[key]) most = container[key];
    }
    for(const key in container){
        if(most === container[key]) arr.push(key);
    }
    return arr.sort();
};


module.exports = {keywordCount, keywordMode};
