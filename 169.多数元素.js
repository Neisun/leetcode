/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 *
 * https://leetcode.cn/problems/majority-element/description/
 *
 * algorithms
 * Easy (66.47%)
 * Likes:    2100
 * Dislikes: 0
 * Total Accepted:    841.9K
 * Total Submissions: 1.3M
 * Testcase Example:  '[3,2,3]'
 *
 * 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
 * 
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [3,2,3]
 * 输出：3
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [2,2,1,1,1,2,2]
 * 输出：2
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == nums.length
 * 1 <= n <= 5 * 10^4
 * -10^9 <= nums[i] <= 10^9
 * 
 * 
 * 
 * 
 * 进阶：尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  /**
   * 傻瓜做法
   */
  // const m = new Map();
  // const n = nums.length;
  // for (const num of nums) {
  //   if (!m.get(num)) {
  //     m.set(num, 1)
  //   } else {
  //     m.set(num, m.get(num)+1);
  //   }
  //   if (m.get(num) > n/2) return num;
  // }

  /**
   * 排个序，取中间数
   */
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
};
// @lc code=end
const nums = [2,2,1,1,1,2,2]
majorityElement(nums)

