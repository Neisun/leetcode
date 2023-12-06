/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 *
 * https://leetcode.cn/problems/longest-continuous-increasing-subsequence/description/
 *
 * algorithms
 * Easy (56.30%)
 * Likes:    433
 * Dislikes: 0
 * Total Accepted:    220K
 * Total Submissions: 390.3K
 * Testcase Example:  '[1,3,5,4,7]'
 *
 * 给定一个未经排序的整数数组，找到最长且 连续递增的子序列，并返回该序列的长度。
 * 
 * 连续递增的子序列 可以由两个下标 l 和 r（l < r）确定，如果对于每个 l ，都有 nums[i] < nums[i + 1] ，那么子序列
 * [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] 就是连续递增子序列。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,3,5,4,7]
 * 输出：3
 * 解释：最长连续递增序列是 [1,3,5], 长度为3。
 * 尽管 [1,3,5,7] 也是升序的子序列, 但它不是连续的，因为 5 和 7 在原数组里被 4 隔开。 
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [2,2,2,2,2]
 * 输出：1
 * 解释：最长连续递增序列是 [2], 长度为1。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * -10^9 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  /**
   * 暴力搜索，试一下看看是否会超时
   * 不出意外的出意外了，果然超时 Time Limit Exceeded
   * 走到33个测试用例超时了
   */
  // const len = nums.length;
  // let max = 1;
  // for (let start = 0; start < len-1; start++) {
  //   for (let end = start+1; end < len; end++) {
  //     //  还需要第三层循环去判断是否递增，并且记录最长递增的
  //     if (isValid(start, end)) {
  //       max = Math.max(max, end-start+1);
  //     }
  //   }
  // }

  // function isValid(start, end) {
  //   for (let i = start; i < end; i++) {
  //     if (nums[i] >= nums[i+1]) return false;
  //   }
  //   return true;
  // }

  // console.log(max)

  // return max;

  /**
   * 动态规划一
   * 采用动态规划的方式，存在最优子结构，所以我们利用动态规划尝试求解
   * 对于[...j,i] 如果满足 nums[i] > nums[j] 那么 dp[i] = max(dp[i], dp[j]+1)
   * 
   * 这个动态规划还存在优化的空间，会在动态规划二的版本给出，由于遍历了两次，所以其时间复杂度上并不是太好
   * 而且这个题与300. 最长递增子序列的区别是在哪里？
   * 我这个版本的处理并没有体现出来
   */

  // const len = nums.length;
  // // 构造dp数组的同时，完成初始化的工作
  // const dp = new Array(len).fill(1);
  // // 遍历
  // for (let i = 1;i < len; i++) {
  //   for (let j = 0; j < i; j++) {
  //     if (nums[i] > nums[j]) {
  //       // dp[i] = Math.max(dp[i], dp[j]+1);
  //       dp[i] = dp[j]+1
  //     } else {
  //       // 不是递增的情况，将该值重置为1
  //       dp[i] = 1
  //     }
  //   }
  // }
  // // console.log(dp);
  // return Math.max(...dp);


  /**
   * 动态规划二
   * dp[i]的定义是以下标i结尾的最长连续递增序列的长度
   * 所以如果满足 nums[i] > nums[i-1]，那么 dp[i] = dp[i-1]+1
   * 这个时候就体现出与300题的区别了，300题不是连续的，而是需要比较nums[i]与nums[j]
   * 
   * 时间复杂度上应该会有质的飞跃，因为减少了一层循环
   */
  const len = nums.length;
  const dp = new Array(len).fill(1);
  for (let i = 0; i < len; i++) {
    if (nums[i] > nums[i-1]) {
      dp[i] = dp[i-1]+1;
    }
  }
  // console.log(dp);
  // return dp[len-1];
  return Math.max(...dp);
};
// @lc code=end
const nums = [1,3,5,4,7];
// const nums = [2,2,2,2,2];
// const nums = [1,2,3,4,0,2,3,5,1,1,2,3,4,5]

findLengthOfLCIS(nums);
