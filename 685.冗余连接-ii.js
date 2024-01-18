/*
 * @lc app=leetcode.cn id=685 lang=javascript
 *
 * [685] 冗余连接 II
 *
 * https://leetcode.cn/problems/redundant-connection-ii/description/
 *
 * algorithms
 * Hard (42.14%)
 * Likes:    396
 * Dislikes: 0
 * Total Accepted:    32.8K
 * Total Submissions: 77.7K
 * Testcase Example:  '[[1,2],[1,3],[2,3]]'
 *
 * 在本问题中，有根树指满足以下条件的 有向
 * 图。该树只有一个根节点，所有其他节点都是该根节点的后继。该树除了根节点之外的每一个节点都有且只有一个父节点，而根节点没有父节点。
 * 
 * 输入一个有向图，该图由一个有着 n 个节点（节点值不重复，从 1 到 n）的树及一条附加的有向边构成。附加的边包含在 1 到 n
 * 中的两个不同顶点间，这条附加的边不属于树中已存在的边。
 * 
 * 结果图是一个以边组成的二维数组 edges 。 每个元素是一对 [ui, vi]，用以表示 有向 图中连接顶点 ui 和顶点 vi 的边，其中 ui 是
 * vi 的一个父节点。
 * 
 * 返回一条能删除的边，使得剩下的图是有 n 个节点的有根树。若有多个答案，返回最后出现在给定二维数组的答案。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：edges = [[1,2],[1,3],[2,3]]
 * 输出：[2,3]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：edges = [[1,2],[2,3],[3,4],[4,1],[1,5]]
 * 输出：[4,1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == edges.length
 * 3 
 * edges[i].length == 2
 * 1 i, vi 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantDirectedConnection = function(edges) {
  // 获取节点个数
  const n = edges.length;
  // 集合
  const parent = new Array(n+1);

  // 初始化
  const init = () => {
    for (let i = 0; i < n+1; i++) {
      parent[i] = i;
    }
  }

  // 找节点
  const find = (x) => {
    if (parent[x] === x) return x;
    return find(parent[x]);
  }

  // 连接
  const union = (x, y) => {
    const parentX = find(x);
    const parentY = find(y);
    if (parentX !== parentY) {
      parent[parentY] = parentX;
    }
  }

  // 判断是否已经连接
  const isConnect = (x, y) => {
    return find(x) === find(y);
  }

  // 删除某条边之后，是否仍然是一棵树
  const isTreeAfterDeleteEdge = (deleteEdge) => {
    init();
    for (let i = 0; i < n; i++) {
      if (deleteEdge === i) continue;
      if (isConnect(edges[i][0], edges[i][1])) return false;
      union(edges[i][0], edges[i][1]);
    }
    return true;
  }

  // 没有入度为2的点，看是否成环
  const getRemoveEdge = () => {
    init();
    for (let i = 0; i < n; i++) {
      if (isConnect(edges[i][0], edges[i][1])) {
        return edges[i];
      }
      union(edges[i][0], edges[i][1]);
    }
    return [-1,-1];
  }

  // 统计入度
  const inDegree = new Array(n+1).fill(0);
  for (let i = 0; i < n; i++) {
    inDegree[edges[i][1]]++;
  }
  // 找到入度为2的边
  const deleteEdges = [];
  for (let i = n - 1; i >= 0; i--) {
    if (inDegree[edges[i][1]] === 2) {
      deleteEdges.push(i);
    }
  }

  if (deleteEdges.length) {
    if (isTreeAfterDeleteEdge(deleteEdges[0])) {
      return edges[deleteEdges[0]]
    } else {
      return edges[deleteEdges[1]];
    }
  }

  return getRemoveEdge();
};
// @lc code=end

