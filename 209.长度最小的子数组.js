/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 *
 * https://leetcode.cn/problems/minimum-size-subarray-sum/description/
 *
 * algorithms
 * Medium (46.47%)
 * Likes:    2049
 * Dislikes: 0
 * Total Accepted:    690.7K
 * Total Submissions: 1.5M
 * Testcase Example:  '7\n[2,3,1,2,4,3]'
 *
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。
 * 
 * 找出该数组中满足其总和大于等于 target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr]
 * ，并返回其长度。如果不存在符合条件的子数组，返回 0 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：target = 7, nums = [2,3,1,2,4,3]
 * 输出：2
 * 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：target = 4, nums = [1,4,4]
 * 输出：1
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：target = 11, nums = [1,1,1,1,1,1,1,1]
 * 输出：0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= target <= 10^9
 * 1 <= nums.length <= 10^5
 * 1 <= nums[i] <= 10^5
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 
 * 如果你已经实现 O(n) 时间复杂度的解法, 请尝试设计一个 O(n log(n)) 时间复杂度的解法。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  /**
   * 本想先排个序再好好想想
   * 发现题设中要求，连续子数组
   * 所以不能排序
   * 所以什么思路解题？
   * 下边是暴力解法，果不其然，超时了
   */
  // const len = nums.length;
  // // 遍历起始位置
  // let sum = 0;
  // let count = 0;
  // let result = Infinity;
  // for (let start = 0; start < len; start++) {
  //   sum = 0;
  //   count = 0;
  //   for (let end = start; end < len; end++) {
  //     sum += nums[end];
  //     count++;
  //     if (sum >= target) {
  //       result = Math.min(result, count);
  //       break;
  //     }
  //   }
  // }
  // return result === Infinity ? 0 : result;

  /**
   * 滑动窗口？
   * 本质上也是双指针
   */
  const len = nums.length;
  let sum = 0;
  let start = 0;
  let result = Infinity;
  for (let end = 0; end < len; end++) {
    sum += nums[end];
    while (sum >= target) {
      result = Math.min(result, end - start + 1);
      sum -= nums[start];
      start++;
    }
  }
  return result === Infinity ? 0 : result;
};
// @lc code=end

// const target = 7, nums = [2,3,1,2,4,3];
// const target = 4, nums = [1,4,4];
const target = 11, nums = [1,1,1,1,1,1,1,1];
minSubArrayLen(target, nums);

