/*
 * @lc app=leetcode.cn id=1005 lang=javascript
 *
 * [1005] K 次取反后最大化的数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
  // // 先排序 升序
  // nums.sort((a, b) => a - b);

  // 我们看一下有哪些情况
  // 有负数和没负数的情况
  // [1,2,3,4]
  // [-1,2,3,4]
  /**
   * 我们的思路是尽可能将负数变成正数
   * 如果没负数，我们看剩余几次变换，如果剩余偶数次变换，正数维持不变
   * 如果剩余奇数次，比如剩余3次，我们最好的选择也只能是将其变成负数
   * 但是存在问题哦
   * 比如 [-3,5,6,7] k = 3
   * 变成 [3,5,6,7]这时候，我们发现其实还是变原来的负数才可能完成最大值的问题
   */

  /**
   * 正确思路，上述思路存在一些问题，就是每次变换完成后需要重新排序的问题
   * 1. 按照绝对值从大到小排序
   * 2. 将负数变成正数 k--
   * 3. 如果k还是有剩余，那么反复变换数值最小的那个直到用完为止
   * 4. 求和
   */

  // 排序 按照绝对值大小降序排序
  nums.sort((a, b) => Math.abs(b) - Math.abs(a));

  // 提出数组长度
  const len = nums.length;

  // 将所有负数变成正数
  for (let i = 0; i < len; i++) {
    if (nums[i] < 0 && k > 0) {
      nums[i] *= -1;
      k--;
    }
  }

  // 反复变换数值最小的那个
  while (k > 0) {
    nums[len - 1] *= -1;
    k--;
  }

  // 求和
  return nums.reduce((a, b) => a + b);
};
// @lc code=end


// [3,-1,0,2]

// [-1, 0, 2, 3]

// [1, 0, 2, 3]