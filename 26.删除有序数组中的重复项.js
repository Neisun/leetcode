/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 *
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-array/description/
 *
 * algorithms
 * Easy (55.34%)
 * Likes:    3441
 * Dislikes: 0
 * Total Accepted:    1.7M
 * Total Submissions: 3.1M
 * Testcase Example:  '[1,1,2]'
 *
 * 给你一个 非严格递增排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序
 * 应该保持 一致 。然后返回 nums 中唯一元素的个数。
 * 
 * 考虑 nums 的唯一元素的数量为 k ，你需要做以下事情确保你的题解可以被通过：
 * 
 * 
 * 更改数组 nums ，使 nums 的前 k 个元素包含唯一元素，并按照它们最初在 nums 中出现的顺序排列。nums 的其余元素与 nums
 * 的大小不重要。
 * 返回 k 。
 * 
 * 
 * 判题标准:
 * 
 * 系统会用下面的代码来测试你的题解:
 * 
 * 
 * int[] nums = [...]; // 输入数组
 * int[] expectedNums = [...]; // 长度正确的期望答案
 * 
 * int k = removeDuplicates(nums); // 调用
 * 
 * assert k == expectedNums.length;
 * for (int i = 0; i < k; i++) {
 * ⁠   assert nums[i] == expectedNums[i];
 * }
 * 
 * 如果所有断言都通过，那么您的题解将被 通过。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,1,2]
 * 输出：2, nums = [1,2,_]
 * 解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0,0,1,1,1,2,2,3,3,4]
 * 输出：5, nums = [0,1,2,3,4]
 * 解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4
 * 。不需要考虑数组中超出新长度后面的元素。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 3 * 10^4
 * -10^4 <= nums[i] <= 10^4
 * nums 已按 非严格递增 排列
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  // const len = nums.length;
  // let idx = 0;
  // let i = 0;
  // while (i < len) {
  //   while (nums[i] === nums[i+1]) {
  //     i++;
  //   }
  //   nums[idx++] = nums[i];
  //   i++;
  // }
  // // console.log(idx);
  // // console.log(nums);
  // return idx;
  
  /**
   * 上边的解法，其实并不是最优的，可以优化，因为是升序排列，所以呢
   * while (nums[i] === nums[i+1]) 这块并不需要一个个对比，可以按照给出的几个重复元素去做对比
   */
  // 所以我们的思路是
  // const len = nums.length;
  // if (len <= 1) return len;
  // let idx = 1;
  // for (let i = 1; i < len; i++) {
  //   if (nums[i] !== nums[i-1]) {
  //     nums[idx++] = nums[i];
  //   }
  // }
  // console.log(idx)
  // console.log(nums)
  // return idx;

  const len = nums.length;
  if (len <= 1) return len;
  let idx = 1;
  for (let i = 1; i < len; i++) {
    if (nums[idx-1] !== nums[i]) {
      nums[idx++] = nums[i]
    }
  }
  return idx;
};
// @lc code=end

const nums = [0,0,1,1,1,2,2,3,3,4]
removeDuplicates(nums)

