/*
 * @lc app=leetcode.cn id=918 lang=javascript
 *
 * [918] 环形子数组的最大和
 *
 * https://leetcode.cn/problems/maximum-sum-circular-subarray/description/
 *
 * algorithms
 * Medium (40.61%)
 * Likes:    707
 * Dislikes: 0
 * Total Accepted:    88K
 * Total Submissions: 210.1K
 * Testcase Example:  '[1,-2,3,-2]'
 *
 * 给定一个长度为 n 的环形整数数组 nums ，返回 nums 的非空 子数组 的最大可能和 。
 * 
 * 环形数组 意味着数组的末端将会与开头相连呈环状。形式上， nums[i] 的下一个元素是 nums[(i + 1) % n] ， nums[i]
 * 的前一个元素是 nums[(i - 1 + n) % n] 。
 * 
 * 子数组 最多只能包含固定缓冲区 nums 中的每个元素一次。形式上，对于子数组 nums[i], nums[i + 1], ..., nums[j]
 * ，不存在 i <= k1, k2 <= j 其中 k1 % n == k2 % n 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,-2,3,-2]
 * 输出：3
 * 解释：从子数组 [3] 得到最大和 3
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [5,-3,5]
 * 输出：10
 * 解释：从子数组 [5,5] 得到最大和 5 + 5 = 10
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [3,-2,2,-3]
 * 输出：3
 * 解释：从子数组 [3] 和 [3,-2,2] 都可以得到最大和 3
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == nums.length
 * 1 <= n <= 3 * 10^4
 * -3 * 10^4 <= nums[i] <= 3 * 10^4​​​​​​​
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
  /**
   * 一个比较巧妙的方式求解
   * 最大子数组和记为 maxSum
   * 最小子数组和记为 minSum
   * 数组的总和记为 sum
   * 那么最大的就是 sum-minSum
   * 参考题解：https://zhuanlan.zhihu.com/p/97183504
   */
  let sum = nums[0];
  let preMax = nums[0];
  let preMin = nums[0];
  let maxSum = nums[0];
  let minSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // sum统计总和
    sum += nums[i];
    
    // 统计最大
    preMax = Math.max(preMax + nums[i], nums[i]);

    // 统计最小
    preMin = Math.min(preMin + nums[i], nums[i]);

    maxSum = Math.max(maxSum, preMax);
    
    minSum = Math.min(minSum, preMin);
  }

  if (sum === minSum) { // 全是正数 或者 全是负数的情况
    return maxSum;
  }

  return Math.max(maxSum, sum - minSum);
};
// @lc code=end

