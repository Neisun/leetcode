/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  /**
   * 这需要一些推导过程，我们推导一下看看
   * n = 1 只能是 1 dp[1] = 1
   * n = 2 2 = 1 + 1 => dp[2] = dp[1] + dp[1] = 2
   * n = 3 3 = 1 + 1 + 1 => dp[3] = dp[1] + dp[1] + dp[1] = 3
   * n = 4 4 = 1 + 1 + 1 + 1 其他都不能开方 dp[4] = 4
   * n = 5 5 = 1 + 4 or 1+..1 ? dp[5] = 2
   * n = 6 6 = 1 + 4 + 1 dp[6] = 3
   * n = 7 7 = 1 + 1 + 1 + 4 dp[7] = 4
   * 
   * 好像没得出什么规律。。。，倒是看出一些贪心的门道
   * 
   * 转成背包的模型
   */
  const dp = new Array(n+1).fill(Infinity);
  // 初始化
  dp[0] = 0;
  // dp[1] = 1;
  // 遍历就好
  // dp[1] = 1
  // dp[2] = 2
  // dp[3] = 3
  for (let i = 1; i <= n; i++) {
    for (let j = i*i; j <= n; j++) {
      dp[j] = Math.min(dp[j], dp[j - i*i]+1);
    }
  }
  // console.log(dp);
  return dp[n];
};
// @lc code=end
numSquares(12);

