/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 *
 * https://leetcode.cn/problems/surrounded-regions/description/
 *
 * algorithms
 * Medium (46.27%)
 * Likes:    1069
 * Dislikes: 0
 * Total Accepted:    255.7K
 * Total Submissions: 552.1K
 * Testcase Example:  '[["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]'
 *
 * 给你一个 m x n 的矩阵 board ，由若干字符 'X' 和 'O' ，找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X'
 * 填充。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：board =
 * [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
 * 输出：[["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
 * 解释：被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。 任何不在边界上，或不与边界上的 'O' 相连的 'O'
 * 最终都会被填充为 'X'。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：board = [["X"]]
 * 输出：[["X"]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == board.length
 * n == board[i].length
 * 1 
 * board[i][j] 为 'X' 或 'O'
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  // 以下是错误思路，这个题的描述太差，果然是写代码的，表述能力都堪忧
  // 获取行与列
  // const m = board.length;
  // const n = board[0].length;
  // // 四个方向 上下左右 [x,y]
  // const directions = [[0,-1],[0,1],[-1,0],[1,0]];

  // // dfs
  // const dfs = (x, y) => {
  //   for (const [dx, dy] of directions) {
  //     // 下个节点的坐标
  //     const nextX = x + dx;
  //     const nextY = y + dy;
  //     // console.log(nextX, nextY);
  //     // 越界处理
  //     if (nextX < 0 || nextX >= m || nextY < 0 || nextY >= n) continue;
  //     // 非O处理
  //     if (board[nextX][nextX] === "X") continue;
  //     // 在边界上的O不处理
  //     if (nextX === 0 || nextX === m-1 || nextY === 0 || nextY === n-1) continue;
  //     // 其他情况
  //     board[nextX][nextY] = "X";
  //     dfs(nextX, nextY);
  //   }
  // }

  // // 遍历
  // for (let x = 1; x < m-1; x++) {
  //   for (let y = 1; y < n-1; y++) {
  //     if (board[x][y] === "O") {
  //       board[x][y] = "X";
  //       dfs(x, y);
  //     }
  //   }
  // }

  // 题目描述
  // 到底要把哪些O改成X，就是完全被X包围的O，如果顺着这个O可以找到边界，那么就不能改
  /**
   * 思路:
   * 1. 从边界出发，找是O的点，以O为起点走起来，遇到O打上特殊标记
   * 2. 这时候，所有从边界出发的O都变成了特殊标记（比如标记叫A）
   * 3. 我们再遍历一下地图，如果再遇到O（这个O肯定是内部的O）就变成X，遇到A变成O
   * 结束，这时候就是我们想要的结果
   */

  // 获取行与列
  const m = board.length;
  const n = board[0].length;
  // 四个方向 上下左右 [x,y]
  const directions = [[0,-1],[0,1],[-1,0],[1,0]];

  // dfs
  const dfs = (x,y) => {
    board[x][y] = "A";
    for (const [dx, dy] of directions) {
      // 下个节点的坐标
      const nextX = x + dx;
      const nextY = y + dy;
      // 越界处理
      if (nextX < 0 || nextX >= m || nextY < 0 || nextY >= n) continue;
      // 非O处理
      if (board[nextX][nextY] !== "O") continue;
      // 其他符合条件的情况
      // board[nextX][nextY] = "A";
      dfs(nextX, nextY);
    }
  }

  // 四个边界
  // 上下左右
  // 上下可以写在一起
  for (let y = 0; y < n; y++) {
    // 上边界
    if (board[0][y] === "O") {
      dfs(0, y);
    }
    // 下边界
    if (board[m-1][y] === "O") {
      dfs(m-1, y);
    }
  }

  // 左右边界
  for (x = 0; x < m; x++) {
    if (board[x][0] === "O") {
      dfs(x, 0);
    }
    if (board[x][n-1] === "O") {
      dfs(x, n-1);
    }
  }

  // 开始遍历地图
  for (let x = 0; x < m; x++) {
    for (let y = 0; y < n; y++) {
      if (board[x][y] === "O") {
        board[x][y] = "X";
      }
      if (board[x][y] === "A") {
        board[x][y] = "O"
      }
    }
  }

  console.log(board);
};
// @lc code=end

const board = [
  ["X","X","X","X"],
  ["X","O","O","X"],
  ["X","X","O","X"],
  ["X","O","X","X"]
]

// const board = [
//   ["X","X","X"],
//   ["X","O","X"],
//   ["X","X","X"]
// ]

// const board = [
//   ["O","O","O"],
//   ["O","O","O"],
//   ["O","O","O"]
// ]

solve(board);

