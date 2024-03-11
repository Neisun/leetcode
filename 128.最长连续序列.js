/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 *
 * https://leetcode.cn/problems/longest-consecutive-sequence/description/
 *
 * algorithms
 * Medium (53.19%)
 * Likes:    1993
 * Dislikes: 0
 * Total Accepted:    556.8K
 * Total Submissions: 1.1M
 * Testcase Example:  '[100,4,200,1,3,2]'
 *
 * 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
 * 
 * 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [100,4,200,1,3,2]
 * 输出：4
 * 解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0,3,7,2,5,8,4,6,0,1]
 * 输出：9
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * -10^9 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  /**
   * 注意题设的描述，实现O(n)的复杂度
   * 虽然写出来了，但是看的官方题解，写的过程倒是知道了，但是如果在遇到类似的就是没有思路
   * 看了B站的视频，豁然开朗，其实是连续的片段，通过找片段的起点然后叠加到片段的终点
   * 如何找片段的起点，通过数字-1，如果不在set中，说明是起点
   * 然后叠加之后，如果不在set中，找到了终点，更新一下最大值即可
   * https://www.bilibili.com/video/BV1et4y1x7aG/?spm_id_from=333.337.search-card.all.click&vd_source=ec19ae4a4e58b6b0c8a16946dc815c41
   * 对于例子[100,4,200,1,3,2]
   * 数字片段是
   * 1 2 3 4     100      200
   */
  // 因为题设中的数字可能存在重复的情况，所以我们需要使用set去重处理
  const num_set = new Set()
  // 遍历nums 加入到set中完成去重
  for (const num of nums) {
    num_set.add(num);
  }

  // 结果
  let longestCount = 0;

  for (const num of nums) {
    // 只对不在set中出现的数字，这样可以去除重复的处理
    // 其实是从小到大找，对于例子 [100,4,200,1,3,2]
    // 对于99来说，不在set中，我们进入if中，更新最大值为1
    // 然后对于3来说，3在set中
    // 对于199来说，不在set中。。。更新最大值还是1
    // 对于2来说，2在set中
    // 对于0来说，不在set中，进入到while循环，每次递增，直到加到5，更新最大值为4
    if (!num_set.has(num - 1)) {
      let currentLongest = 1;
      let currentNum = num;

      // 以此为起点找连续
      while (num_set.has(currentNum+1)) {
        currentLongest++;
        currentNum++;
      }

      longestCount = Math.max(longestCount, currentLongest)
    }
  }

  console.log(longestCount);

  return longestCount;
};
// @lc code=end

// const nums = [100,4,200,1,3,2];
const nums = [0,3,7,2,5,8,4,6,0,1];
longestConsecutive(nums)

