/*
 * @lc app=leetcode.cn id=1020 lang=javascript
 *
 * [1020] 飞地的数量
 *
 * https://leetcode.cn/problems/number-of-enclaves/description/
 *
 * algorithms
 * Medium (61.91%)
 * Likes:    253
 * Dislikes: 0
 * Total Accepted:    69.9K
 * Total Submissions: 113K
 * Testcase Example:  '[[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]'
 *
 * 给你一个大小为 m x n 的二进制矩阵 grid ，其中 0 表示一个海洋单元格、1 表示一个陆地单元格。
 * 
 * 一次 移动 是指从一个陆地单元格走到另一个相邻（上、下、左、右）的陆地单元格或跨过 grid 的边界。
 * 
 * 返回网格中 无法 在任意次数的移动中离开网格边界的陆地单元格的数量。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]
 * 输出：3
 * 解释：有三个 1 被 0 包围。一个 1 没有被包围，因为它在边界上。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：grid = [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]
 * 输出：0
 * 解释：所有 1 都在边界上或可以到达边界。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 500
 * grid[i][j] 的值为 0 或 1
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
  /**
   * 与岛屿数量类似，只不过这次如果岛屿存在节点靠近边界，就不算
   * 也就是说在之前的判断条件上加入了是否在边界的上的判断
   * 原先我的思路是从一个点出发，如果走着走着遇到边界的情况就把计数计为0，从头开始，但是发现怎么都不对
   * 解题受阻
   */

  // // 获取行与列
  // const m = grid.length;
  // const n = grid[0].length;
  // // 记录访问过
  // const visited = new Array(m).fill().map(_ => new Array(n).fill(false));
  // // 飞地数量
  // let count = 0;
  // // 四个方向 上下左右 [x,y]
  // const directions = [[0,-1],[0,1],[-1,0],[1,0]]

  // // 深度优先搜索
  // const dfs = (x, y) => {
  //   for (const [dx, dy] of directions) {
  //     // 下个节点的坐标
  //     const nextX = x + dx;
  //     const nextY = y + dy;
  //     // 越界处理
  //     if (nextX < 0 || nextX >= m || nextY < 0 || nextY >= n) continue;
  //     // 处理访问过的节点 与非陆地 在边界上
  //     if (visited[nextX][nextY] || grid[nextX][nextY] === 0) continue;
  //     // 走到边界了 应该直接退出，并且把count置为0
  //     if (nextX === 0 || nextY === 0 || nextX === m-1 || nextY === n-1) {
  //       count = 0;
  //       return;
  //     }
  //     // 陆地的情况
  //     visited[nextX][nextY] = true;
  //     count+=1;
  //     dfs(nextX, nextY);
  //   }
  // }

  // // 遍历网格，找每一个符合条件的起点
  // for (let x = 0; x < m; x++) {
  //   for (let y = 0; y < n; y++) {
  //     // 处理访问过的 非陆地的 在边界上的
  //     if (visited[x][y] || grid[x][y] === 0 || x === 0 || y === 0 || x === m-1 || y === n-1) continue;
  //     // 符合条件的情况
  //     visited[x][y] = true;
  //     count+=1;
  //     dfs(x, y);
  //   }
  // }

  // console.log(count);

  // return count;

  /**
   * 新思路
   * 既然可以走到边界的陆地不算数，那么我们就从边界出发，无论是DFS还是BFS的方式去遍历
   * 就可以找到与边界连接的陆地，把这些陆地全部标记为0
   * 接着就可以按照正常的逻辑去找陆地的数量
   */

  // 获取行与列
  const m = grid.length;
  const n = grid[0].length;
  // 记录访问过 因为从边界出发，遇到陆地就变成非陆地，所以可以不使用visited
  // const visited = new Array(m).fill().map(_ => new Array(n).fill(false));
  // 四个方向 上下左右 [x,y]
  const directions = [[0,-1],[0,1],[-1,0],[1,0]];
  // 记录结果
  let count = 0;

  const dfs = (x, y) => {
    grid[x][y] = 0;
    for (const [dx, dy] of directions) {
      // 下一个节点
      const nextX = x + dx;
      const nextY = y + dy;
      // 越界的情况
      if (nextX < 0 || nextX >= m || nextY < 0 || nextY >= n) continue;
      // 访问过的节点以及非陆地的情况
      if (!grid[nextX][nextY]) continue;
      // 其他都是符合条件的节点
      // visited[nextX][nextY] = true;
      grid[nextX][nextY] = 0;
      dfs(nextX, nextY);
    }
  }

  // 四个边界开始遍历
  // 上
  for (let y = 0; y < n; y++) {
    if (grid[0][y]) {
      dfs(0, y);
    }
    if (grid[m-1][y]) {
      dfs(m-1, y)
    }
  }
  // 下 把下的处理可以与上的处理放在一起
  // for (let y = 0; y < n; y++) {
  //   if (grid[m-1][y]) {
  //     dfs(m-1, y)
  //   }
  // }
  // 左
  for (let x = 0; x < m; x++) {
    if (grid[x][0]) {
      dfs(x, 0);
    }
    if (grid[x][n-1]) {
      dfs(x, n-1);
    }
  }
  // 右 同样的，对于右的处理也可以放在左的处理
  // for (let x = 0; x < m; x++) {
  //   if (grid[x][n-1]) {
  //     dfs(x, n-1);
  //   }
  // }

  // 然后就可以数一下剩余的陆地了
  for (let x = 0; x < m; x++) {
    for (let y = 0; y < n; y++) {
      if (grid[x][y]) {
        count++;
      }
    }
  }
  // console.log(count);
  // console.log(grid);
  return count;
};
// @lc code=end

// const grid = [
//   [0,0,0,0],
//   [1,0,1,0],
//   [0,1,1,0],
//   [0,0,0,0]
// ]

const grid = [
  [0,1,1,0],
  [0,0,1,0],
  [0,0,1,0],
  [0,0,0,0]
]

numEnclaves(grid);
