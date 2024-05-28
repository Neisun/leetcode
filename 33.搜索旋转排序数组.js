/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 *
 * https://leetcode.cn/problems/search-in-rotated-sorted-array/description/
 *
 * algorithms
 * Medium (43.98%)
 * Likes:    2938
 * Dislikes: 0
 * Total Accepted:    890.8K
 * Total Submissions: 2M
 * Testcase Example:  '[4,5,6,7,0,1,2]\n0'
 *
 * 整数数组 nums 按升序排列，数组中的值 互不相同 。
 * 
 * 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k],
 * nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始
 * 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。
 * 
 * 给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。
 * 
 * 你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [4,5,6,7,0,1,2], target = 0
 * 输出：4
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [4,5,6,7,0,1,2], target = 3
 * 输出：-1
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [1], target = 0
 * 输出：-1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 5000
 * -10^4 <= nums[i] <= 10^4
 * nums 中的每个值都 独一无二
 * 题目数据保证 nums 在预先未知的某个下标上进行了旋转
 * -10^4 <= target <= 10^4
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  /**
   * 思路1
   * 找出反转的位置
   * 根据反转的位置，拆分成两部分，然后分别使用二分
   */
  let reverseIdx = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i-1]) {
      reverseIdx = i;
      break;
    }
  }

  let l1 = 0;
  let r1 = reverseIdx - 1;
  while (l1 <= r1) {
    let mid = Math.floor((l1+r1)/2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      l1 = mid + 1;
    } else {
      r1 = mid - 1;
    }
  }

  let l2 = reverseIdx;
  let r2 = nums.length - 1;
  while (l2 <= r2) {
    let mid = Math.floor((l2+r2)/2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      l2 = mid + 1;
    } else {
      r2 = mid - 1;
    }
  }
  
  return -1;
};
// @lc code=end

