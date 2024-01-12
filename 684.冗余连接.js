/*
 * @lc app=leetcode.cn id=684 lang=javascript
 *
 * [684] 冗余连接
 *
 * https://leetcode.cn/problems/redundant-connection/description/
 *
 * algorithms
 * Medium (67.55%)
 * Likes:    614
 * Dislikes: 0
 * Total Accepted:    107.7K
 * Total Submissions: 159.4K
 * Testcase Example:  '[[1,2],[1,3],[2,3]]'
 *
 * 树可以看成是一个连通且 无环 的 无向 图。
 * 
 * 给定往一棵 n 个节点 (节点值 1～n) 的树中添加一条边后的图。添加的边的两个顶点包含在 1 到 n
 * 中间，且这条附加的边不属于树中已存在的边。图的信息记录于长度为 n 的二维数组 edges ，edges[i] = [ai, bi] 表示图中在 ai
 * 和 bi 之间存在一条边。
 * 
 * 请找出一条可以删去的边，删除后可使得剩余部分是一个有着 n 个节点的树。如果有多个答案，则返回数组 edges 中最后出现的那个。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入: edges = [[1,2], [1,3], [2,3]]
 * 输出: [2,3]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 
 * 
 * 输入: edges = [[1,2], [2,3], [3,4], [1,4], [1,5]]
 * 输出: [1,4]
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * n == edges.length
 * 3 <= n <= 1000
 * edges[i].length == 2
 * 1 <= ai < bi <= edges.length
 * ai != bi
 * edges 中无重复元素
 * 给定的图是连通的 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
  /**
   * 这道题什么思路？？
   * 找出成环的，然后删一条边就可以嘞，而且要删掉的边是数组中最后的部分
   * 当看到联通性的时候，要想到往并查集上靠
   */

  const n = edges.length;
  const parent = new Array(n+1).fill().map((v, i) => i);
  // find
  const find = (x) => {
    if (x === parent[x]) return x;
    return find(parent[x]);
  }
  // union 
  const union = (x, y) => {
    // 看两个点是否有共同的根，如果有的话，说明他们已经连接过
    const parentX = find(x);
    const parentY = find(y);
    // 如果没有的话，将他们连接
    if (parentX !== parentY) {
      parent[parentX] = parentY;
    }
  }
  // isConnect 判断两个点是否已经连接
  const isConnect = (x, y) => {
    return find(x) === find(y);
  }

  // 从头开始遍历
  for (const [x, y] of edges) {
    if (isConnect(x, y)) {
      return [x, y];
    } else {
      union(x, y);
    }
  }

  return [-1, -1];
};
// @lc code=end

const edges = [[1,2], [1,3], [2,3]]

const r = findRedundantConnection(edges);
console.log(r);
