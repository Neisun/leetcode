/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  /**
   * dp[j]表示在前j个房间里偷取的最大金额
   * 
   * 递推公式？
   * dp[j] = dp[j-w[i]] + w[i];
   * 上述递推公式，就已经错了
   * 只有两种情况
   * 对于下表为j的这一家，我是打劫还是不打劫
   * 打劫：那么就需要从j-2那一家推算出结果并且+nums[j]这一家
   * 不打劫：需要从j-1那一家推算
   * 比较哪两个更大
   * dp[j] = max(dp[j-2]+nums[j], dp[j-1])
   */

  const len = nums.length;
  const dp = new Array(len).fill(0);

  // 初始化
  dp[0] = nums[0]; // 当下标为0只能取nums[0]
  dp[1] = Math.max(nums[0], nums[1]); // 当下标为1，取二者0和1二者最大的值

  for (let i = 2; i < len; i++) {
    // 从递推公式里来看，我们需要的i需要从2开始，即初始化0 1
    dp[i] = Math.max(dp[i-2]+nums[i], dp[i-1])
  }

  return dp[len-1];
};
// @lc code=end

