/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 *
 * https://leetcode.cn/problems/product-of-array-except-self/description/
 *
 * algorithms
 * Medium (74.93%)
 * Likes:    1689
 * Dislikes: 0
 * Total Accepted:    366.2K
 * Total Submissions: 487.6K
 * Testcase Example:  '[1,2,3,4]'
 *
 * 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。
 * 
 * 题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。
 * 
 * 请 不要使用除法，且在 O(n) 时间复杂度内完成此题。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: nums = [1,2,3,4]
 * 输出: [24,12,8,6]
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: nums = [-1,1,0,-3,3]
 * 输出: [0,0,9,0,0]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 2 <= nums.length <= 10^5
 * -30 <= nums[i] <= 30
 * 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内
 * 
 * 
 * 
 * 
 * 进阶：你可以在 O(1) 的额外空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组 不被视为 额外空间。）
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  /**
   * 计入我们给定的元素是 [1,2,3,4,5]
   * 设置两个列表 L R
   * L[i]表示当前元素nums[i]左边的乘积
   * 那么 L[0] = 1
   * L[1] = L[0] * nums[1-1] = L[0] * nums[0] = 1
   * L[2] = L[1] * nums[2-1] = 1 * 2 = 2
   * 所以 得出关系 L[i] = L[i-1] * nums[i-1]
   */
  // 构造L
  const L = [];
  const n = nums.length;
  L[0] = 1;
  for (let i = 1; i < n; i++) {
    L[i] = L[i-1] * nums[i-1];
  }
  // 同理的构造一下R
  const R = [];
  R[n-1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    R[i] = R[i+1] * nums[i+1]
  }
  
  // 这样一来就好办了 除了nums[i]的乘积就等于L[i] * R[i]
  const result = [];
  for (let i = 0; i < n; i++) {
    result[i] = L[i] * R[i];
  }
  // console.log(result);
  return result;
};
// @lc code=end

const nums = [1,2,3,4]
productExceptSelf(nums);

