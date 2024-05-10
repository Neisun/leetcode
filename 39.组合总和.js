/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// 这种写法虽然通过了，但是时间上和空间上都很拖后腿，因为写法的问题，导致需要额外的空间处理去重
// var combinationSum = function(candidates, target) {
//   // 先对candidates排序 从小到大排序
//   candidates.sort((a, b) => a - b);
//   // 结果集
//   const result = [];
//   // 需要一个额外的集合用来记录结果集中是不是出现了重复的数字
//   const map = new Map();
//   // 回溯求解函数
//   const backtracing = (candidates, target, path) => {
//     // 收集结果
//     if (target === 0) {
//       const pathFlag = [...path].sort((a,b) => a - b).join('');
//       if (!map.has(pathFlag)) {
//         map.set(pathFlag, true);
//         result.push([...path]);
//       }
//       return;
//     }

//     for (let i = 0; i < candidates.length; i++) {
//       // 可以进行一步剪枝操作
//       if (target < candidates[i]) return;
//       path.push(candidates[i]);
//       backtracing(candidates, target - candidates[i], path);
//       // 回溯处理，将上一个结果去掉
//       path.pop();
//     }
//   }
//   backtracing(candidates, target, []);
//   return result;
// };
// 好的写法，这道题其实与之前的求组合的方式如出一辙，只是它可以重复利用元素
// var combinationSum = function(candidates, target) {
//   // 结果集
//   const result = [];
//   // 回溯求解函数
//   const backtracing = (candidates, target, path, start) => {
//     if (target < 0) return; // 剪枝操作
//     if (target === 0) {
//       result.push([...path]);
//       return;
//     }
//     for (let i = start; i < candidates.length; i++) {
//       // if (target < candidates[i]) continue; // 剪枝操作
//       path.push(candidates[i]);
//       backtracing(candidates, target - candidates[i], path, i); // 重点，取重复值 i就不用+1
//       path.pop();
//     }
//   }
//   backtracing(candidates, target, [], 0);
//   return result;
// };

var combinationSum = function(candidates, target) {
  /**
   * 2024-05-10 再刷
   * 这个图很清晰的说明了遍历的代码思路
   * https://code-thinking-1253855093.file.myqcloud.com/pics/20201223170730367.png
   */
  // 结果集
  const result = [];
  // dfs函数
  const dfs = (start, path, sum) => {
    if (sum === target) {
      result.push([...path]);
      // 递归结束
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      const num = candidates[i];
      if (sum + num <= target) {
        path.push(num);
        dfs(i, path, sum + num);
        path.pop();
      }
    }
  }
  dfs(0, [], 0);
  return result;
};
// @lc code=end

