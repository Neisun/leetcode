/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 *
 * https://leetcode.cn/problems/contains-duplicate-ii/description/
 *
 * algorithms
 * Easy (45.07%)
 * Likes:    690
 * Dislikes: 0
 * Total Accepted:    280.5K
 * Total Submissions: 611.8K
 * Testcase Example:  '[1,2,3,1]\n3'
 *
 * 给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 i 和 j ，满足 nums[i] == nums[j] 且
 * abs(i - j) <= k 。如果存在，返回 true ；否则，返回 false 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,2,3,1], k = 3
 * 输出：true
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [1,0,1,1], k = 1
 * 输出：true
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [1,2,3,1,2,3], k = 2
 * 输出：false
 * 
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 * 0 <= k <= 10^5
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  /**
   * 利用hash存储一下数和下标
   * 对于 [1,2,3,1]
   * 我们有如下
   * {
   *  1: 0,
   *  2: 1,
   *  3: 2,
   *  1: 3 // 这时候我们发现1出现在map中，我们比较map[1]和当前下标，如果存在abs(i - j) <= k那么就直接返回true
   * }
   */
  const hash = {}
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (hash[num] !== undefined) {
      if (Math.abs(i - hash[num]) <= k) return true;
    }
    hash[num] = i;
  }

  return false;
};
// @lc code=end
// const nums = [1,2,3,1], k = 3
const nums = [1,2,3,1,2,3], k = 2
const r = containsNearbyDuplicate(nums, k);
console.log(r)

