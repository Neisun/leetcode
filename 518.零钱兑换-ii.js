/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  /**
   * 这个与零钱兑换1很像，只不过这次需要你求出组合数，因为每个硬币面值不同，所以不用考虑重复的问题
   * 并且每个硬币可以多次使用
   * 
   * 模型转化为背包问题
   * 这是一个完全背包问题，amout就是背包的容积
   * 
   * 先使用一维数组，写法上比较简便
   * 
   * dp[j]表示容积为j的背包的组合数
   * 
   * 状态推导
   * dp[j] += max(dp[j], dp[j-w[i]]);
   * 状态推导存在错误应该是
   * dp[j] += dp[j-w[i]];
   * 
   * 初始化?
   * 暂时先放这，我们要根据遍历时候的状态推导出来
   */
  // const len = coins.length;
  // // 构造dp数组
  // const dp = new Array(amount+1).fill(0);
  
  // // 由于是叠加，所以初始状态得设置为1，不然一直都是0在做叠加
  // dp[0] = 1;

  // // 遍历
  // for (const coin of coins) {
  //   // for (let j = amount; j >= coin; j--) {
  //   //   dp[j] += Math.max(dp[j], dp[j-coin]);
  //   // }
  //   for (let j = coin; j <= amount; j++) {
  //     // dp[j] += Math.max(dp[j], dp[j-coin]);
  //     dp[j] += dp[j-coin];
  //   }
  // }

  // console.log(dp);

  // return dp[amount];

  /**
   * 使用二维数组
   * dp[i][j]表示从前i个物品取，装满容积为j的背包的组合数
   * 
   * 状态推导
   * dp[i][j] += dp[i-1][j-w[i]];
   */

  const len = coins.length;
  // 构造dp数组
  const dp = new Array(len).fill(0).map(_ => new Array(amount+1).fill(0));

  // dp[0][i]
  // dp[i][0] = 0 已经初始化了
  for (let i = 0; i <= amount; i++) {
    if (i % coins[0] === 0) {
      dp[0][i] = 1;
    }
  }

  // 遍历
  for (let i = 1; i < len; i++) { // 遍历物品
    for (let j = 0; j <= amount; j++) { // 遍历背包容积
      for (let k = 0; k * coins[i] <= j; k++) {
        dp[i][j] += dp[i-1][j-k*coins[i]];
      }
    }
  }

  console.log(dp)

  return dp[len-1][amount];
};
// @lc code=end
const amount = 5, coins = [1, 2, 5]
change(amount, coins);

