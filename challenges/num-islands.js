/*

Given a 2d grid map of 1s (land) and 0s (water), count the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands
horizontally or vertically. You may assume all four edges of the grid are all
surrounded by water.

EXAMPLE 1:

Input:
[
  [0, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0]
]
Output: 1

Input:
[
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1]
]
Output: 3

Assume that the grid will be an array of arrays of numbers either 0 or 1, and
that the grid will have at least one element.

*/

const numIslands = grid => {
  let memory = new Set();
  let count = 0;
  let queue = [];
  for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[0].length; j++){
      if(memory.has('' + i + j)) {
        continue;
      }
      let haveOne = false;
      queue.push([i, j]);
      while(queue.length > 0){
        let [x, y] = queue.shift();
        memory.add('' + x + y);
        if(x < 0 || x >= grid.length || y >= grid[0].length || y < 0) continue;
        curr = grid[x][y];
        if(grid[x][y] === 0) continue;
        else {
          haveOne = true;
          if(grid.length > x && grid[0].length > y) {
            if(!memory.has('' + (x + 1) + y)) queue.push([x + 1, y]);
            if(!memory.has('' + x + (y + 1))) queue.push([x, y + 1]);
            if(!memory.has('' + (x - 1) + y)) queue.push([x - 1, y]);
            if(!memory.has('' + x + (y - 1))) queue.push([x, y - 1]);
          }
        }
      }
      if(haveOne) count++;
    }
  }

  return count;
};

let grid = [[1, 1, 0, 0, 0, 1, 0]];
numIslands(grid);
module.exports = {numIslands};
