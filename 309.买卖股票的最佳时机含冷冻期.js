/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 买卖股票的最佳时机含冷冻期
 *
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-cooldown/description/
 *
 * algorithms
 * Medium (64.71%)
 * Likes:    1674
 * Dislikes: 0
 * Total Accepted:    297K
 * Total Submissions: 459.1K
 * Testcase Example:  '[1,2,3,0,2]'
 *
 * 给定一个整数数组prices，其中第  prices[i] 表示第 i 天的股票价格 。​
 * 
 * 设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:
 * 
 * 
 * 卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
 * 
 * 
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: prices = [1,2,3,0,2]
 * 输出: 3 
 * 解释: 对应的交易状态为: [买入, 卖出, 冷冻期, 买入, 卖出]
 * 
 * 示例 2:
 * 
 * 
 * 输入: prices = [1]
 * 输出: 0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= prices.length <= 5000
 * 0 <= prices[i] <= 1000
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
   * 状态把我搞蒙了
   * 总共有几种状态，又该怎么区分比较好呢
   * 持有股票
   * 不持有股票
   *  前两天或者更早卖了，一直保持这个状态
   *  今天刚卖
   * 处于冷冻期，只有一天的冷冻期
   * 我们分别使用
   * 0
   * 1
   * 2
   * 3
   * 这四个状态表示
   * 
   * 如何做状态推导呢？
   * dp[i][0]
   * 前一天就持有 dp[i-1][0]
   * 手里没票 今天买入 dp[i-1][1]-prices[i]
   * 前一天是冷冻期 今天可以买入 dp[i-1][3]-prices[i]
   * 
   * dp[i][1]
   * 前一天就是这个状态 d[i-1][1]
   * 前一天是冷冻期 今天不操作 dp[i-1][3]
   * 
   * dp[i][2]
   * 只能是昨天有票 今天刚卖 dp[i-1][0]+prices[i]
   * 
   * dp[i][3]
   * 昨天刚卖今天才会处于冷冻期 dp[i-1][2]
   */
  
  const len = prices.length;

  // 构造dp数组
  const dp = new Array(len).fill(0).map(_ => new Array(4).fill(0));

  // 初始化,初始化需要根据遍历的顺序去进行初始化

  dp[0][0] = -prices[0];
  // dp[0][1] 不持有股票，前几天卖了，没什么初始化的意义 暂定为0
  // dp[0][2] 不持有股票，今天卖了，等同于 0
  // dp[0][3] 同上 等同于0

  // 遍历
  for (let i = 1; i < len; i++) {
    // 0 持有股票
    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1]-prices[i], dp[i-1][3]-prices[i])
    // 1 不持有股票，前两天或者更早之前卖了，一直没操作
    dp[i][1] = Math.max(dp[i-1][1], dp[i-1][3])
    // 2 不持有股票，今天卖了
    dp[i][2] = dp[i-1][0]+prices[i];
    // 3 不持有股票，今天是冷冻期，只有一天的冷冻期
    dp[i][3] = dp[i-1][2];
  }

  // console.log(dp);

  return Math.max(dp[len-1][1], dp[len-1][2], dp[len-1][3]);
  
};
// @lc code=end
const prices = [1,2,3,0,2];

maxProfit(prices);
