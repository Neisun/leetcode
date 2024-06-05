/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 *
 * https://leetcode.cn/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (41.76%)
 * Likes:    7137
 * Dislikes: 0
 * Total Accepted:    1.1M
 * Total Submissions: 2.7M
 * Testcase Example:  '[1,3]\n[2]'
 *
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
 * 
 * 算法的时间复杂度应该为 O(log (m+n)) 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums1 = [1,3], nums2 = [2]
 * 输出：2.00000
 * 解释：合并数组 = [1,2,3] ，中位数 2
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums1 = [1,2], nums2 = [3,4]
 * 输出：2.50000
 * 解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
 * 
 * 
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * nums1.length == m
 * nums2.length == n
 * 0 <= m <= 1000
 * 0 <= n <= 1000
 * 1 <= m + n <= 2000
 * -10^6 <= nums1[i], nums2[i] <= 10^6
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  /**
   * 1 2 3 4
   * 5 6
   * 1 2 3 4 5 6
   * 归并排序的方式，将nums1和nums2合并成一个数组
   * 然后根据总数奇偶来取出中位数
   */
  const merge = (nums1, nums2) => {
    if (!nums1.length) return nums2;
    if (!nums2.length) return nums1;
    const len1 = nums1.length;
    const len2 = nums2.length;
    let idx1 = 0;
    let idx2 = 0;
    const list = [];
    while (idx1 < len1 && idx2 < len2) {
      if (nums1[idx1] <= nums2[idx2]) {
        list.push(nums1[idx1]);
        idx1++;
      } else {
        list.push(nums1[idx2]);
        idx2++;
      }
    }

    while (idx1 < len1) {
      list.push(nums1[idx1]);
      idx1++;
    }

    while (idx2 < len2) {
      list.push(nums1[idx2]);
      idx2++;
    }

    return list;
  }

  const nums = [...nums1, ...nums2];
};
// @lc code=end

