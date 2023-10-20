/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// 第一种方式，我们使用最笨的方式
// 不出意外的，最笨的方式超时了 时间复杂度太高了大概在O(N^3)
// var maxSubArray = function(nums) {
//   const len = nums.length;
//   let max = -Infinity;
//   // i j 分别标识数组的起止位置
//   for (let i = 0; i < len; i++) {
//     for (let j = i; j < len; j++) {
//       max = Math.max(sumFn(i, j), max);
//     }
//   }

//   function sumFn(start, end) {
//     let sum = 0;
//     for (let i = start; i <= end; i++) {
//       sum += nums[i];
//     }
//     return sum;
//   }

//   return max;
// };

// 我们改变一下策略
// 如果说要找子数组，要求和最大
// 如果之前的子数组和 有三种情况 大于0 小于0 等于0
// 无论是哪种情况 想把下个数加入到子数组中 都需要判断下个数是不是负数，如果是负数，那么不加了，因为越加越小
// 贪心的代码没想好怎么写，先放着吧
// [-100, -1, 3,]
var maxSubArray = function(nums) {
  const len = nums.length;
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += nums[i];
    if (sum > max) max = sum;
    if (sum <= 0) sum = 0;
  }
  return max;
};

// 我们看一下动态规划的方式
// var maxSubArray = function(nums) {
//   // 貌似不用考虑结束的位置，因为求得是值 所以dp数组就是1维的，不然就需要记录一下结束的位置dp[i][j]表示从i到j子数组的最大值
//   // dp[i]表示i之前子数组的最大值（包括i）
//   const len = nums.length;
//   const dp = new Array(len).fill(0);
//   // 初始值
//   dp[0] = nums[0];
//   let max = dp[0];
//   for (let i = 1; i < len; i++) {
//     dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
//     if (dp[i] > max) max = dp[i];
//   }
//   return max;
// };
// @lc code=end

