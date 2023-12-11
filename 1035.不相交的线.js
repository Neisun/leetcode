/*
 * @lc app=leetcode.cn id=1035 lang=javascript
 *
 * [1035] 不相交的线
 *
 * https://leetcode.cn/problems/uncrossed-lines/description/
 *
 * algorithms
 * Medium (71.20%)
 * Likes:    514
 * Dislikes: 0
 * Total Accepted:    93.5K
 * Total Submissions: 131.2K
 * Testcase Example:  '[1,4,2]\n[1,2,4]'
 *
 * 在两条独立的水平线上按给定的顺序写下 nums1 和 nums2 中的整数。
 * 
 * 现在，可以绘制一些连接两个数字 nums1[i] 和 nums2[j] 的直线，这些直线需要同时满足满足：
 * 
 * 
 * nums1[i] == nums2[j]
 * 且绘制的直线不与任何其他连线（非水平线）相交。
 * 
 * 
 * 请注意，连线即使在端点也不能相交：每个数字只能属于一条连线。
 * 
 * 以这种方法绘制线条，并返回可以绘制的最大连线数。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums1 = [1,4,2], nums2 = [1,2,4]
 * 输出：2
 * 解释：可以画出两条不交叉的线，如上图所示。 
 * 但无法画出第三条不相交的直线，因为从 nums1[1]=4 到 nums2[2]=4 的直线将与从 nums1[2]=2 到 nums2[1]=2
 * 的直线相交。
 * 
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums1 = [2,5,1,2,5], nums2 = [10,5,2,1,5,2]
 * 输出：3
 * 
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums1 = [1,3,7,1,7,5], nums2 = [1,9,2,5,1]
 * 输出：2
 * 
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums1.length, nums2.length <= 500
 * 1 <= nums1[i], nums2[j] <= 2000
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function(nums1, nums2) {
  /**
   * 这道题是一道文字描述题，要在nums1与nums2中找相同的数字，然后画线
   * 要求
   * 1. 每个数字只能用一次
   * 2. 画的线不能相交
   * 
   * 等同于在nums1、nums2中找最长的公共子序列
   */
  // const len1 = nums1.length;
  // const len2 = nums2.length;

  // const dp = new Array(len1).fill(0).map(_ => new Array(len2).fill(0));

  // // 初始化
  // for (let i = 0; i < len1; i++) {
  //   const arr = nums1.slice(0, i+1);
  //   if (arr.includes(nums2[0])) {
  //     dp[i][0] = 1;
  //   }
  // }

  // for (let j = 0; j < len2; j++) {
  //   const arr = nums2.slice(0, j+1);
  //   if (arr.includes(nums1[0])) {
  //     dp[0][j] = 1;
  //   }
  // }


  // // 遍历
  // for (let i = 1; i < len1; i++) {
  //   for (let j = 1; j < len2; j++) {
  //     if (nums1[i] === nums2[j]) {
  //       dp[i][j] = dp[i-1][j-1]+1;
  //     } else {
  //       dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
  //     }
  //   }
  // }

  // console.log(dp);

  // return dp[len1-1][len2-1];

  /**
   * 为了简化初始化的操作，我们将dp数组定义为
   * dp[i][j]表示以i-1和j-1结尾
   * 状态转移一样
   * 初始化由于dp[0][0]是没有意义的，所以初始化为0
   * 但是这种写法，不是那么好理解，上边的方式比较好理解，但是却麻烦再初始化上
   */
  const len1 = nums1.length;
  const len2 = nums2.length;
  // 构造的过程中 连带初始化了
  const dp = new Array(len1+1).fill(0).map(_ => new Array(len2+1).fill(0));

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (nums1[i-1] === nums2[j-1]) { // 以i-1和j-1结尾，就比较nums1[i-1]和nums2[j-1]
        dp[i][j] = dp[i-1][j-1]+1
      } else {
        dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
      }
    }
  }

  // console.log(dp);

  return dp[len1][len2];
};
// @lc code=end
const nums1 = [2,5,1,2,5], nums2 = [10,5,2,1,5,2];
maxUncrossedLines(nums1, nums2);

