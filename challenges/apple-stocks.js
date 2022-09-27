/*

Consider an array called apple-stock as an argument. This array 
represents the variation of an Apple stock during a single day. 
The values in the array are in chronological order.

ex: [1000, 500, 1500, 2000, 0] --> The stock began at 1000 and closed at 0;

Write a function called highestProfit that calculates the highest profit 
you can make in the given day by buying and selling a single Apple stock. 
This is comprised of one buy and one sell. Keep your worst case 
time complexity in O(n^2).

Return 0 if no profit is possible OR if input is invalid.

** Extension **
Refactor your function to improve your time complexity to O(n).
Hint: Use pointers to keep track of the indices of max, min to 
calculate profit along the array.

*/

const highestProfit = apple_stock => {
    if(!Array.isArray(apple_stock) || apple_stock[0] === NaN) return 0;
    let min = 0; max = 0;
    let current = 0;
    while(max < apple_stock.length){
      if(apple_stock[max] < apple_stock[max + 1]) max++;
      else {
        if(apple_stock[max] - apple_stock[min] > current){
          current = apple_stock[max] - apple_stock[min];
        }
        max++;
        if(apple_stock[max] < apple_stock[min]) min = max;
      }
    }
    return current;
}
//console.log(highestProfit([0, 300, 200, 500, 600, 100, 399, 350, 500]))

module.exports = {highestProfit}