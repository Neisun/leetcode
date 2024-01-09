/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 *
 * https://leetcode.cn/problems/island-perimeter/description/
 *
 * algorithms
 * Easy (70.04%)
 * Likes:    724
 * Dislikes: 0
 * Total Accepted:    147.2K
 * Total Submissions: 210.1K
 * Testcase Example:  '[[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]'
 *
 * 给定一个 row x col 的二维网格地图 grid ，其中：grid[i][j] = 1 表示陆地， grid[i][j] = 0 表示水域。
 * 
 * 网格中的格子 水平和垂直 方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。
 * 
 * 岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100
 * 。计算这个岛屿的周长。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入：grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
 * 输出：16
 * 解释：它的周长是上面图片中的 16 个黄色的边
 * 
 * 示例 2：
 * 
 * 
 * 输入：grid = [[1]]
 * 输出：4
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：grid = [[1,0]]
 * 输出：4
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * row == grid.length
 * col == grid[i].length
 * 1 
 * grid[i][j] 为 0 或 1
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  /**
   * 思路，求出所有陆地的个数*4 - 相邻的个数*2 = 周长
   */
  // // 记录所有的陆地的个数
  // let allLandNum = 0;
  // // 记录相邻的个数
  // let adjoiningLandNum = 0;
  // // 获取行与列
  // const m = grid.length;
  // const n = grid[0].length;
  // // 记录访问过
  // const visited = new Array(m).fill(false).map(_ => new Array(n).fill(false));
  // // 上下左右四个方向
  // const directions = [[0,-1],[0,1],[-1,0],[1,0]]
  
  // // DFS函数
  // const dfs = (x, y) => {
  //   for (const [dx, dy] of directions) {
  //     const nextX = x + dx;
  //     const nextY = y + dy;
  //     // 越界
  //     if (nextX < 0 || nextX >= m || nextY < 0 || nextY >= n) continue;
  //     // 非陆地
  //     if (!grid[nextX][nextY]) continue;
  //     // 访问过 说明重复
  //     if (visited[nextX][nextY]) {
  //       adjoiningLandNum++;
  //       continue;
  //     }
  //     // 符合条件的
  //     // 记录总数
  //     allLandNum++;
  //     visited[nextX][nextY] = true;
  //     dfs(nextX, nextY);
  //   }
  // }

  // // 遍历网格
  // for (let x = 0; x < m; x++) {
  //   for (let y = 0; y < n; y++) {
  //     if (visited[x][y] || !grid[x][y]) continue;
  //     allLandNum += 1;
  //     visited[x][y] = true;
  //     dfs(x, y);
  //   }
  // }


  // console.log(allLandNum);
  // console.log(adjoiningLandNum);

  // return allLandNum * 4 - adjoiningLandNum * 2;

  // 上述思路是对的，但是在求重叠的时候算的有问题

  // 获取行与列
  const m = grid.length;
  const n = grid[0].length;
  // 陆地总个数
  let allLandNum = 0;
  // 相邻陆地的个数
  let adjoiningLandNum = 0;

  // 遍历网格
  for (let x = 0; x < m; x++) {
    for (let y = 0; y < n; y++) {
      // if (grid[x][y]) {
      //   allLandNum++;
      //   // 四个方向统计一下重叠，需要注意的时候，对于相邻的节点，每次统计上下左右四个节点时候，最终都会重复两次
      //   // 所以最终结果是 allLandNum * 4 - adjoiningLandNum/2*2
      //   // 上 grid[x][y-1]
      //   if (x >= 0 && x < m && y - 1 >= 0 && y - 1 < n && grid[x][y-1]) {
      //     adjoiningLandNum++;
      //   }
      //   // 下 grid[x][y+1]
      //   if (x >= 0 && x < m && y + 1 >= 0 && y + 1 < n && grid[x][y+1]) {
      //     adjoiningLandNum++;
      //   }
      //   // 左 grid[x-1][y]
      //   if (x - 1 >= 0 && x - 1 < m && y >= 0 && y < n && grid[x-1][y]) {
      //     adjoiningLandNum++;
      //   }
      //   // 右 grid[x+1][y]
      //   if (x + 1 >= 0 && x + 1 < m && y >= 0 && y < n && grid[x+1][y]) {
      //     adjoiningLandNum++;
      //   }
      // }

      // 所以上述过程可以简化只算两边，只算左和上就可以
      if (grid[x][y]) {
        allLandNum++;
        // 四个方向统计一下重叠，由于计算四个方向会导致重复两次，所以我们可以只统计左上即可
        // 所以最终结果是 allLandNum * 4 - adjoiningLandNum*2
        // 上 grid[x][y-1]
        if (x >= 0 && x < m && y - 1 >= 0 && y - 1 < n && grid[x][y-1]) {
          adjoiningLandNum++;
        }
        // 左 grid[x-1][y]
        if (x - 1 >= 0 && x - 1 < m && y >= 0 && y < n && grid[x-1][y]) {
          adjoiningLandNum++;
        }
      }
    }
  }

  // console.log(allLandNum * 4 - (adjoiningLandNum / 2) * 2)

  // return allLandNum * 4 - (adjoiningLandNum / 2) * 2;
  return allLandNum * 4 - adjoiningLandNum * 2;
};
// @lc code=end

const grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
// const grid = [[1]]
// const grid = [[1,0]]
// const grid = [
//   [1,1],
//   [1,1]
// ]

islandPerimeter(grid);


