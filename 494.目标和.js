/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
  /**
   * 分析思路
   * 分两堆
   * 一堆是+
   * 一堆是-
   * 两堆的差 = target 
   * a + b = sum
   * a - b = target
   * 那么 a 就是 (sum + target) / 2
   * 
   * 于是问题就转换成了背包问题，背包的容量就是(sum+target)/2
   * 
   * 我们使用一维数组的方式
   * dp[j]表示背包容量为j的最大组合数
   * 
   * 状态转移
   * dp[j] = max(dp[j], dp[j-nums[i]] + 1);
   * 
   * 初始化
   * dp[0] = 0
   */
  
  const len = nums.length;
  // 求和
  const sum = nums.reduce((pre, cur) => pre + cur);
  // 背包容积
  const bagSize = (sum + target) / 2;
  // 背包容积是小数没有结果
  if (bagSize % 1 !== 0) return 0;
  // target比sum大
  if (bagSize < 0) return 0;
  // 构造dp数组
  const dp = new Array(bagSize + 1).fill(0);

  // 初始化，已经在构造dp数组时候做了
  dp[0] = 1;

  // 遍历
  for (let i = 0; i < len; i++) {
    for (let j = bagSize; j >= nums[i]; j--) {
      dp[j] += dp[j-nums[i]];
    }
  }

  return dp[bagSize];
};
// @lc code=end

