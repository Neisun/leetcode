/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 *
 * https://leetcode.cn/problems/merge-sorted-array/description/
 *
 * algorithms
 * Easy (52.89%)
 * Likes:    2293
 * Dislikes: 0
 * Total Accepted:    1.1M
 * Total Submissions: 2.1M
 * Testcase Example:  '[1,2,3,0,0,0]\n3\n[2,5,6]\n3'
 *
 * 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。
 * 
 * 请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。
 * 
 * 注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m
 * 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * 输出：[1,2,2,3,5,6]
 * 解释：需要合并 [1,2,3] 和 [2,5,6] 。
 * 合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums1 = [1], m = 1, nums2 = [], n = 0
 * 输出：[1]
 * 解释：需要合并 [1] 和 [] 。
 * 合并结果是 [1] 。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums1 = [0], m = 0, nums2 = [1], n = 1
 * 输出：[1]
 * 解释：需要合并的数组是 [] 和 [1] 。
 * 合并结果是 [1] 。
 * 注意，因为 m = 0 ，所以 nums1 中没有元素。nums1 中仅存的 0 仅仅是为了确保合并结果可以顺利存放到 nums1 中。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * nums1.length == m + n
 * nums2.length == n
 * 0 <= m, n <= 200
 * 1 <= m + n <= 200
 * -10^9 <= nums1[i], nums2[j] <= 10^9
 * 
 * 
 * 
 * 
 * 进阶：你可以设计实现一个时间复杂度为 O(m + n) 的算法解决此问题吗？
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  /** 最笨的方法 */
  // let j = 0;
  // for (let i = 0; i < nums1.length; i++) {
  //   if (i >= m) {
  //     nums1[i] = nums2[j];
  //     j++;
  //   }
  // }
  // // 排序
  // nums1.sort((a, b) => a - b);

  /**
   * 类似于归并的方法
   * 思路
   * 从后向前分别比较nums1和nums2，将大数放在数组尾部
   */
  // 我们需要三个变量记录下标
  let nums1Index = m - 1;
  let nums2Index = n - 1;
  let curIndex = m + n -1;

  while (nums1Index >= 0 && nums2Index >= 0) {
    if (nums1[nums1Index] < nums2[nums2Index]) {
      nums1[curIndex] = nums2[nums2Index];
      nums2Index--;
      curIndex--;
    } else {
      nums1[curIndex] = nums1[nums1Index];
      nums1Index--;
      curIndex--;
    }
  }

  // console.log(nums1)
  // console.log(nums1Index)
  // console.log(nums2Index)

  // 其实本来需要考虑两种情况，就是nums1数组没遍历完，或者nums2没遍历完
  // 但是nums1没遍历完的情况不用考虑了，因为就是在原数组上改的
  // 如果nums2没遍历完，就需要把nums2的剩下的从头到尾放在nums1上
  while (nums2Index >= 0) {
    nums1[nums2Index] = nums2[nums2Index];
    nums2Index--;
  }

  console.log(nums1)
};
// @lc code=end

// const nums1 = [1,3,5,0,0,0], m = 3, nums2 = [2,4,6], n = 3
const nums1 = [0], m = 0, nums2 = [1], n = 1

merge(nums1, m, nums2, n);

