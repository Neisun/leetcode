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

  // 与不同路径如出一辙的方式
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  // 需要考虑起点与终点是障碍物的情况
  if (obstacleGrid[0][0] === 1 || obstacleGrid[m-1][n-1] === 1) return 0;

  // 构建dp数组
  const dp = [];
  for (let i = 0; i < m; i++) {
    dp[i] = [];
    for (let j = 0; j < n; j++) {
      dp[i][j] = 0;
    }
  }

  // 初始化
  // 初始化有问题，如果第一行与第一列有石头，那就石头后边就过不去了
  for (let i = 0; i < m; i++) {
    if (obstacleGrid[i][0] === 1) break;
    dp[i][0] = 1;
  }

  for (let j = 0; j < n; j++) {
    if (obstacleGrid[0][j] === 1) break;
    dp[0][j] = 1;
  }

  // 状态转移
  for (let x = 1; x < m; x++) {
    for (let y = 1; y < n; y++) {
      if (obstacleGrid[x][y] !== 1) {
        dp[x][y] = dp[x-1][y] + dp[x][y-1];
      } else {
        dp[x][y] = 0;
      }
    }
  }

  console.log(dp);

  return dp[m-1][n-1];
};
// @lc code=end
// const obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]];
// const obstacleGrid = [[1,0]];
const obstacleGrid = [[0,0],[1,1],[0,0]];

const r = uniquePathsWithObstacles(obstacleGrid);
console.log(r);

