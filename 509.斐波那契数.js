/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 递归的方式
// var fib = function(n) {
//   if (n === 0) return 0;
//   if (n === 1) return 1;
//   return fib(n-1) + fib(n-2);
// };

// 动态规划的方式如何求解？
// 每一个dp[i] 都是由前两个推算出来
var fib = function(n) {
  const dp = new Array(n);
  // 状态转移 dp[i] = dp[i-1] + dp[i-2];
  // 初始化 dp[0] = 0; dp[1] = 1;
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i-1] + dp[i-2];
  }
  return dp[n];
};
// @lc code=end

