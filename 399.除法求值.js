/*
 * @lc app=leetcode.cn id=399 lang=javascript
 *
 * [399] 除法求值
 *
 * https://leetcode.cn/problems/evaluate-division/description/
 *
 * algorithms
 * Medium (59.00%)
 * Likes:    1088
 * Dislikes: 0
 * Total Accepted:    95.7K
 * Total Submissions: 163.3K
 * Testcase Example:  '[["a","b"],["b","c"]]\n' +
  '[2.0,3.0]\n' +
  '[["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]'
 *
 * 给你一个变量对数组 equations 和一个实数值数组 values 作为已知条件，其中 equations[i] = [Ai, Bi] 和
 * values[i] 共同表示等式 Ai / Bi = values[i] 。每个 Ai 或 Bi 是一个表示单个变量的字符串。
 * 
 * 另有一些以数组 queries 表示的问题，其中 queries[j] = [Cj, Dj] 表示第 j 个问题，请你根据已知条件找出 Cj / Dj
 * = ? 的结果作为答案。
 * 
 * 返回 所有问题的答案 。如果存在某个无法确定的答案，则用 -1.0 替代这个答案。如果问题中出现了给定的已知条件中没有出现的字符串，也需要用 -1.0
 * 替代这个答案。
 * 
 * 注意：输入总是有效的。你可以假设除法运算中不会出现除数为 0 的情况，且不存在任何矛盾的结果。
 * 
 * 注意：未在等式列表中出现的变量是未定义的，因此无法确定它们的答案。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries =
 * [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
 * 输出：[6.00000,0.50000,-1.00000,1.00000,-1.00000]
 * 解释：
 * 条件：a / b = 2.0, b / c = 3.0
 * 问题：a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ?
 * 结果：[6.0, 0.5, -1.0, 1.0, -1.0 ]
 * 注意：x 是未定义的 => -1.0
 * 
 * 示例 2：
 * 
 * 
 * 输入：equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0],
 * queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
 * 输出：[3.75000,0.40000,5.00000,0.20000]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：equations = [["a","b"]], values = [0.5], queries =
 * [["a","b"],["b","a"],["a","c"],["x","y"]]
 * 输出：[0.50000,2.00000,-1.00000,-1.00000]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= equations.length <= 20
 * equations[i].length == 2
 * 1 <= Ai.length, Bi.length <= 5
 * values.length == equations.length
 * 0.0 < values[i] <= 20.0
 * 1 <= queries.length <= 20
 * queries[i].length == 2
 * 1 <= Cj.length, Dj.length <= 5
 * Ai, Bi, Cj, Dj 由小写英文字母与数字组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
  /**
   * 这个题挺费劲，很难想
   * 1. 根据给出的equations构造图，图使用什么数据结构、这是一个什么图？
   * 有向图，图使用map数据结构，key为每个节点，值为[下个节点，对应的值]
   * 2. 根据给出的queries中[start, end]来递归的从构造的图中寻找答案
   */

  // 记录结果
  const result = [];

  // 1. 构造图
  const buildGraph = (equations, values) => {
    const graph = new Map();
    const len = equations.length;
    // 构造图
    for (let i = 0; i < len; i++) {
      const [a, b] = equations[i];
      const val = values[i];
      if (!graph.has(a)) graph.set(a, []);
      if (!graph.has(b)) graph.set(b, []);
      graph.get(a).push([b, val]);
      graph.get(b).push([a, 1/val]);
    }

    return graph;
  }

  const graph = buildGraph(equations, values);


  // 深度搜索
  /**
   * 
   * @param {string} start 起始点
   * @param {string} end 终止点
   * @param {Set} visited 记录是否访问过，避免走入死循环
   * @param {number} result 结果
   * @param {Map} graph 图
   */
  const dfs = (start, end, visited, result, graph) => {
    // 如果该点不存在，返回-1
    if (!graph.has(start)) return -1;
    if (start === end) return result;
    visited.add(start);
    for (const [next, val] of graph.get(start)) {
      if (!visited.has(next)) {
        const r = dfs(next, end, visited, result * val, graph);
        if (r !== -1) return r;
      }
    }
    return -1;
  }


  // 2. 遍历queries，根据起点和终点，寻找答案
  for (const [start, end] of queries) {
    const val = dfs(start, end, new Set(), 1, graph);
    result.push(val);
  }


  return result;
};
// @lc code=end

