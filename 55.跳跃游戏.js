/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  // 最大覆盖范围下标
  maxCoverIndex = 0;
  for (let i = 0; i <= maxCoverIndex; i++) {
    maxCoverIndex = Math.max(maxCoverIndex, nums[i] + i);
    if (maxCoverIndex >= nums.length - 1) return true;
  }
  return false;
};
// @lc code=end

