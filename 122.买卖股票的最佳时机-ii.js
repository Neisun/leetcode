/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//   // dp定义
//   // dp[i][0] 表示第i天手里没有股票的最大利润
//   // dp[i][1] 表示第i天手里有股票时候的最大利润

//   // 状态转移
//   // dp[i][0] = ?
//   // 从前一个推导出来 即从 dp[i - 1][0] dp[i - 1][1]
//   // 如果是dp[i - 1][0]，表示之前手里没股票的最大利润，到了第i天，也没买，维持现状即 dp[i - 1][0]
//   // 如果是dp[i - 1][1] ，表示手里有一个股票的最大利润，到了第i天，得卖掉，dp[i - 1][1] + prices[i]
//   // dp[i][1] = ?
//   // dp[i-1][1] 之前手里有股票时候的最大利润，不交易 维持现状
//   // dp[i-1][0] 之前手里没有股票的最大利润，交易，dp[i-1][0] - prices[i]
//   const len = prices.length;
//   const dp = new Array(len);
//   for (let i = 0; i < len; i++) {
//     dp[i] = new Array(2);
//   }

//   // 初始值
//   dp[0][0] = 0; // 不交易，利润是0
//   dp[0][1] = -prices[0]; // 交易了，利润是第一个票取反

//   for (let i = 1; i < len; i++) {
//     dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1]+prices[i]);
//     dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0]-prices[i]);
//   }

//   return dp[len-1][0];
// };

// 杀鸡焉用宰牛刀，使用动态规划的方式求解对于这个题来说，是浪费了
// 那么使用贪心算法该如何求解
// 只关心局部最优，然后就能找出全局的最优，这是贪心算法的核心
// var maxProfit = function(prices) {
//   let result = 0;
//   for (let i = 0; i < prices.length; i++) {
//     // 为什么只关注后-前的差值就可以了呢
//     /**
//      * 因为只要后一天比前一天大就可以卖了
//      * 对于 [1,2,3,4] 来说，应该在第一天买，在最后一天卖 prices[3] - prices[0]
//      * 如果我们只要后一天比前一天高就卖了，可以这么写 prices[1] - prices[0] + prices[2] - prices[1] + prices[3] - prices[2] = prices[3] - prices[0]
//      * 二者的差值无非 负数 0 正数，因为我们求最大，所以只考虑正数的叠加，所以推理出如下的贪心求解步骤
//      */
//     const dif = prices[i] - prices[i - 1];
//     if (dif > 0) result += dif;
//   }
//   return result;
// };

// 贪心回顾
var maxProfit = function(prices) {
  // 对于数组 [1,2,3,4] 1天买，4天卖，prices[3] - prices[0]
  // 等同于 prices[1]-prices[0] + prices[2]-prices[1] + prices[3]-prices[2]
  // 只要后一天比前一天大，就可以卖，叠加起来就是结果
  let result = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    let diff = prices[i+1] - prices[i];
    if (diff > 0) result += diff;
  }
  return result;
};
// @lc code=end

