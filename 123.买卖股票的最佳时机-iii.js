/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 *
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iii/description/
 *
 * algorithms
 * Hard (59.90%)
 * Likes:    1635
 * Dislikes: 0
 * Total Accepted:    303.5K
 * Total Submissions: 506.3K
 * Testcase Example:  '[3,3,5,0,0,3,1,4]'
 *
 * 给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。
 * 
 * 设计一个算法来计算你所能获取的最大利润。你最多可以完成 两笔 交易。
 * 
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入：prices = [3,3,5,0,0,3,1,4]
 * 输出：6
 * 解释：在第 4 天（股票价格 = 0）的时候买入，在第 6 天（股票价格 = 3）的时候卖出，这笔交易所能获得利润 = 3-0 = 3 。
 * 随后，在第 7 天（股票价格 = 1）的时候买入，在第 8 天 （股票价格 = 4）的时候卖出，这笔交易所能获得利润 = 4-1 = 3 。
 * 
 * 示例 2：
 * 
 * 
 * 输入：prices = [1,2,3,4,5]
 * 输出：4
 * 解释：在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4
 * 。   
 * 注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。   
 * 因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：prices = [7,6,4,3,1] 
 * 输出：0 
 * 解释：在这个情况下, 没有交易完成, 所以最大利润为 0。
 * 
 * 示例 4：
 * 
 * 
 * 输入：prices = [1]
 * 输出：0
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
   * oh my god!!!
   * I saw the solution, I was amazing!
   * The dp actually has five states
   * Thanks a lot!!!
   * 
   * How many demensions?
   * There are five demensions to consider
   * 0 do nothing
   * 1 First time no stock
   * 2 First time there is one stock in your hand
   * 3 Second time no stock
   * 4 Second time there is one stock in your hand
   * 
   * State transition?
   * How could figure it out?
   * 0 do noting then the result comes from previous result
   * so dp[i][0] = dp[i-1][0]
   * 
   * 1 First time no stock in your hand
   * it means that previous day you get no stock dp[i-1][1]
   * or previous day you got one stock dp[i-1][2]+prices[i];
   * dp[i][1] = Math.max(dp[i-1][1], dp[i-1][2]+prices[i]);
   * 
   * 2 First time one stock in your hand
   * you can get the result from previous day dp[i-1][2]
   * or previous day you had no stock then you bought it dp[i-1][0]-prices[i]
   * dp[i][2] = Math.max(dp[i-1][2], dp[i-1][0]-prices[i]);
   * 
   * 3 Second time no stock in your hand
   * dp[i][3] = Math.max(dp[i-1][3],dp[i-1][4]+prices[i])
   * 
   * 4 Second time one stock in your hand
   * dp[i][4] = Math.max(dp[i-1][4], dp[i-1][1]-prices[i])
   * 
   * 
   * This problem is very hard, because you always make mistakes on doing state transition
   * so you need to calm down and analyse these situations
   * Come on!
   * We can do this!
   */

  const len = prices.length;
  const dp = [];
  
  // construct dp
  for (let i = 0; i < len; i++) {
    dp[i] = [];
    for (let j = 0; j < 5; j++) {
      dp[i][j] = 0;
    }
  }

  // init
  dp[0][2] = -prices[0];
  dp[0][4] = -prices[0];


  // traverse
  for (let i = 1; i < len; i++) {
    // state transition
    // do nothing
    dp[i][0] = dp[i-1][0];
    // first time no stock
    dp[i][1] = Math.max(dp[i-1][1], dp[i-1][2]+prices[i]);
    // first time one stock
    dp[i][2] = Math.max(dp[i-1][2], dp[i-1][0]-prices[i]);
    // second time no stock
    dp[i][3] = Math.max(dp[i-1][3], dp[i-1][4]+prices[i]);
    // second time one stock
    dp[i][4] = Math.max(dp[i-1][4], dp[i-1][1]-prices[i]);
  }

  // console.log(dp)

  // return result
  return dp[len-1][3];
};
// @lc code=end

const prices = [3,3,5,0,0,3,1,4];
maxProfit(prices);

