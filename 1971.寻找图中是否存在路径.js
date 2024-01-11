/*
 * @lc app=leetcode.cn id=1971 lang=javascript
 *
 * [1971] 寻找图中是否存在路径
 *
 * https://leetcode.cn/problems/find-if-path-exists-in-graph/description/
 *
 * algorithms
 * Easy (53.72%)
 * Likes:    173
 * Dislikes: 0
 * Total Accepted:    36.2K
 * Total Submissions: 67.7K
 * Testcase Example:  '3\n[[0,1],[1,2],[2,0]]\n0\n2'
 *
 * 有一个具有 n 个顶点的 双向 图，其中每个顶点标记从 0 到 n - 1（包含 0 和 n - 1）。图中的边用一个二维整数数组 edges
 * 表示，其中 edges[i] = [ui, vi] 表示顶点 ui 和顶点 vi 之间的双向边。 每个顶点对由 最多一条
 * 边连接，并且没有顶点存在与自身相连的边。
 * 
 * 请你确定是否存在从顶点 source 开始，到顶点 destination 结束的 有效路径 。
 * 
 * 给你数组 edges 和整数 n、source 和 destination，如果从 source 到 destination 存在 有效路径 ，则返回
 * true，否则返回 false 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
 * 输出：true
 * 解释：存在由顶点 0 到顶点 2 的路径:
 * - 0 → 1 → 2 
 * - 0 → 2
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination =
 * 5
 * 输出：false
 * 解释：不存在由顶点 0 到顶点 5 的路径.
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= n <= 2 * 10^5
 * 0 <= edges.length <= 2 * 10^5
 * edges[i].length == 2
 * 0 <= ui, vi <= n - 1
 * ui != vi
 * 0 <= source, destination <= n - 1
 * 不存在重复边
 * 不存在指向顶点自身的边
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
  // // 由于是双向图，所以构造一下数据结构，这种数据结构什么样呢？
  // // 是这样的 对于[0,1]的节点，表示 0<->1 所以我们使用一个二维数组 [[]] 以如下的方式构造
  // const adj = new Array(n).fill().map(_ => new Array());
  // for (const [x, y] of edges) {
  //   adj[x].push(y);
  //   adj[y].push(x);
  // }

  // const visited = new Array(n).fill(false);

  // const dfs = (source, destination, adj, visited) => {
  //   if (source === destination) return true;
  //   visited[source] = true;
  //   for (const nextSource of adj[source]) {
  //     if (!visited[nextSource] && dfs(nextSource, destination, adj, visited)) return true
  //   }
  //   return false;
  // }
  // return dfs(source, destination, adj, visited);

  /**
   * ?? 使用并查集的方式
   * 并查集解决了什么问题，主要解决联通性问题，即从过子节点找祖先节点，看是否有共同的祖先
   * 1. 创建集合，一般来说是是一个数组
   * 2. 初始化集合
   * 3. 连接边，即加入集合
   * 4. 找祖先元素
   */
  if (source === destination) return true;
  // 1. 创建集合
  const nodeList = new Array(n);


  const init = (n) => {
    // 初始化
    for (let i = 0; i < n; i++) {
      nodeList[i] = i;
    }
  }

  // 找祖先
  const find = (x) => {
    // 自身本身就是根
    if (nodeList[x] === x) return x;
    // 否则递归调用，持续往下找
    return find(nodeList[x]);
  }

  // 连接节点
  const connect = (x, y) => {
    const parentX = find(x);
    const parentY = find(y)
    if (parentX !== parentY) {
      nodeList[parentX] = parentY;
    }
  }

  // 2. 初始化
  init(n);
  // 3. 根据题目中给出的条件，连接节点
  for (const [x, y] of edges) {
    connect(x, y);
  }
  // console.log(nodeList);
  // 4. 根据给出的 source 和 destination来分别找祖先，看祖先是否相等
  return find(source) === find(destination);
};
// @lc code=end

// const n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2;
// const n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5
const n = 10, edges = [[0,7],[0,8],[6,1],[2,0],[0,4],[5,8],[4,7],[1,3],[3,5],[6,5]], source = 7, destination = 5;
const r = validPath(n, edges, source, destination);
console.log(r)

