/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode.cn/problems/3sum/description/
 *
 * algorithms
 * Medium (37.48%)
 * Likes:    6683
 * Dislikes: 0
 * Total Accepted:    1.6M
 * Total Submissions: 4.4M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j !=
 * k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请
 * 
 * 你返回所有和为 0 且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 * 解释：
 * nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
 * nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
 * nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
 * 不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
 * 注意，输出的顺序和三元组的顺序并不重要。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0,1,1]
 * 输出：[]
 * 解释：唯一可能的三元组和不为 0 。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [0,0,0]
 * 输出：[[0,0,0]]
 * 解释：唯一可能的三元组和为 0 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 3 <= nums.length <= 3000
 * -10^5 <= nums[i] <= 10^5
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  /**
   * 依稀还记得貌似在很早之前做过这种类似的题目
   * 三指针的方式求解
   * l代表起始位置，相应的，m代表中间位置，r表示结尾位置
   * l = 0; m = l+1; r = len-1
   * 如何移动指针呢？
   * 我们先排序，对于nums排序，从小到大排序
   * 固定首尾 m在中间移动 找到了，就填充结果
   * 如果没找到呢？？
   */
  // 上述思路有问题，我们换个思路想，如果我们找的是两数之和呢，并且去重的

  /**
   * 首先排序 [-1,0,1,2,-1,-4]
   * 排序之后是 -4 -1 -1 0 1 2
   * 两个指针分别指向头尾 然后求和
   * 如果 sum > 0, 移动右指针
   * sum < 0 移动左指针
   * 如果找到和结果，记录一下，并去重
   */
  // 定义结果集
  const result = [];
  const len = nums.length;
  // 排序
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    // 剪枝处理
    if (nums[i] > 0) break;
    // 去重处理
    if (i > 0 && nums[i] === nums[i-1]) continue;
    // 定义指针
    let l = i + 1;
    let r = len - 1;
    // 寻找结果
    while (l < r) {
      if (nums[i] + nums[l] + nums[r] === 0) {
        result.push([nums[i], nums[l], nums[r]]);
        // 去重
        while (l < r && nums[l] === nums[l+1]) {
          l++;
        }
        while (l < r && nums[r] === nums[r-1]) {
          r--;
        }
        l++;
        r--;
      } else if (nums[i] + nums[l] + nums[r] > 0) {
        r--
      } else {
        l++;
      }
    }
  }
  // console.log(result);
  return result;
};
// @lc code=end
const nums = [-1,0,1,2,-1,-4];
threeSum(nums);

