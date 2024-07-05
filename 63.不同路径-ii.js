/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {

  // // 与不同路径如出一辙的方式
  // const m = obstacleGrid.length;
  // const n = obstacleGrid[0].length;

  // // 需要考虑起点与终点是障碍物的情况
  // if (obstacleGrid[0][0] === 1 || obstacleGrid[m-1][n-1] === 1) return 0;

  // // 构建dp数组
  // const dp = [];
  // for (let i = 0; i < m; i++) {
  //   dp[i] = [];
  //   for (let j = 0; j < n; j++) {
  //     dp[i][j] = 0;
  //   }
  // }

  // // 初始化
  // // 初始化有问题，如果第一行与第一列有石头，那就石头后边就过不去了
  // for (let i = 0; i < m; i++) {
  //   if (obstacleGrid[i][0] === 1) break;
  //   dp[i][0] = 1;
  // }

  // for (let j = 0; j < n; j++) {
  //   if (obstacleGrid[0][j] === 1) break;
  //   dp[0][j] = 1;
  // }

  // // 状态转移
  // for (let x = 1; x < m; x++) {
  //   for (let y = 1; y < n; y++) {
  //     if (obstacleGrid[x][y] !== 1) {
  //       dp[x][y] = dp[x-1][y] + dp[x][y-1];
  //     } else {
  //       dp[x][y] = 0;
  //     }
  //   }
  // }

  // console.log(dp);

  // return dp[m-1][n-1];

  
  




















  /**
   * 2024-07-03
   * 先考虑使用dfs的方式求解
   * 超时
   */
  // // 获取行与列
  // const rows = obstacleGrid.length;
  // const cols = obstacleGrid[0].length;
  // const result = [];
  // const directions = [[0, 1], [1, 0]];
  // const visited = new Array(rows).fill().map(_ => new Array(cols).fill(false));

  // // 如果一开始就是石头
  // if (obstacleGrid[0][0] === 1) return 0;

  // const dfs = (x, y, path) => {
  //   // 走到右下角，递归终止，求解
  //   if (x === rows - 1 && y === cols - 1) {
  //     result.push(path);
  //     return;
  //   }

  //   for (const [_x, _y] of directions) {
  //     const nextX = x + _x;
  //     const nextY = y + _y;
  //     // 越界处理
  //     if (nextX < 0 || nextX >= rows || nextY < 0 || nextY >= cols) continue;
  //     // 障碍物判断
  //     if (obstacleGrid[nextX][nextY] === 1) continue;
  //     // 访问过
  //     if (visited[nextX][nextY]) continue;
  //     visited[nextX][nextY] = true;
  //     // 剩下的才继续往下走
  //     dfs(nextX, nextY, path + `${nextX, nextY}`);
  //     visited[nextX][nextY] = false;
  //   }
  // }

  // dfs(0, 0, '');

  // return result.length;

  /**
   * 使用dfs超时，那么就需要考虑到动态规划了
   * dp[i][j] 表示从左上角到矩阵坐标为(i,j)点的路径和
   * 状态推导 
   * dp[i][j]的状态只能由dp[i-1][j]和dp[i][j-1]推导出来
   */
  const rows = obstacleGrid.length;
  const cols = obstacleGrid[0].length;

  // 起点 或者 终点是石头，那么必然过不去
  if (obstacleGrid[0][0] === 1 || obstacleGrid[rows-1][cols-1] === 1) return 0;
  
  const dp = new Array(rows).fill().map(_ => new Array(cols).fill(0));

  // dp[0][j]
  for (let j = 0; j < cols; j++) {
    // 遇到石头就结束了，这条路不通
    if (obstacleGrid[0][j] === 1) break;
    dp[0][j] = 1;
  }
  // dp[i][0]
  for (let i = 0; i < rows; i++) {
    // 遇到石头就结束了，这条路不通
    if (obstacleGrid[i][0] === 1) break;
    dp[i][0] = 1;
  }



  // 状态推导
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      // 遇到石头就结束
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0;
      } else {
        dp[i][j] = dp[i-1][j] + dp[i][j-1];
      }
    }
  }

  return dp[rows-1][cols-1];
  
};
// @lc code=end
// const obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]];
// const obstacleGrid = [[0,1],[0,0]]
// const obstacleGrid = [[1,0]];
// const obstacleGrid = [[0,0],[1,1],[0,0]];
const obstacleGrid = [[0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1],[0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0],[0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0],[1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0],[0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0],[0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1],[0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1],[1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0],[0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0],[0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0],[0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0],[0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1],[0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0],[1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0],[1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1],[1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0]];

const r = uniquePathsWithObstacles(obstacleGrid);
console.log(r);

