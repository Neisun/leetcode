/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 *
 * https://leetcode.cn/problems/rotate-array/description/
 *
 * algorithms
 * Medium (44.38%)
 * Likes:    2074
 * Dislikes: 0
 * Total Accepted:    776.7K
 * Total Submissions: 1.7M
 * Testcase Example:  '[1,2,3,4,5,6,7]\n3'
 *
 * 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: nums = [1,2,3,4,5,6,7], k = 3
 * 输出: [5,6,7,1,2,3,4]
 * 解释:
 * 向右轮转 1 步: [7,1,2,3,4,5,6]
 * 向右轮转 2 步: [6,7,1,2,3,4,5]
 * 向右轮转 3 步: [5,6,7,1,2,3,4]
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入：nums = [-1,-100,3,99], k = 2
 * 输出：[3,99,-1,-100]
 * 解释: 
 * 向右轮转 1 步: [99,-1,-100,3]
 * 向右轮转 2 步: [3,99,-1,-100]
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 10^5
 * -2^31 <= nums[i] <= 2^31 - 1
 * 0 <= k <= 10^5
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 
 * 尽可能想出更多的解决方案，至少有 三种 不同的方法可以解决这个问题。
 * 你可以使用空间复杂度为 O(1) 的 原地 算法解决这个问题吗？
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  /**
   * 看上去貌似不难
   * 原地操作数组的话，还是有点难的，那么我们想一想
   * 第一种方式，copy一份原数组，
   * 先从length-3遍历到最后，按顺序放入原数组中
   * 在从前遍历到 length-3 按顺序放入原数组中
   * const nums = [1,2,3], k = 2;
      k = 1, [3,1,2]
      k = 2, [2,3,1]
      k = 3, [1,2,3]
      k = 4, [3,1,2]
      所以经过上述的分析，我们发现，应该取一个偏移量即 k%len
   */
  // const _nums = [...nums];
  // const len = nums.length;
  // let idx = 0;
  // const offset = k % len;
  // for (let i = len-offset; i < len; i++) {
  //   nums[idx++] = _nums[i];
  // }
  // for (let i = 0; i < len-offset; i++) {
  //   nums[idx++] = _nums[i];
  // }
  // console.log(nums);

  /**
   * 第二种方式，反转数组的方式
   * 拿 [1,2,3] k=1举例来看 应该得到结果 [3,1,2]
   * 1. 全部反转 [3,2,1]
   * 2. 反转前k个 [3,2,1]
   * 3. 反转k-n个 [3,1,2]
   */
  
  // 定一个reverse的方法
  const offset = k % nums.length;
  const reverse = (start, end, list) => {
    while (start <= end) {
      [list[start], list[end]] = [list[end], list[start]];
      start++;
      end--;
    }
  }
  // 1. 全部反转
  reverse(0, nums.length - 1, nums);
  // 2. 反转前k个
  reverse(0, offset-1, nums);
  // 反转剩余的
  reverse(offset, nums.length-1, nums);
  console.log(nums);
};
// @lc code=end

const nums = [1,2,3,4,5,6,7], k = 3;
// const nums = [-1,-100,3,99], k = 2;
// const nums = [1,2,3], k = 1;
rotate(nums, k)

