/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 *
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii/description/
 *
 * algorithms
 * Medium (61.46%)
 * Likes:    969
 * Dislikes: 0
 * Total Accepted:    325.9K
 * Total Submissions: 529.8K
 * Testcase Example:  '[1,1,1,2,2,3]'
 *
 * 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使得出现次数超过两次的元素只出现两次 ，返回删除后数组的新长度。
 * 
 * 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 * 
 * 
 * 
 * 说明：
 * 
 * 为什么返回数值是整数，但输出的答案是数组呢？
 * 
 * 请注意，输入数组是以「引用」方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。
 * 
 * 你可以想象内部操作如下:
 * 
 * 
 * // nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝
 * int len = removeDuplicates(nums);
 * 
 * // 在函数里修改输入数组对于调用者是可见的。
 * // 根据你的函数返回的长度, 它会打印出数组中 该长度范围内 的所有元素。
 * for (int i = 0; i < len; i++) {
 * print(nums[i]);
 * }
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,1,1,2,2,3]
 * 输出：5, nums = [1,1,2,2,3]
 * 解释：函数应返回新长度 length = 5, 并且原数组的前五个元素被修改为 1, 1, 2, 2, 3。 不需要考虑数组中超出新长度后面的元素。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0,0,1,1,1,1,2,3,3]
 * 输出：7, nums = [0,0,1,1,2,3,3]
 * 解释：函数应返回新长度 length = 7, 并且原数组的前七个元素被修改为 0, 0, 1, 1, 2, 3,
 * 3。不需要考虑数组中超出新长度后面的元素。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 3 * 10^4
 * -10^4 <= nums[i] <= 10^4
 * nums 已按升序排列
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
//   let idx = 0;
//   let i = 0;
//   let count = 1;
//   const len = nums.length;
//   while (i < len) {
//       while (nums[i] === nums[i+1]) {
//           i++;
//           count++;
//       }
//       let l = count > 2 ? 2 : count;
//       for (let j = 0; j < l; j++) {
//           nums[idx++] = nums[i]
//       }
//       i++;
//       count = 1;
//   }
//   console.log(nums);
//   console.log(idx);
//   return idx;


  /**
   * 与28题类似，只不过这是要删除的元素可以包含两个重复的元素
   * 可以用一种更通用的方式
   */
  const len = nums.length;
  if (len <= 2) return len;
  let idx = 2;
  for (let i = 2; i < len; i++) {
    if (nums[idx-2] !== nums[i]) {
      // console.log(i)
      nums[idx++] = nums[i]
    }
  }
  // console.log(idx)
  // console.log(nums)
  return idx;
};
// @lc code=end
const nums = [1,1,1,2,2,3];
// const nums = [0,0,1,1,1,1,2,3,3];
removeDuplicates(nums)

