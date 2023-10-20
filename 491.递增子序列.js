/*
 * @lc app=leetcode.cn id=491 lang=javascript
 *
 * [491] 递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  // 毫无疑问的先排个序
  // nums.sort((a, b) => a - b);
  // 结果集
  const result = [];
  // 记录是否使用过
  // const used = new Array(nums.length).fill(false);
  // const used = new Map();
  /**
   * 
   * @param {number[]} nums 原始数组
   * @param {number} start 下一层开始的位置
   * @param {number[]} path 
   */
  const dfs = (nums, start, path) => {
    // 递归结束
    if (start > nums.length) return;
    // 收集结果
    if (path.length >= 2) {
      result.push([...path]);
    }
    // 每一层使用过的定义在深度优先搜索里边
    const used = new Map();
    // 本层递归逻辑
    for (let i = start; i < nums.length; i++) {
      // 要保持递增 所以与path最后一个元素比较大小
      if (path.length && path[path.length - 1] > nums[i]) continue;
      // 去重 不能这么去重了，因为原始数组不能排序，所以使用map记录一下
      if (used.has(nums[i])) continue;
      path.push(nums[i]);
      // used[i] = true;
      used.set(nums[i], true);
      dfs(nums, i + 1, path);
      path.pop();
      // used[i] = false;
      // used.delete(nums[i]);
    }
  }
  dfs(nums, 0, []);
  return result;
};

// @lc code=end

// 测试
// const nums = [4,6,7,7];
// const nums = [4,4,3,2,1];
const nums = [4, 7, 6, 7];
const result = findSubsequences(nums);
console.log(result)

