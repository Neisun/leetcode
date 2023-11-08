/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
// var minCostClimbingStairs = function(cost) {
//   const len = cost.length;
//   // dp[i]表示到达i层花费最小的体力
//   // 由于每次只能爬1层或者2层，那么 状态转移方程 dp[i] = cost[i] + min(dp[i-1], dp[i-2])
//   // 初始化很简单，由于只能从下标为0和1开始，所以dp[0] = cost[0] dp[1] = cost[1]

//   // 构建dp数组
//   const dp = new Array(len);
//   // 初始化
//   dp[0] = cost[0];
//   dp[1] = cost[1];

//   // 从下标为2即第三个开始
//   for (let i = 2; i < len; i++) {
//     dp[i] = cost[i] + Math.min(dp[i-1], dp[i-2]);
//   }
  
//   return Math.min(dp[len-1], dp[len-2]);
// };

var minCostClimbingStairs = function(cost) {
  // 题意要求，可以从0或者1下标处出发，那么就意味0和1的位置不花费体力
  const len = cost.length;
  // dp[i]表示到到达i阶梯花费的体力，因为从0开始所以需要的数组长度是n+1
  // dp[i]的推导是从i-1和i-2推导出来
  const dp = new Array(len+1);
  // 初始化
  dp[0] = 0;
  dp[1] = 0;
  for (let i = 2; i <= len; i++) {
    dp[i] = Math.min(dp[i-1]+cost[i-1], dp[i-2]+cost[i-2]);
  }
  // console.table(dp);
  console.log(dp);
  return dp[len];
};
// @lc code=end

// 测试
const cost = [1,100,1,1,1,100,1,1,100,1]
minCostClimbingStairs(cost)

