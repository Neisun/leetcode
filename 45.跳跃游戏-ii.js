/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  /**
   * 跟55题倒是很类似的，找最大覆盖范围，但是如何确定次数是一个难题
   * 需要两个变量
   * 1. 上一次最大覆盖范围
   * 2. 最大覆盖范围
   * 举例子说明
   * [2,3,1,1,4]
   * 从2开始，最多可以走两步，一开始走 上一次最大覆盖范围是0 我们记作 preMaxCover = 0
   * 最大覆盖范围是 nums[0] + 0 即 2 记作 maxCover = 2
   * 
   */
  // 一个特例 只有一个元素的时候
  if (nums.length === 1) return 0;
  const len = nums.length;
  let preMaxCover = 0;
  let maxCover = 0;
  let count = 0;
  for (let i = 0; i < len; i++) {
    maxCover = Math.max(maxCover, nums[i] + i);
    if (i === preMaxCover) {
      count++;
      preMaxCover = maxCover;
      if (maxCover >= len - 1) return count;
    }
  }
  return count;
};
// @lc code=end

