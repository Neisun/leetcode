/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 *
 * https://leetcode.cn/problems/single-number/description/
 *
 * algorithms
 * Easy (72.93%)
 * Likes:    3155
 * Dislikes: 0
 * Total Accepted:    1.1M
 * Total Submissions: 1.5M
 * Testcase Example:  '[2,2,1]'
 *
 * 给你一个 非空 整数数组 nums ，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * 
 * 你必须设计并实现线性时间复杂度的算法来解决此问题，且该算法只使用常量额外空间。
 * 
 * 
 * 
 * 
 * 
 * 示例 1 ：
 * 
 * 
 * 输入：nums = [2,2,1]
 * 输出：1
 * 
 * 
 * 示例 2 ：
 * 
 * 
 * 输入：nums = [4,1,2,1,2]
 * 输出：4
 * 
 * 
 * 示例 3 ：
 * 
 * 
 * 输入：nums = [1]
 * 输出：1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 3 * 10^4
 * -3 * 10^4 <= nums[i] <= 3 * 10^4
 * 除了某个元素只出现一次以外，其余每个元素均出现两次。
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  if (nums.length === 1) return nums[0];
  // 采用hash map 的方式求解不行么？？试一下
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  for (const [k, v] of map) {
    if (v === 1) return k;
  }
};
// @lc code=end

