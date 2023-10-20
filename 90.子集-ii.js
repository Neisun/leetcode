/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  // 先排序
  nums.sort((a, b) => a - b);
  // 结果集
  const res = [];
  // 是否使用过记录
  const used = new Array(nums.length).fill(false);
  // 深度搜索
  const dfs = (nums, start, path) => {
    // 递归结束
    if (start > nums.length) return;
    res.push([...path]);
    for (let i = start; i < nums.length; i++) {
      // 去重的逻辑在于，如果当前nums[i]与前一个数nums[i - 1]一样，并且nums[i - 1]没被使用过
      // 简单来说，就是判断同一层的元素和前一个元素是否相同，并且前一个元素是否被使用过
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
      path.push(nums[i]);
      used[i] = true;
      dfs(nums, i + 1, path);
      path.pop();
      used[i] = false;
    }
  }
  dfs(nums, 0, []);
  return res;
};
// @lc code=end

// 测试
const nums = [1,2,2];
const res = subsetsWithDup(nums);
console.log(res);

