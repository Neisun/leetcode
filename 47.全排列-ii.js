/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  // 先排个序吧
  nums.sort((a, b) => a - b);
  // 结果集
  const result = [];
  // 记录使用情况
  const used = [];
  // 深度优先搜索
  /**
   * 
   * @param {number[]} nums 
   * @param {number[]} path 
   */
  const dfs = (nums, path) => {
    // 收集结果，同时退出递归
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }
    // 遍历找寻结果
    for (let i = 0; i < nums.length; i++) {
      // 去重
      if (i > 0 && nums[i] === nums[i - 1] && used[i - 1]) continue;
      // 使用过 跳过
      if (used[i]) continue;
      path.push(nums[i]);
      // used.set(nums[i], true);
      used[i] = true;
      dfs(nums, path);
      path.pop();
      // used.set(nums[i], false);
      used[i] = false;
    }
  }
  
  dfs(nums, []);
  return result;
};
// @lc code=end

// 测试
// const nums = [1,1,2];
const nums = [1,2,3];
const result = permuteUnique(nums);
console.log(result);

