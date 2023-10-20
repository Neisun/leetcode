/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

// 留个尾巴，剪枝操作？？
// 第一种情况的剪枝操作即 剩下的可选个数 要比 k个数组合中还剩几个要大 即 9 - i + 1 >= k - path.length; 换算一下 即 9 - (k - path.length) + 1 >= i
// 第二种情况，如果当前的数字已经大于sum了，就没必要再往下走了
var combinationSum3 = function(k, n) {
  // 结果集
  const result = [];
  // 每一组组合
  const path = [];
  // 回溯算法
  const backtracing = (k, n, start, sum) => {
    // if (sum < 0) return; // 第二个剪枝操作
    if (sum === 0 && path.length === k) {
      result.push(path.slice());
      return;
    }
    for (let i = start; i <= 9; i++) { // 第一个剪枝处理
      if (sum < i) return; // 第二个剪枝操作
      path.push(i);
      backtracing(k, n, i + 1, sum - i);
      path.pop();
    }
  }
  
  backtracing(k, n, 1, n);
  return result;
};
// @lc code=end

