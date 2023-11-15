/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  if (nums.length <= 1) return false;
  // 求和
  const sum = nums.reduce((pre, cur) => pre + cur);
  // 和的一半
  const halfSum = sum / 2;
  // 如果是小数，不符合要求
  if (!Number.isInteger(halfSum)) return false;

  /**
   * 其他的情况就按照01背包问题求
   * 背包的容量就是halfSum
   * dp[i][j] 表示从0~i的下标中取出数字的和恰好等于j
   * 
   * 状态转移
   * 不用 dp[i][j] = dp[i-1][j]
   * 用 dp[i][j] = dp[i-1][j-nums[i]] + nums[i]
   * 
   * 初始化?
   * dp[0][j] 如果 j < nums[0] dp[0][j] = 0; 否则 dp[0][j] = nums[0]
   * dp[i][0] = 0 // 这个情况在构造dp数组就已完成
   */

  const len = nums.length;
  const dp = [];
  // 构造dp数组
  for (let i = 0; i < len; i++) {
    dp[i] = [];
    for (let j = 0; j <= halfSum; j++) {
      dp[i][j] = 0;
    }
  }

  // 初始化
  for (let j = nums[0]; j <= halfSum; j++) {
    dp[0][j] = nums[0];
  }

  // 状态转移
  for (let i = 1; i < len; i++) {
    for (let j = 1; j <= halfSum; j++) {
      if (j < nums[i]) {
        dp[i][j] = dp[i-1][j]
      } else {
        dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-nums[i]] + nums[i]);
      }
      if (dp[i][j] === halfSum) return true;
    }
  }

  // return dp[len-1][halfSum] === halfSum;
  return false;
  
};
// @lc code=end

