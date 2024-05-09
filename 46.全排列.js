/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  // // 结果集
  // const result = [];
  // // 记录元素使用的情况
  // const used = new Map();
  // // 深度优先搜索
  // /**
  //  * 
  //  * @param {number[]} nums 目标数组 
  //  * @param {number[]} path 路径
  //  */
  // const dfs = (nums, path) => {
  //   // 收集结果的同时也是递归的终止条件
  //   if (path.length === nums.length) {
  //     result.push([...path]);
  //     return;
  //   }
  //   // 遍历
  //   // 这次需要从头遍历，为了避免重复使用元素，我们需要使用一个map记录元素的使用情况
  //   // 与路径保持一致，需要在回溯的时候更改元素的使用状态
  //   for (let i = 0; i < nums.length; i++) {
  //     if (used.get(nums[i])) continue;
  //     path.push(nums[i]);
  //     used.set(nums[i], true);
  //     dfs(nums, path);
  //     path.pop();
  //     used.set(nums[i], false);
  //   }
  // }

  // dfs(nums, []);
  // return result;

  /**
   * 2024-05-09 再刷
   * 全排列
   * 1. 给出的数字必须全部用完
   * 2. 有顺序要求了
   */
  // 记录元素被使用
  const used = new Set();
  // 结果集
  const result = [];
  // dfs函数
  const dfs = (path) => {
    // 找到结果
    if (path.length === nums.length) {
      result.push([...path]);
      // 递归结束
      return;
    }
    for (const num of nums) {
      if (!used.has(num)) {
        path.push(num);
        used.add(num);
        dfs(path);
        // 回溯
        path.pop();
        used.delete(num);
      }
    }
  }
  dfs([]);
  return result;
};
// @lc code=end

// 测试
const nums = [1,2,3]
const result = permute(nums);
console.log(result);


