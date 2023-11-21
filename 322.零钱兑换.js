/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  /**
   * 乍一看，用回溯试一下
   * 很不幸的，递归回溯的方式超时了
   */
  // let least = Infinity;

  // const backtracing = (total, count) => {

  //   if (total > amount) {
  //     return;
  //   }
  //   // 递归结束
  //   if (total === amount) {
  //     least = Math.min(least, count);
  //     return;
  //   }

  //   // 遍历硬币
  //   for (let i = 0; i < coins.length; i++) {
  //     if (total + coins[i] > amount) {
  //       continue;
  //     }
  //     total += coins[i];
  //     count += 1;
  //     backtracing(total, count);
  //     total -= coins[i];
  //     count -= 1;
  //   }
  // }

  // backtracing(0, 0);

  // return least === Infinity ? -1 : least;

  /**
   * 尝试使用动态规划的方式去求解
   * 一维数组的方式
   * dp[j]表示装满容积为j的背包，使用最少的物品数量，物品可以无限使用
   * 
   * 推导？
   * dp[j] = min(dp[j], dp[j-w[i]]+1);
   * 
   * 初始化需要根据状态推算出来，一会儿回头来看
   */

  // const len = coins.length;
  // // 构造dp数组
  // // 因为取最小，所以填充的时候需要填充为Infinity
  // const dp = new Array(amount+1).fill(Infinity);

  // // 从状态推导，我们可以看出需要用到dp[0],而dp[0]表示背包容积是0，那么装满它的初始值就是0
  // dp[0] = 0;

  // for (let i = 0; i < len; i++) { // 遍历硬币
  //   for (let j = 0; j <= amount; j++) { // 与01背包不同的是，这次从头开始遍历，因为可以反复用
  //     if (j >= coins[i]) {
  //       dp[j] = Math.min(dp[j], dp[j-coins[i]]+1);
  //     }
  //   }
  // }

  // console.log(dp)

  // return dp[amount] === Infinity ? -1 : dp[amount];


  /**
   * 二维数组的方式
   * dp[i][j]表示从前i个元素中取物品，要装满容积是j的背包的最少物品数
   * 
   * 状态推导?
   * dp[i][j] = min(dp[i-1][j], dp[i][j-w[i]]+1);
   * 
   * 初始化?
   * dp[0][j]
   * dp[i][0]
   */

  const len = coins.length;

  // 构造dp数组
  const dp = new Array(len).fill(Infinity).map(_ => new Array(amount+1).fill(Infinity));

  // 初始化
  // dp[i][0] = 0
  for (let i = 0; i < len; i++) {
    dp[i][0] = 0;
  }

  // dp[0][i]
  for (let i = 0; i <= amount; i++) {
    if (i % coins[0] === 0) {
      dp[0][i] = i/coins[0];
    }
  }

  // 遍历
  for (let i = 1; i < len; i++) {
    for (let j = 1; j <= amount; j++) {
      if (j < coins[i]) {
        dp[i][j] = dp[i-1][j];
      } else {
        dp[i][j] = Math.min(dp[i-1][j], dp[i][j-coins[i]]+1);
      }
    }
  }

  return dp[len-1][amount] === Infinity ? -1 : dp[len-1][amount];
};
// @lc code=end

