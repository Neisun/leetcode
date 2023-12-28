/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 *
 * https://leetcode.cn/problems/max-area-of-island/description/
 *
 * algorithms
 * Medium (68.06%)
 * Likes:    1037
 * Dislikes: 0
 * Total Accepted:    308.8K
 * Total Submissions: 453.6K
 * Testcase Example:  '[[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]'
 *
 * 给你一个大小为 m x n 的二进制矩阵 grid 。
 * 
 * 岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在 水平或者竖直的四个方向上 相邻。你可以假设 grid
 * 的四个边缘都被 0（代表水）包围着。
 * 
 * 岛屿的面积是岛上值为 1 的单元格的数目。
 * 
 * 计算并返回 grid 中最大的岛屿面积。如果没有岛屿，则返回面积为 0 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：grid =
 * [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
 * 输出：6
 * 解释：答案不应该是 11 ，因为岛屿只能包含水平或垂直这四个方向上的 1 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：grid = [[0,0,0,0,0,0,0,0]]
 * 输出：0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 50
 * grid[i][j] 为 0 或 1
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  /**
   * 这道题与岛屿面积几乎是如出一辙，只不过这次求得是最大的面积
   */

  /**
   * DFS解法
   */
  // 求出行列数
  // const m = grid.length;
  // const n = grid[0].length;
  // // 记录访问过的元素
  // const visited = new Array(m).fill(false).map(_ => new Array(n).fill(false));
  // // 记录最大面积值
  // let maxArea = 0;
  // // 走到新的起点的面积
  // let sumArea = 1;
  // // 四个方向 上右下左 [x,y]
  // const directions = [[0,-1], [1,0], [0,1], [-1,0]];

  // // bfs函数
  // const dfs = (x, y) => {
  //   // 遍历四个方向
  //   for (const [dx, dy] of directions) {
  //     // 下个位置的坐标
  //     const nextX = x + dx;
  //     const nextY = y + dy;
  //     // 越界
  //     if (nextX < 0 || nextX >= m || nextY < 0 || nextY >= n) continue;
  //     // 没被访问过并且是陆地
  //     if (!visited[nextX][nextY] && grid[nextX][nextY] === 1) {
  //       visited[nextX][nextY] = true;
  //       sumArea += 1;
  //       dfs(nextX, nextY);
  //     }
  //   }
  // }

  // // 遍历
  // for (let x = 0; x < m; x++) {
  //   for (let y = 0; y < n; y++) {
  //     // 没被访问过并且是陆地的情况我们才去找
  //     if (!visited[x][y] && grid[x][y] === 1) {
  //       // 记录访问过
  //       visited[x][y] = true;
  //       sumArea = 1;
  //       bfs(x, y, 1);
  //       maxArea = Math.max(maxArea, sumArea);
  //     }
  //   }
  // }

  // console.log(maxArea);

  // return maxArea;

  /**
   * BFS的求解
   */
  // 获取行和列
  const m = grid.length;
  const n = grid[0].length;
  // 记录访问过的节点
  const visited = new Array(m).fill().map(_ => new Array(n).fill(false));
  // 四个方向 [x,y]
  const directions = [[0,-1], [1,0], [0,1], [-1,0]];
  // 记录最大值
  let maxArea = 0;
  // 以当前节点出发能得到的面积
  let sumArea = 1;


  const bfs = (x, y) => {
    const queue = [];
    queue.push([x,y]);
    while (queue.length) {
      // 取出节点 要从头开始取出
      const [x,y] = queue.shift();
      for (const [dx, dy] of directions) {
        const nextX = x + dx;
        const nextY = y + dy;
        // 越界处理
        if (nextX < 0 || nextX >= m || nextY < 0 || nextY >= n) continue;
        // 访问过的节点与非陆地，不能加入队列
        if (visited[nextX][nextY] || grid[nextX][nextY] === 0) continue;
        // 其他都是符合要求的节点
        visited[nextX][nextY] = true;
        sumArea += 1;
        queue.push([nextX, nextY]);
      }
    }
  }
  

  // 遍历grid，给每次循环找起点
  for (let x = 0; x < m; x++) {
    for (let y = 0; y < n; y++) {
      // 只有没访问过，并且是陆地的情况才可以当做起点
      if (!visited[x][y] && grid[x][y] === 1) {
        visited[x][y] = true;
        sumArea = 1;
        bfs(x, y);
        maxArea = Math.max(maxArea, sumArea);
      }
    }
  }

  // console.log(maxArea);

  return maxArea;
};
// @lc code=end

const grid = [
  [0,0,1,0,0,0,0,1,0,0,0,0,0],
  [0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,1,1,0,1,0,0,0,0,0,0,0,0],
  [0,1,0,0,1,1,0,0,1,0,1,0,0],
  [0,1,0,0,1,1,0,0,1,1,1,0,0],
  [0,0,0,0,0,0,0,0,0,0,1,0,0],
  [0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,0,0,0,0,0,0,1,1,0,0,0,0]
]

// const grid = [
//   [0,0,0,0,0,0,0,0]
// ]

// const grid = [[1]]


// const grid = [
//   [0,1,1],
//   [1,1,0]
// ]

maxAreaOfIsland(grid)


