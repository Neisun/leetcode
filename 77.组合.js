/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
// [1,2,3,4] 2
// 找到1 剩下的从2 3 4里找
// 伪代码大体上是两层for循环
// for (let i = 1; i <= n; i++) {
//   for (let j = i + 1; j <= n; j++) {
//     // ...
//   }
// }
// 但是有如果要从100里找50个，这个for循环可就没办法写了
// 于是得用一种方式替代这种for循环
// 如果用递归替代for循环 我们写下如下的伪代码
var combine = function(n, k) {
  const result = [];
  const path = [];

  // 伪代码
  // 这样的话，那就可以递归无限层了
  // 但是总得有个结束的时候，递归没有结束条件，栈必然会溢出的
  // 那么结束条件是什么呢，就是收集到满足k个元素，递归结束
  // 留个尾巴，有一个剪枝优化操作？？？
  // 可选的数字个数要 >= 剩余的数字
  // n - i + 1 >= k - path.length
  // 即 i <= n - (k - path.length) + 1
  const backtracing = (n, k, start) => {
    // 于是我们写下递归结束的条件
    if (path.length === k) {
      // 需要注意的是，数组是引用数组类型，需要copy一份
      const _path = path.slice();
      result.push(_path);
      return;
    }
    // 加上剪枝操作，来优化循环
    for (let i = start; i <= n - (k - path.length) + 1; i++) {
      path.push(i);
      backtracing(n, k, i + 1);
      // 回退回去
      path.pop();
    }
  }
  backtracing(n, k, 1);
  return result;
};
// @lc code=end

