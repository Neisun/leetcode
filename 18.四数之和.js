/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 *
 * https://leetcode.cn/problems/4sum/description/
 *
 * algorithms
 * Medium (36.69%)
 * Likes:    1862
 * Dislikes: 0
 * Total Accepted:    551K
 * Total Submissions: 1.5M
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a],
 * nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：
 * 
 * 
 * 0 <= a, b, c, d < n
 * a、b、c 和 d 互不相同
 * nums[a] + nums[b] + nums[c] + nums[d] == target
 * 
 * 
 * 你可以按 任意顺序 返回答案 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,0,-1,0,-2,2], target = 0
 * 输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [2,2,2,2,2], target = 8
 * 输出：[[2,2,2,2]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 200
 * -10^9 <= nums[i] <= 10^9
 * -10^9 <= target <= 10^9
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  /**
   * 与三数之和类似，即使这样，我们看，这个题的通过率也不是很高的
   * 排序
   * 确定两个数，再利用双指针确定四个数
   * 需要去重
   * 优化部分：剪枝优化
   * [-5, -4, -3, -2, 1, 3, 3, 5]
   */
  // 结果集
  const result = [];
  const len = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) { // 确定第一个数
    if (nums[i] > target && nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i-1]) continue;
    for (let j = i + 1; j < len; j++) { // 确定第二个数
      if (nums[i] + nums[j] > target && nums[i] + nums[j] > 0) break;
      if (j > i + 1 && nums[j] === nums[j-1]) continue;
      // 确定两个指针
      let l = j + 1;
      let r = len - 1;
      while (l < r) { // 不断地移动两个指针
        const sum = nums[i] + nums[j] + nums[l] + nums[r];
        if (sum === target) {
          result.push([nums[i], nums[j], nums[l], nums[r]]);
          // 去重
          while (l < r && nums[l] === nums[l+1]) {
            l++;
          }
          while (l < r && nums[r] === nums[r-1]) {
            r--;
          }
          l++;
          r--;
        } else if (sum < target) {
          l++;
        } else {
          r--;
        }
      }
    }
  }
  // console.log(result);
  return result;
};
// @lc code=end

// const nums = [1,0,-1,0,-2,2], target = 0;
const nums = [1,-2,-5,-4,-3,3,3,5], target = -11;
fourSum(nums, target);

