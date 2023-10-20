/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  // 验证是否有效数字
  function isValid(row, col, num) {
    // 验证当前行
    for (let i = 0; i < 9; i++) {
      if (board[row][i] == num) {
        return false;
      };
    }
    // 验证当前列
    for (let j = 0; j < 9; j++) {
      if (board[j][col] == num) {
        return false;
      }
    }
    // 验证九宫格
    let startRow = Math.floor(row / 3) * 3;
    let startCol = Math.floor(col / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (board[i][j] == num) {
          return false;
        }
      }
    }
    return true;
  }

  function dfs(){
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        for (let num = 1; num <= 9; num++) {
          if (board[row][col] == '.') {
            if (isValid(row, col, `${num}`)) {
              board[row][col] = `${num}`;
              if (dfs()) {
                return true;
              };
              board[row][col] = '.';
            }
          }
        }
        return false;
      }
    }
    return true;
  }
  dfs();
};
// @lc code=end

// 测试
const board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]];
solveSudoku(board);


