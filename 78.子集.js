/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var subsets = function(nums) {
//   // 结果集
//   const res = [];
//   // 深度搜索找解
//   /**
//    * 
//    * @param {*} nums 原数组
//    * @param {*} start 遍历起始位置
//    * @param {*} size 每个子集的长度
//    * @param {*} path 路径结果集
//    */
//   const dfs = (nums, start, size, path = []) => {
//     if (size > nums.length || start > nums.length) return;
//     // 结果符合要求
//     if (path.length === size) {
//       res.push([...path]);
//     }
    
//     for (let i = start; i < nums.length; i++) {
//       path.push(nums[i]);
//       dfs(nums, i + 1, size + 1, path);
//       path.pop();
//     }
//   }
//   dfs(nums, 0, 0, []);
//   return res;
// };

var subsets = function(nums) {
  const res = [];
  /**
   * 
   * @param {*} nums 目标数组
   * @param {*} start 本轮开始的下标
   * @param {*} path 结果
   * @returns 
   */
  const dfs = (nums, start, path) => {
    // 递归出口
    if (start > nums.length) return;
    res.push([...path]);
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      dfs(nums, i + 1, path);
      path.pop();
    }
  }
  dfs(nums, 0, []);
  return res;
};
// @lc code=end

// 测试
const nums = [1,2,3];
const r = subsets(nums);
console.log(r);

