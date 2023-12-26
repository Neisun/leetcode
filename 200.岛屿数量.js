/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 *
 * https://leetcode.cn/problems/number-of-islands/description/
 *
 * algorithms
 * Medium (59.77%)
 * Likes:    2385
 * Dislikes: 0
 * Total Accepted:    744.9K
 * Total Submissions: 1.2M
 * Testcase Example:  '[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]'
 *
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
 * 
 * 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
 * 
 * 此外，你可以假设该网格的四条边均被水包围。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：grid = [
 * ⁠ ["1","1","1","1","0"],
 * ⁠ ["1","1","0","1","0"],
 * ⁠ ["1","1","0","0","0"],
 * ⁠ ["0","0","0","0","0"]
 * ]
 * 输出：1
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：grid = [
 * ⁠ ["1","1","0","0","0"],
 * ⁠ ["1","1","0","0","0"],
 * ⁠ ["0","0","1","0","0"],
 * ⁠ ["0","0","0","1","1"]
 * ]
 * 输出：3
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == grid.length
 * n == grid[i].length
 * 1 
 * grid[i][j] 的值为 '0' 或 '1'
 * 
 * 
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  /**
   * 思路
   * 给定一个点之后，通过BFS或者DFS，像病毒一样蔓延，以点成面，对于访问过的做标记
   * 那么不可能是无限的往下走，无论是DFS还是BFS总会有个终止条件
   * 终止条件就是 如果当前节点访问过或者当前节点是海水，那么就终止
   * 
   * 现在问题来了，无论是利用DFS或者BFS都很容易从一个点出发，开始蔓延，那么我们该怎么统计岛屿数量
   * 岛屿是指陆地连成片的数量
   */

  /**
   * 第一种方式，我们使用DFS的方式
   */
  const m = grid.length;
  const n = grid[0].length;

  // 使用一个数组记录是否访问过该节点
  const visited = new Array(m).fill(false).map(_ => new Array(n).fill(false));
  // 四个方向 上右下左 [x,y]
  const directions = [[0, -1], [1 ,0], [0, 1], [-1, 0]];
  // 记录岛屿个数
  let result = 0;

  // dfs函数 在dfs函数里记录访问过
  const dfs = (visited, x, y) => {
    // 如果当前的节点访问过或者是海水，不往下走
    if (visited[x][y] || grid[x][y] === '0') return;
    // 标记访问过
    visited[x][y] = true;
    // 遍历四个方向
    for (const [_x, _y] of directions) {
      const nextX = x + _x;
      const nextY = y + _y;
      // 要保证不越界
      if (nextX >= 0 && nextX < m && nextY >= 0 && nextY < n) {
        // 继续往下走
        dfs(visited, nextX, nextY);
      }
    }
  };

  // 遍历每个节点
  for (let x = 0; x < m; x++) {
    for (let y = 0; y < n; y++) {
      if (!visited[x][y] && grid[x][y] === '1') {
        result++;
        dfs(visited, x, y);
      }
    }
  }

  return result;


  /**
   * BFS的方式
   * 与上述方式几乎如出一辙，只不过遍历的方式有所不同
   */

  // // 统计二维数组的行与列
  // const m = grid.length;
  // const n = grid[0].length;
  // // 创建二维数组用以记录是否访问过
  // const visited = new Array(m).fill(false).map(_ => new Array(n).fill(false));
  // // 统计结果
  // let result = 0;
  // // 四个方向二维数组，记录上右下左四个坐标的变换 [x,y]
  // const directions = [[0,-1], [1,0], [0,1], [-1,0]];
  // // 记录节点的队列
  // const queue = [];

  // // 广搜
  // const bfs = (visited, queue) => {
  //   // const queue = [];
  //   // queue.push([x,y]);
  //   // visited[x][y] = true;
  //   while (queue.length) {
  //     // 从队列头部取出来
  //     const [x,y] = queue.shift();
  //     for (const [_x, _y] of directions) {
  //       const nextX = x + _x;
  //       const nextY = y + _y;
  //       // 保证不越界
  //       if (nextX < 0 || nextX >= m || nextY < 0 || nextY >= n) continue;
  //       if (!visited[nextX][nextY] && grid[nextX][nextY] === '1') { // 保证没访问过，以及是陆地
  //         queue.push([nextX, nextY]);
  //         visited[nextX][nextY] = true;
  //       }
  //     }
  //   }
  // };

  // // 遍历每个节点
  // for (let x = 0; x < m; x++) {
  //   for (let y = 0; y < n; y++) {
  //     if (!visited[x][y] && grid[x][y] === '1') {
  //       result++;
  //       queue.push([x,y]);
  //       visited[x][y] = true;
  //       bfs(visited, queue)
  //       // bfs(visited, x, y);
  //     }
  //   }
  // }

  // console.log(result);

  // return result;
};
// @lc code=end

// const grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ];

const grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]

numIslands(grid);


