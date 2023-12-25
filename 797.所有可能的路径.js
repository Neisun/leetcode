/*
 * @lc app=leetcode.cn id=797 lang=javascript
 *
 * [797] 所有可能的路径
 *
 * https://leetcode.cn/problems/all-paths-from-source-to-target/description/
 *
 * algorithms
 * Medium (78.80%)
 * Likes:    451
 * Dislikes: 0
 * Total Accepted:    119.8K
 * Total Submissions: 152.1K
 * Testcase Example:  '[[1,2],[3],[3],[]]'
 *
 * 给你一个有 n 个节点的 有向无环图（DAG），请你找出所有从节点 0 到节点 n-1 的路径并输出（不要求按特定顺序）
 * 
 * graph[i] 是一个从节点 i 可以访问的所有节点的列表（即从节点 i 到节点 graph[i][j]存在一条有向边）。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入：graph = [[1,2],[3],[3],[]]
 * 输出：[[0,1,3],[0,2,3]]
 * 解释：有两条路径 0 -> 1 -> 3 和 0 -> 2 -> 3
 * 
 * 
 * 示例 2：
 * 
 * 
 * 
 * 
 * 输入：graph = [[4,3,1],[3,2,4],[3],[4],[]]
 * 输出：[[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == graph.length
 * 2 <= n <= 15
 * 0 <= graph[i][j] < n
 * graph[i][j] != i（即不存在自环）
 * graph[i] 中的所有元素 互不相同
 * 保证输入为 有向无环图（DAG）
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
  // 节点个数
  const n = graph.length;
  // 路径
  // const path = [];
  // 结果集
  const result = [];

  // 这是基本的遍历思路
  // // 遍历节点
  // const items1 = graph[0]; // 比如当前 i = 0 集合是 [1,2] 那就表示 0->1 0->2
  // path.push(0);
  // for (let j = 0; j < items1.length; j++) {
  //   path.push(items1[j]);
  //   const items2 = graph[j];
  //   for (let k = 0; k < items2.length; k++) {
  //     path.push(items2[k]);
  //     const items3 = graph[k];
  //   }
  // }

  // 需要一个函数递归处理这个逻辑
  const fn = (path, list) => {
    // 如果list为空说明走到最后了 并且节点下标得到最后了
    if (path[path.length-1] === n-1) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < list.length; i++) {
      path.push(list[i]);
      fn(path, graph[list[i]]);
      path.pop();
    }
  }
  
  fn([0], graph[0]);

  console.log(result);

  return result;
};
// @lc code=end
// const graph = [[1,2],[3],[3],[]];
// const graph = [[4,3,1],[3,2,4],[3],[4],[]];
const graph = [[2],[],[1]];

allPathsSourceTarget(graph);