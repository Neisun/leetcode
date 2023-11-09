/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  // dp[i]表示拆分i的最大乘积
  // 那么状态转移该怎么写呢
  // 我们得写一下了
  // n = 2 dp[2] = 1 * 1 = 1
  // n = 3 dp[3] = 1 * 2 = 2;
  // n = 4 dp[4] = 2 * 2 = 4
  // n = 5 dp[5] = 2 * 3 = 6
  // 什么规律呢？对于 dp[i] = Math.max(j * (i-j), j * dp[i-j], dp[i]);
  // 由于dp[i]在不断地更新，所以对比的时候需要带上dp[i]
  const dp = new Array(n+1).fill(0);
  // 初始化
  // 更好的初始化，理论上应该从2开始
  // dp[1] = 1;
  dp[2] = 1;
  // 状态转移
  // 由于从2开始，所以我们从3开始
  for (let i = 3; i <= n; i++) {
    for (let j = 1; j < i - 1; j++) { // 同样的，那么j就不能<i，而是小于i-1，不然就会把dp[1]带入计算了
      dp[i] = Math.max(j * (i-j), j * dp[i-j], dp[i]);
    }
  }

  // console.log(dp);

  return dp[n];
};
// @lc code=end


integerBreak(10);