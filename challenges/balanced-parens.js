/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' const wow = { yo: thisIsAwesome() }'); // true
 * balancedParens(' const newton = () => { telescopes.areSicc(); '); // false
 *
 *
 */

const balancedParens = input => {
    let stack = [];
    for(let i = 0; i < input.length; i++){
        if(input[i] === '[' || input[i] === '{' || input[i] === '(' )  stack.push(input[i]);
        else if(input[i] === ']' && stack [stack.length - 1] === '[')  stack.pop();
        else if(input[i] === '}' && stack [stack.length - 1] === '{')  stack.pop();
        else if(input[i] === ')' && stack [stack.length - 1] === '(')  stack.pop()
        else if(input[i] === ')' || input[i] === '}' || input[i] === ']') return false;
    }
    return stack.length === 0;
};
module.exports = { balancedParens} ;
