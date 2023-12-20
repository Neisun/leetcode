/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 *
 * https://leetcode.cn/problems/next-greater-element-ii/description/
 *
 * algorithms
 * Medium (67.09%)
 * Likes:    895
 * Dislikes: 0
 * Total Accepted:    223.7K
 * Total Submissions: 333K
 * Testcase Example:  '[1,2,1]'
 *
 * 给定一个循环数组 nums （ nums[nums.length - 1] 的下一个元素是 nums[0] ），返回 nums 中每个元素的
 * 下一个更大元素 。
 * 
 * 数字 x 的 下一个更大的元素 是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。如果不存在，则输出 -1
 * 。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: nums = [1,2,1]
 * 输出: [2,-1,2]
 * 解释: 第一个 1 的下一个更大的数是 2；
 * 数字 2 找不到下一个更大的数； 
 * 第二个 1 的下一个最大的数需要循环搜索，结果也是 2。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: nums = [1,2,3,4,3]
 * 输出: [2,3,4,-1,4]
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 <= nums.length <= 10^4
 * -10^9 <= nums[i] <= 10^9
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  /**
   * 这是一个变形，要学会举一反三
   */
  // 复制一份nums，当做循环用
  const nums2 = [...nums, ...nums];
  // console.log(nums2);
  const n1l = nums.length;
  const n2l = nums2.length;
  const stack = [];
  const map = new Map();
  const result = new Array(n1l).fill(-1);
  for (let i = 0; i < n2l; i++) {
    while (nums2[i] > nums2[stack[stack.length-1]] && stack.length) {
      const index = stack.pop();
      map.set(`${nums2[index]}_${index}`, nums2[i]);
    }
    stack.push(i);
  }

  for (let i = 0; i < n1l; i++) {
    if (map.has(`${nums[i]}_${i}`)) {
      result[i] = map.get(`${nums[i]}_${i}`);
    }
  }

  // console.log(map);
  // console.log(result);

  return result;
};
// @lc code=end
// const nums = [1,2,1];
// const nums = [1,2,3,4,3];
const nums = [-1,0];
nextGreaterElements(nums);

