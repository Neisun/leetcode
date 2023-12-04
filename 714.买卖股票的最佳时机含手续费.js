/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] 买卖股票的最佳时机含手续费
 *
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/description/
 *
 * algorithms
 * Medium (76.08%)
 * Likes:    1023
 * Dislikes: 0
 * Total Accepted:    252.7K
 * Total Submissions: 332K
 * Testcase Example:  '[1,3,2,8,4,9]\n2'
 *
 * 给定一个整数数组 prices，其中 prices[i]表示第 i 天的股票价格 ；整数 fee 代表了交易股票的手续费用。
 * 
 * 你可以无限次地完成交易，但是你每笔交易都需要付手续费。如果你已经购买了一个股票，在卖出它之前你就不能再继续购买股票了。
 * 
 * 返回获得利润的最大值。
 * 
 * 注意：这里的一笔交易指买入持有并卖出股票的整个过程，每笔交易你只需要为支付一次手续费。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：prices = [1, 3, 2, 8, 4, 9], fee = 2
 * 输出：8
 * 解释：能够达到的最大利润:  
 * 在此处买入 prices[0] = 1
 * 在此处卖出 prices[3] = 8
 * 在此处买入 prices[4] = 4
 * 在此处卖出 prices[5] = 9
 * 总利润: ((8 - 1) - 2) + ((9 - 4) - 2) = 8
 * 
 * 示例 2：
 * 
 * 
 * 输入：prices = [1,3,7,5,10,3], fee = 3
 * 输出：6
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= prices.length <= 5 * 10^4
 * 1 <= prices[i] < 5 * 10^4
 * 0 <= fee < 5 * 10^4
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
  /**
   * 这道题看上去没有冷冻期那个那么多的状态
   * 
   * 需要注意，只有卖的时候才需要手续费，买入的时候不需要
   * 只有两种状态
   * 0 持有股票
   * 1 不持有股票
   * 
   * 状态转移
   * 对于dp[i][0]
   * 之前就持有 dp[i-1][0]
   * 之前不持有 然后买入 dp[i-1][1]-prices[i]
   * 
   * dp[i][1]
   * 之前就不持有 dp[i-1][1]
   * 之前持有 然后卖出 dp[i-1][0]+prices[i]-fee
   */

  const len = prices.length;
  
  // 构造dp数组
  const dp = new Array(len).fill(0).map(_ => new Array(2).fill(0));

  // 初始化
  dp[0][0] = -prices[0];
  dp[0][1] = Math.max(0, -fee);

  // 遍历
  for (let i = 1; i < len; i++) {
    // 持有股票
    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1]-prices[i]);
    // 不持有股票
    dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0]+prices[i]-fee);
  }

  // console.log(dp);

  return dp[len-1][1] > 0 ? dp[len-1][1] : 0;
};
// @lc code=end

const prices = [1, 3, 2, 8, 4, 9], fee = 2;

maxProfit(prices, fee);

