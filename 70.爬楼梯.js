/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  // 由前边的推理出来
  // 1级阶梯 只有一种方式
  // 2级阶梯 两种方式 1 1 || 2
  // 3级阶梯 转化成1与2
  const dp = new Array(n);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i-1] + dp[i-2];
  }
  return dp[n];
};

// 4级阶梯？
// 1 1 1 1
// 1 1 2
// 1 2 1
// 2 1 1
// 2 2
// @lc code=end

