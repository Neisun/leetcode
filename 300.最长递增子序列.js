/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 *
 * https://leetcode.cn/problems/longest-increasing-subsequence/description/
 *
 * algorithms
 * Medium (55.18%)
 * Likes:    3484
 * Dislikes: 0
 * Total Accepted:    831.5K
 * Total Submissions: 1.5M
 * Testcase Example:  '[10,9,2,5,3,7,101,18]'
 *
 * 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
 * 
 * 子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7]
 * 的子序列。
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [10,9,2,5,3,7,101,18]
 * 输出：4
 * 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0,1,0,3,2,3]
 * 输出：4
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [7,7,7,7,7,7,7]
 * 输出：1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 2500
 * -10^4 <= nums[i] <= 10^4
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 
 * 你能将算法的时间复杂度降低到 O(n log(n)) 吗?
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  /**
   * dp[i]含义表示以i结尾的数组即[0,i]的最长递增子序列长度
   * 那么如何做出状态推导呢？
   * 对于一个范围[...j,i]来说，如果nums[i] > nums[j] 那么就有 dp[i] = dp[j]+1;
   * 由于求得是最大所以 dp[i] = Math.max(dp[j]+1, dp[i]);
   * 
   * 如果求解的过程中有问题，就把dp数组打印出来一步步推导，看看哪一步出了问题
   */
  const len = nums.length;
  const dp = new Array(len).fill(1);
  let result = 1;
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) { // 找 [0...i-1]的最长递增子序列长度
      // dp[i] = dp[i-1];
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j]+1);
      }
      result = Math.max(dp[i], result);
    }
  }
  // console.log(dp);
  // return dp[len-1];
  return result;
};
// @lc code=end

// const nums = [10,9,2,5,3,7,101,18];
// const nums = [0,1,0,3,2,3];
const nums = [1,3,6,7,9,4,10,5,6];

lengthOfLIS(nums);

