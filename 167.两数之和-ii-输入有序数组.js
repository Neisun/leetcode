/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 *
 * https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/description/
 *
 * algorithms
 * Medium (59.91%)
 * Likes:    1173
 * Dislikes: 0
 * Total Accepted:    648.6K
 * Total Submissions: 1.1M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给你一个下标从 1 开始的整数数组 numbers ，该数组已按 非递减顺序排列  ，请你从数组中找出满足相加之和等于目标数 target
 * 的两个数。如果设这两个数分别是 numbers[index1] 和 numbers[index2] ，则 1 <= index1 < index2 <=
 * numbers.length 。
 * 
 * 以长度为 2 的整数数组 [index1, index2] 的形式返回这两个整数的下标 index1 和 index2。
 * 
 * 你可以假设每个输入 只对应唯一的答案 ，而且你 不可以 重复使用相同的元素。
 * 
 * 你所设计的解决方案必须只使用常量级的额外空间。
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：numbers = [2,7,11,15], target = 9
 * 输出：[1,2]
 * 解释：2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。返回 [1, 2] 。
 * 
 * 示例 2：
 * 
 * 
 * 输入：numbers = [2,3,4], target = 6
 * 输出：[1,3]
 * 解释：2 与 4 之和等于目标数 6 。因此 index1 = 1, index2 = 3 。返回 [1, 3] 。
 * 
 * 示例 3：
 * 
 * 
 * 输入：numbers = [-1,0], target = -1
 * 输出：[1,2]
 * 解释：-1 与 0 之和等于目标数 -1 。因此 index1 = 1, index2 = 2 。返回 [1, 2] 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 2 <= numbers.length <= 3 * 10^4
 * -1000 <= numbers[i] <= 1000
 * numbers 按 非递减顺序 排列
 * -1000 <= target <= 1000
 * 仅存在一个有效答案
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  /**
   * hash的方式求解
   * 遍历一次，空间复杂度O(1), 时间复杂度O(N)
   * 比较高效
   */
  // const map = new Map();
  // for (let i = 0; i < numbers.length; i++) {
  //   if (map.has(numbers[i])) {
  //     return [map.get(numbers[i])+1, i+1];
  //   }
  //   if (!map.has(target-numbers[i])) {
  //     map.set(target-numbers[i], i);
  //   }
  // }
  // return [-1, -1];

  /**
   * 暴力方式？？
   * 暴力方式超时了
   */
  // for (let i = 0; i < numbers.length - 1; i++) {
  //   for (let j = i + 1; j < numbers.length; j++) {
  //     if (numbers[i] + numbers[j] === target) {
  //       return [i+1, j+1];
  //     }
  //   }
  // }
  // return [-1, -1];

  /**
   * 双指针的方式
   * 假如要找的元素的下标是l 和 r
   * 那么如果 nums[l] + nums[r] < target l 右移
   * 如果 nums[l] + nums[r] > target r 左移
   * 重复这个过程直到找到解
   * 双指针的方式也比较高效
   */
  let l = 0;
  let r = numbers.length - 1;
  while (l < r) {
    if (numbers[l] + numbers[r] < target) {
      l++;
    } else if (numbers[l] + numbers[r] > target) {
      r--;
    } else { // 相等的情况
      return [l+1, r+1];
    }
  }
  return [-1, -1];
};
// @lc code=end

const numbers = [2,7,11,15], target = 9;
// const numbers = [2,3,4], target = 6;
// const numbers = [-1,0], target = -1;
const r = twoSum(numbers, target);
console.log(r);

