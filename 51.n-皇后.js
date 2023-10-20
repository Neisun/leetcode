/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  // 结果集
  const result = [];
  // 形成棋盘
  // [['.', '.', '.', '.'], ['.', '.', '.', '.'], ['.', '.', '.', '.'], ['.', '.', '.', '.']]
  const chessBoard = [];
  for (let i = 0; i < n; i++) {
    const board = [];
    for (let j = 0; j < n; j++) {
      board[j] = '.';
    }
    chessBoard.push(board);
  }

  // 验证当前点位是否可以落子
  /**
   * 
   * @param {number} row 当前所在行即坐标x
   * @param {number} col 当前所在列即坐标y
   * @param {string[][]} chessBoard 棋盘
   * @returns 
   */
  const isValid = (row, col, chessBoard) => {
    // 是否在一列
    // 在上方
    // 在下方

    // 是否在对角线
    // 左上对角线
    // 右下对角线
    // 右上对角线
    // 左下对角线

    // 我们会发现，其实我们考虑多了，因为只需要考虑当前节点之前的元素，而不需要考虑之后的
    // 所以条件精简为
    // 在上方
    for (let x = row - 1; x >= 0 && x < n; x--) {
      if (chessBoard[x][col] === 'Q') return false;
    }
    // 在左上对角线
    for (let x = row - 1, y = col - 1; x >= 0 && y >= 0 && x < n && y < n; x--, y--) {
      if (chessBoard[x][y] === 'Q') return false;
    }
    // 右上对角线
    for (let x = row - 1, y = col + 1; x >= 0 && y >= 0 && x < n && y < n; x--, y++) {
      if (chessBoard[x][y] === 'Q') return false;
    }
    return true;
  }

  // 递归求解
  /**
   * @param {number} row 当前所在行即坐标x
   * @param {string[][]} chessBoard 棋盘
   */
  const dfs = (row, chessBoard) => {
    // 递归结束条件，遍历到最后一行的时候结束求解
    if (row === n) {
      // 收集结果
      // 需要注意js的引用数据类型带来的副作用
      // 处理数据
      const formatBoard = [];
      chessBoard.forEach(board => {
        formatBoard.push(board.join(''))
      })
      result.push(formatBoard);
    }
    for (let col = 0; col < n; col++) {
      if (isValid(row, col, chessBoard)) {
        chessBoard[row][col] = 'Q';
        dfs(row + 1, chessBoard);
        chessBoard[row][col] = '.';
      }
    }
  }
  dfs(0, chessBoard);
  return result;
};
// @lc code=end


// 以3x3棋盘为例，我们组装一下数组
// [
//   [0, 0, 0],
//   [0, 1, 0],
//   [0, 0, 0]
// ]
// 处在中心的坐标是 (1,1) 以x, y表示坐标
// 上    (0, 1) => (x - 1, y)
// 下    (2, 1) => (x + 1, y)
// 左    (1, 0) => (x, y - 1)
// 右    (1, 2) => (x, y + 1)
// 左上   (0, 0) => (x - 1, y - 1)
// 右上   (0, 2) => (x - 1, y + 1)
// 左下   (2, 0) => (x + 1, y - 1)
// 右下   (2, 2) => (x + 1, y + 1)

// 如果是对于5x5的棋盘呢 上 、下、左、右、左上、右上、左下、右下都不能有子
// [
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0]
// ]

// 所以我们可以写出一个伪函数来判断，对于当前棋子判断是否能落子
// const canPlayChess = (x, y) => {
//   if (condition) { // 满足落子条件
//     return false;
//   }
//   return true;
// }


// 测试
const n = 4;
const result = solveNQueens(n);
console.log(result);
