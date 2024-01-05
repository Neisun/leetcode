/*
 * @lc app=leetcode.cn id=827 lang=javascript
 *
 * [827] 最大人工岛
 *
 * https://leetcode.cn/problems/making-a-large-island/description/
 *
 * algorithms
 * Hard (47.12%)
 * Likes:    389
 * Dislikes: 0
 * Total Accepted:    45.9K
 * Total Submissions: 97.3K
 * Testcase Example:  '[[1,0],[0,1]]'
 *
 * 给你一个大小为 n x n 二进制矩阵 grid 。最多 只能将一格 0 变成 1 。
 * 
 * 返回执行此操作后，grid 中最大的岛屿面积是多少？
 * 
 * 岛屿 由一组上、下、左、右四个方向相连的 1 形成。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: grid = [[1, 0], [0, 1]]
 * 输出: 3
 * 解释: 将一格0变成1，最终连通两个小岛得到面积为 3 的岛屿。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: grid = [[1, 1], [1, 0]]
 * 输出: 4
 * 解释: 将一格0变成1，岛屿的面积扩大为 4。
 * 
 * 示例 3:
 * 
 * 
 * 输入: grid = [[1, 1], [1, 1]]
 * 输出: 4
 * 解释: 没有0可以让我们变成1，面积依然为 4。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == grid.length
 * n == grid[i].length
 * 1 
 * grid[i][j] 为 0 或 1
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
  /**
   * 这是我一开始能想到的暴力搜索方式，但是超时了
   */
  // // n*n的正方形矩阵
  // // 获取行与列
  // const n = grid.length;
  // // 记录最大的面积
  // let maxLandArea = 0;
  // // 记录总和
  // let sumLandArea = 0;
  // // 四个方向
  // const directions = [[0,-1],[0,1],[-1,0],[1,0]];
  // // 记录访问过
  // let visited = new Array(n).fill().map(_ => new Array(n).fill(false));

  // // dfs
  // const dfs = (x, y) => {
  //   for (const [dx, dy] of directions) {
  //     // 下个节点的坐标
  //     const nextX = x + dx;
  //     const nextY = y + dy;
  //     // 处理 越界
  //     if (nextX < 0 || nextX >= n || nextY < 0 || nextY >= n) continue;
  //     // 处理 访问过以及非陆地
  //     if (visited[nextX][nextY] || !grid[nextX][nextY]) continue;
  //     // 符合条件的情况
  //     visited[nextX][nextY] = true;
  //     sumLandArea += 1
  //     dfs(nextX, nextY);
  //   }
  // }

  // // 遍历网格
  // for (let x = 0; x < n; x++) {
  //   for (let y = 0; y < n; y++) {
  //     // 如果是陆地 按照之前逻辑正常走
  //     if (grid[x][y]) {
  //       if (!visited[x][y]) {
  //         visited[x][y] = true;
  //         sumLandArea = 1;
  //         dfs(x, y);
  //         maxLandArea = Math.max(maxLandArea, sumLandArea);
  //       }
  //     } else { // 不是陆地的情况
  //       // 需要先改成陆地，然后记得回溯改回去 visited也要重置，重新计算
  //       visited = new Array(n).fill().map(_ => new Array(n).fill(false));
  //       if (!visited[x][y]) {
  //         visited[x][y] = true;
  //         grid[x][y] = 1;
  //         sumLandArea = 1;
  //         dfs(x, y);
  //         grid[x][y] = 0;
  //         maxLandArea = Math.max(maxLandArea, sumLandArea);
  //       }
  //     }
  //   }
  // }

  // console.log(maxLandArea);

  // return maxLandArea;

  /**
   * 这是看过题解之后的方案
   * 怎么求解呢？
   * 1. 第一次遍历：给每片连成陆地的区域，打上标记，并且计算出区域的面积，以map的形式记录下来，{mark: count}
   * 2. 第二次遍历: 找0的点，然后找到相邻的连成片的区域，可以计算出加上0这个点的最大面积
   */

  // ** 第一步 第一次遍历
  // 获取行与列
  const n = grid.length;
  // 记录访问过
  const visited = new Array(n).fill().map(_ => new Array(n).fill(false));
  // 标记
  let mark = 2; // mark从2开始因为，原网格里有了1和0
  // 记录标识
  const markMap = new Map();
  // 记录每片陆地区域的总数量
  let sumLandArea = 0;
  // 移动的四个方向 上下左右
  const directions = [[0,-1],[0,1],[-1,0],[1,0]];
  // 判是否全陆地
  let isAllLand = true

  // dfs函数
  const dfs = (x, y) => {
    if (visited[x][y] || !grid[x][y]) return;
    visited[x][y] = true;
    sumLandArea += 1;
    grid[x][y] = mark;
    // 遍历四个方向
    for (const [dx, dy] of directions) {
      const nextX = x + dx;
      const nextY = y + dy;
      // 越界处理
      if (nextX < 0 || nextX >= n || nextY < 0 || nextY >= n) continue;
      dfs(nextX, nextY);
    }
  }

  // 第一次遍历网格
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      if (grid[x][y] === 0) isAllLand = false;
      if (!visited[x][y] && grid[x][y] === 1) {
        sumLandArea = 0;
        dfs(x, y);
        markMap.set(mark, sumLandArea);
        mark += 1;
      }
    }
  }

  if (isAllLand) return n * n;

  // console.log(grid)

  // console.log(markMap)

  // ** 第二步
  const visitedMap = new Map();
  let sum = 0;
  // 结果集
  let result = 0;
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      visitedMap.clear();
      sum = 1;
      // 找0的元素
      if (grid[x][y] === 0) {
        for (const [dx, dy] of directions) {
          const nextX = x + dx;
          const nextY = y + dy;
          // 处理越界
          if (nextX < 0 || nextX >= n || nextY < 0 || nextY >= n) continue;
          // 排除访问过的
          if (visitedMap.has(grid[nextX][nextY])) continue;
          // console.log(markMap.get(grid[nextX][nextY]), grid[nextX][nextY])
          sum += markMap.get(grid[nextX][nextY]) || 0;
          visitedMap.set(grid[nextX][nextY], true);
        }
      }
      result = Math.max(result, sum);
    }
  }

  // console.log(result)

  return result;
};
// @lc code=end

// const grid = [
//   [1, 0], 
//   [0, 1]
// ]

// const grid = [
//   [1, 1], 
//   [1, 0]
// ]


// const grid = [
//   [1, 1], 
//   [1, 1]
// ]

const grid = [
  [1, 1, 0, 0, 0, 1, 1, 1],
  [1, 1, 1, 0, 0, 1, 1, 0],
  [1, 1, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 1, 0, 0],
  [0, 1, 1, 0, 1, 1, 1, 0],
  [1, 1, 1, 0, 1, 1, 0, 0],
  [0, 1, 1, 1, 0, 0, 1, 1],
  [0, 1, 0, 1, 0, 1, 1, 1]
]

largestIsland(grid)
