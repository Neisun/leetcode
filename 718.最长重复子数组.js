/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 *
 * https://leetcode.cn/problems/maximum-length-of-repeated-subarray/description/
 *
 * algorithms
 * Medium (56.75%)
 * Likes:    1030
 * Dislikes: 0
 * Total Accepted:    217.5K
 * Total Submissions: 383.3K
 * Testcase Example:  '[1,2,3,2,1]\n[3,2,1,4,7]'
 *
 * 给两个整数数组 nums1 和 nums2 ，返回 两个数组中 公共的 、长度最长的子数组的长度 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
 * 输出：3
 * 解释：长度最长的公共子数组是 [3,2,1] 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]
 * 输出：5
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums1.length, nums2.length <= 1000
 * 0 <= nums1[i], nums2[i] <= 100
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
  /**
   * 如果暴力搜索的方式，时间复杂度会非常高
   * 所以我们换个方式
   * 如果我们设 dp[i][j]表示在nums1中以i结尾、在nums2中以j结尾的最长公共子数组的长度
   * 那么就会有如下规律
   * [0...i-1] 与 [0...j-1]中
   * 如果 nums1[i] === nums2[j]，那么dp[i-1][j-1]+1
   */
  const len1 = nums1.length;
  const len2 = nums2.length;

  let result = 0;

  // 构造dp数组
  const dp = new Array(len1).fill(0).map(_ => new Array(len2).fill(0));

  // 初始化

  // dp[i][0]
  for (let i = 0; i < len1; i++) {
    if (nums1[i] === nums2[0]) {
      dp[i][0] = 1;
    } else {
      dp[i][0] = 0;
    }
    result = Math.max(result, dp[i][0])
  }

  // dp[0][j]
  for (let j = 0; j < len2; j++) {
    if (nums2[j] === nums1[0]) {
      dp[0][j] = 1;
    } else {
      dp[0][j] = 0;
    }
    result = Math.max(result, dp[0][j]);
  }


  // 遍历
  for (let i = 1; i < len1; i++) {
    for (let j = 1; j < len2; j++) {
      if (nums1[i] === nums2[j]) {
        dp[i][j] = dp[i-1][j-1]+1
      }
      // console.log(dp[i][j])
      // 这个写法会把 i=0和j=0的情况没有考虑到，所以当结果出现在i=0或者j=0的时候，就会遗漏
      // 为了避免遗漏，我们就把result的初始值，设置在初始化之后
      result = Math.max(result, dp[i][j]);
    }
  }

  // 当然如果我们觉得初始化的时候比较麻烦，还得考虑到result的初始化问题，我们可以在遍历的过程中稍微改动一下
  // for (let i = 0; i < len1; i++) {
  //   for (let j = 0; j < len2; j++) {
  //     if (nums1[i] === nums2[j] && i > 0 && j > 0) {
  //       dp[i][j] = dp[i-1][j-1]+1
  //     }
  //     result = Math.max(result, dp[i][j]);
  //   }
  // }

  // console.log(dp);
  // console.log(result)
  return result;
};
// @lc code=end

// const nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7];
// const nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0];
// const nums1 = [0,1,1,1,1], nums2 = [1,0,1,0,1];
findLength(nums1, nums2);

