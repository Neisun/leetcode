/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 *
 * https://leetcode.cn/problems/two-sum/description/
 *
 * algorithms
 * Easy (53.05%)
 * Likes:    18264
 * Dislikes: 0
 * Total Accepted:    5.1M
 * Total Submissions: 9.7M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * 
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 * 
 * 你可以按任意顺序返回答案。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [2,7,11,15], target = 9
 * 输出：[0,1]
 * 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [3,2,4], target = 6
 * 输出：[1,2]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [3,3], target = 6
 * 输出：[0,1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 2 <= nums.length <= 10^4
 * -10^9 <= nums[i] <= 10^9
 * -10^9 <= target <= 10^9
 * 只会存在一个有效答案
 * 
 * 
 * 
 * 
 * 进阶：你可以想出一个时间复杂度小于 O(n^2) 的算法吗？
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  /**
   * 所有人梦开始的地方
   * 两数之和 
   * 这道题其实是简化了，因为只有一个答案
   * 第一种方式，暴力搜索
   */
  // for (let i = 0; i < nums.length - 1; i++) {
  //   for (let j = i+1; j < nums.length; j++) {
  //     if (nums[i] + nums[j] === target) {
  //       return [i, j];
  //     }
  //   }
  // }

  // return [-1,-1];
  

  /**
   * 原先想用双指针的方式，但是发现是我想多了，不能这么整
   * 于是改用hash的方式
   */
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i];
    } else {
      map.set(target-nums[i], i);
    }
  }
};
// @lc code=end

