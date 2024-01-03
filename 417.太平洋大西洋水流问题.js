/*
 * @lc app=leetcode.cn id=417 lang=javascript
 *
 * [417] 太平洋大西洋水流问题
 *
 * https://leetcode.cn/problems/pacific-atlantic-water-flow/description/
 *
 * algorithms
 * Medium (56.20%)
 * Likes:    657
 * Dislikes: 0
 * Total Accepted:    91.8K
 * Total Submissions: 163.1K
 * Testcase Example:  '[[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]'
 *
 * 有一个 m × n 的矩形岛屿，与 太平洋 和 大西洋 相邻。 “太平洋” 处于大陆的左边界和上边界，而 “大西洋” 处于大陆的右边界和下边界。
 * 
 * 这个岛被分割成一个由若干方形单元格组成的网格。给定一个 m x n 的整数矩阵 heights ， heights[r][c] 表示坐标 (r, c)
 * 上单元格 高于海平面的高度 。
 * 
 * 岛上雨水较多，如果相邻单元格的高度 小于或等于 当前单元格的高度，雨水可以直接向北、南、东、西流向相邻单元格。水可以从海洋附近的任何单元格流入海洋。
 * 
 * 返回网格坐标 result 的 2D 列表 ，其中 result[i] = [ri, ci] 表示雨水从单元格 (ri, ci) 流动
 * 既可流向太平洋也可流向大西洋 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
 * 输出: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入: heights = [[2,1],[1,2]]
 * 输出: [[0,0],[0,1],[1,0],[1,1]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == heights.length
 * n == heights[r].length
 * 1 <= m, n <= 200
 * 0 <= heights[r][c] <= 10^5
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
  // 获取行与列
  const m = heights.length;
  const n = heights[0].length;

  // 记录太平洋与大西洋访问过的节点
  const pacificVisited = new Array(m).fill().map(_ => new Array(n).fill(false));
  const atlanticVisited = new Array(m).fill().map(_ => new Array(n).fill(false));

  // 四个方向
  const directions = [[0,-1],[0,1],[-1,0],[1,0]];

  // 结果集
  const result = [];

  // 深度优先搜索
  const dfs = (x, y, visited) => {
    // 访问过
    if (visited[x][y]) return;
    visited[x][y] = true;
    
    // 遍历四个方向
    for (const [dx, dy] of directions) {
      const nextX = x + dx;
      const nextY = y + dy;
      // 越界处理
      if (nextX < 0 || nextX >= m || nextY < 0 || nextY >= n) continue;
      // 不符合条件的点
      if (heights[x][y] > heights[nextX][nextY]) continue;
      dfs(nextX, nextY, visited);
    }
  }

  // 从太平洋上边和大西洋下边出发，即从地图的上和下出发
  for (let y = 0; y < n; y++) {
    dfs(0, y, pacificVisited);
    dfs(m-1, y, atlanticVisited);
  }

  // 从太平洋的左边和大西洋的右边出发，即从地图的左和右出发
  for (let x = 0; x < m; x++) {
    dfs(x, 0, pacificVisited);
    dfs(x, n-1, atlanticVisited);
  }

  // console.log(pacificVisited);
  // console.log(atlanticVisited);

  for (let x = 0; x < m; x++) {
    for (let y = 0; y < n; y++) {
      if (pacificVisited[x][y] && atlanticVisited[x][y]) {
        result.push([x,y]);
      }
    }
  }

  return result;
};
// @lc code=end

const heights = [
  [1,2,2,3,5],
  [3,2,3,4,4],
  [2,4,5,3,1],
  [6,7,1,4,5],
  [5,1,1,2,4]
]

pacificAtlantic(heights);