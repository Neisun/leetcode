/*
 * @lc app=leetcode.cn id=1793 lang=javascript
 *
 * [1793] 好子数组的最大分数
 *
 * https://leetcode.cn/problems/maximum-score-of-a-good-subarray/description/
 *
 * algorithms
 * Hard (46.31%)
 * Likes:    115
 * Dislikes: 0
 * Total Accepted:    15.5K
 * Total Submissions: 29K
 * Testcase Example:  '[1,4,3,7,4,5]\n3'
 *
 * 给你一个整数数组 nums （下标从 0 开始）和一个整数 k 。
 * 
 * 一个子数组 (i, j) 的 分数 定义为 min(nums[i], nums[i+1], ..., nums[j]) * (j - i + 1)
 * 。一个 好 子数组的两个端点下标需要满足 i <= k <= j 。
 * 
 * 请你返回 好 子数组的最大可能 分数 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：nums = [1,4,3,7,4,5], k = 3
 * 输出：15
 * 解释：最优子数组的左右端点下标是 (1, 5) ，分数为 min(4,3,7,4,5) * (5-1+1) = 3 * 5 = 15 。
 * 
 * 
 * 示例 2：
 * 
 * 输入：nums = [5,5,4,5,4,1,1,1], k = 0
 * 输出：20
 * 解释：最优子数组的左右端点下标是 (0, 4) ，分数为 min(5,5,4,5,4) * (4-0+1) = 4 * 5 = 20 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 10^5
 * 1 <= nums[i] <= 2 * 10^4
 * 0 <= k < nums.length
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function(nums, k) {
  /**
   * 先试一下暴力解法，看看能否通过
   * i <= k <= j
   * 暴力解法超时，看来不能轻易求解
   */
  // let result = -Infinity;

  // // getResult
  // const getResult = (i, j) => {
  //   return Math.min(...nums.slice(i, j+1)) * (j-i+1);
  // }

  // for (let i = 0; i <= k; i++) {
  //   for (let j = k; j < nums.length; j++) {
  //     result = Math.max(result, getResult(i, j));
  //   }
  // }

  // return result;

  /**
   * 双指针方式
   * 分析一下这个题，目标是从 [i...j]区间内找最小的值 * 区间的长度的最大值
   */
  let l = k - 1;
  let r = k + 1;
  let min = nums[k];
  const len = nums.length;
  let result = 0;
  // 2 1 3
  // -1 0 1 2 3 
  while(min !== -1) {
    // 左边持续比min大
    while (l >= 0 && nums[l] >= min) {
      l--;
    }
    // 右边持续找比min大
    while (r <= len - 1 && nums[r] >= min) {
      r++;
    }
    result = Math.max(result, min * (r-l-1));
    // 如果同时到了边界，就停止寻找
    if (l < 0 && r >= len) {
      break;
    }
    // min取二者中的最大值，为什么取最大值，因为求最大值
    min = Math.max((l >= 0 ? nums[l] : -1), (r <= len - 1 ? nums[r] : -1));
  }
  console.log(result);
  return result;
  
};
// @lc code=end

// const nums = [1,4,3,7,4,5], k = 3;
const nums = [5,5,4,5,4,1,1,1], k = 0;

maximumScore(nums, k);

