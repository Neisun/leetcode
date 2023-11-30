/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 *
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/description/
 *
 * algorithms
 * Easy (57.74%)
 * Likes:    3297
 * Dislikes: 0
 * Total Accepted:    1.3M
 * Total Submissions: 2.2M
 * Testcase Example:  '[7,1,5,3,6,4]'
 *
 * 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
 * 
 * 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
 * 
 * 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：[7,1,5,3,6,4]
 * 输出：5
 * 解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
 * ⁠    注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：prices = [7,6,4,3,1]
 * 输出：0
 * 解释：在这种情况下, 没有交易完成, 所以最大利润为 0。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 0 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  /**
   * 暴力解，超时了
   */
  // let max = -Infinity;
  // const len = prices.length;
  // for (let start = 0; start < len-1; start++) {
  //   for (let end = start+1; end < len; end++) {
  //     const profit = prices[end] - prices[start];
  //     max = Math.max(max, profit);
  //   }
  // }

  // return max > 0 ? max : 0;

  /**
   * 动态规划方式
   */
  // const len = prices.length;
  // const dp = [];
  // for (let i = 0; i < len; i++) {
  //   dp[i] = [];
  //   dp[i][0] = 0;
  //   dp[i][1] = 0;
  // }

  // dp[0][0] = 0;
  // dp[0][1] = -prices[0];

  // for (let i = 1; i < len; i++) {
  //   dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1]+prices[i]);
  //   dp[i][1] = Math.max(dp[i-1][1], -prices[i]);
  // }

  // // console.log(dp)

  // return dp[len-1][0] < 0 ? 0 : dp[len-1][0];

  /**
   * 一次遍历方式
   * 由于遍历从前向后顺序，可以在遍历的时候就找出最小值
   * 对于下一次遍历，利润就是 prices[i] - min
   * 拿利润与max对比，如果大于max，就更新max
   */
  let min = Infinity;
  let max = -Infinity;
  const len = prices.length;

  for (let i = 0; i < len; i++) {
    // 求出最小值
    if (prices[i] < min) {
      min = prices[i];
    } else if (prices[i] - min > max) {
      max = prices[i] - min;
    }
  }
  return max === -Infinity ? 0 : max;
};
// @lc code=end

