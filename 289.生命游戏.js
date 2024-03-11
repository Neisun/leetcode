/*
 * @lc app=leetcode.cn id=289 lang=javascript
 *
 * [289] 生命游戏
 *
 * https://leetcode.cn/problems/game-of-life/description/
 *
 * algorithms
 * Medium (75.89%)
 * Likes:    578
 * Dislikes: 0
 * Total Accepted:    95.7K
 * Total Submissions: 125.8K
 * Testcase Example:  '[[0,1,0],[0,0,1],[1,1,1],[0,0,0]]'
 *
 * 根据 百度百科 ， 生命游戏 ，简称为 生命 ，是英国数学家约翰·何顿·康威在 1970 年发明的细胞自动机。
 *
 * 给定一个包含 m × n 个格子的面板，每一个格子都可以看成是一个细胞。每个细胞都具有一个初始状态： 1 即为 活细胞 （live），或 0 即为
 * 死细胞 （dead）。每个细胞与其八个相邻位置（水平，垂直，对角线）的细胞都遵循以下四条生存定律：
 *
 *
 * 如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡；
 * 如果活细胞周围八个位置有两个或三个活细胞，则该位置活细胞仍然存活；
 * 如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡；
 * 如果死细胞周围正好有三个活细胞，则该位置死细胞复活；
 *
 *
 * 下一个状态是通过将上述规则同时应用于当前状态下的每个细胞所形成的，其中细胞的出生和死亡是同时发生的。给你 m x n 网格面板 board
 * 的当前状态，返回下一个状态。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
 * 输出：[[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：board = [[1,1],[1,0]]
 * 输出：[[1,1],[1,1]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * m == board.length
 * n == board[i].length
 * 1 <= m, n <= 25
 * board[i][j] 为 0 或 1
 *
 *
 *
 *
 * 进阶：
 *
 *
 * 你可以使用原地算法解决本题吗？请注意，面板上所有格子需要同时被更新：你不能先更新某些格子，然后使用它们的更新后的值再更新其他格子。
 * 本题中，我们使用二维数组来表示面板。原则上，面板是无限的，但当活细胞侵占了面板边界时会造成问题。你将如何解决这些问题？
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  /**
   * 比较朴素的暴力解法
   */
  // 获取行与列
  const m = board.length;
  const n = board[0].length;

  // 创建一个矩阵用以记录状态
  // 起始状态都记为死亡
  const record = new Array(m).fill().map(_ => new Array(n).fill(0));

  // 8个方向
  // 上 下 左 右 左对角线 右对角线
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, -1],
    [1, 1],
    [-1, 1],
    [1, -1],
  ];

  // 用以判断当前节点状态的方法
  const isAlive = (x, y) => {
    // 记录一下活细胞的数量
    let aliveNum = 0;
    // 遍历8个方向
    for (const [_x, _y] of directions) {
      const nextX = x + _x;
      const nextY = y + _y;
      // 越界跳过
      if (nextX < 0 || nextX >= m || nextY < 0 || nextY >= n) continue;
      // 判断活细胞数量
      if (board[nextX][nextY]) aliveNum++;
    }

    // 根据给定的题设判断当前细胞的状态
    if (board[x][y]) {
      // 原细胞是活细胞
      if (aliveNum < 2) {
        return 0;
      } else if (aliveNum === 2 || aliveNum === 3) {
        return 1;
      } else {
        return 0;
      }
    } else {
      // 原细胞是死细胞
      if (aliveNum === 3) {
        return 1;
      }
    }
    return board[x][y];
  };

  // 遍历原始board
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 根据周围节点判断当前节点的状态，并记录在record中
      const status = isAlive(i, j);
      record[i][j] = status;
    }
  }

  // 更新原始board
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      board[i][j] = record[i][j]
    }
  }
};
// @lc code=end

// const board = [
//   [0, 1, 0],
//   [0, 0, 1],
//   [1, 1, 1],
//   [0, 0, 0],
// ];

// const board = [
//   [0, 1, 0],
//   [0, 0, 1],
//   [1, 1, 1],
//   [0, 0, 0],
// ];

// gameOfLife(board);
