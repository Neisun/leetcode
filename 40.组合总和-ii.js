/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// [1,1,2,5,6,7,10]
// 因为实在没想出好的方式去去重，就用了最笨的map方式去记录访问的元素
// 结果也猜了个大概，不出意料的果然超时了
// var combinationSum2 = function(candidates, target) {
//   // 先排序
//   candidates.sort((a, b) => a - b);
//   // 结果集
//   const result = [];
//   // 记录是否已存在解
//   const map = new Map();
//   // 回溯求解函数
//   const backtracing = (candidates, target, start, path) => {
//     // 剪枝
//     if (target < 0) return;
//     // 收集结果
//     const pathFlag = path.join('');
//     if (target === 0 && !map.has(pathFlag)) {
//       map.set(pathFlag, true);
//       result.push([...path]);
//       return;
//     }
//     for (let i = start; i < candidates.length; i++) {
//       path.push(candidates[i]);
//       backtracing(candidates, target - candidates[i], i + 1, path);
//       path.pop();
//     }
//   }
//   backtracing(candidates, target, 0, []);
//   return result;
// };

var combinationSum2 = function(candidates, target) {
  // 先排序 为了找到相邻的相同元素
  candidates.sort((a, b) => a - b);
  // 结果集
  const result = [];
  // 回溯求解函数
  const backtracing = (candidates, target, start, path, used) => {
    if (target < 0) return;
    // 得到解，加入结果集
    if (target === 0) {
      result.push([...path]);
    }

    // 单层逻辑
    // 去重的逻辑有点难理解，我们拿 [1,1,2] target=3来想
    // 去重的是同一层的，而不是同一树枝的
    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] === candidates[i - 1] && !used[i - 1]) continue;
      path.push(candidates[i]);
      used[i] = true;
      backtracing(candidates, target - candidates[i], i + 1, path, used);
      path.pop();
      used[i] = false;
    }
  }

  backtracing(candidates, target, 0, [], []);
  return result;
};
// @lc code=end

