/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  // dp[x][y]表示当前x、y坐标位置的点的不同路径数量
  // 如何做状态推导？只能向右、向下走，那么就是从dp[x-1][y]和dp[x][y-1]中推导出来
  // 从图中找出来的规律来看 dp[x][y] = dp[x-1][y] + dp[x][y-1];
  // 如何初始化呢？两条边都是的路径都是1
  
  // 构建dp数组
  const dp = [];
  for (let i = 0; i < m; i++) {
    dp[i] = [];
    for (let j = 0; j < n; j++) {
      dp[i][j] = 0;
    }
  }

  // 初始化 
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }

  for (let i = 0; i < n; i++) {
    dp[0][i] = 1;
  }

  // 状态转移
  for (let x = 1; x < m; x++) {
    for (let y = 1; y < n; y++) {
      dp[x][y] = dp[x-1][y] + dp[x][y-1]
    }
  }

  console.log(dp);

  // 返回结果
  return dp[m-1][n-1];
};
// @lc code=end
const r = uniquePaths(7,3);
console.log(r)

