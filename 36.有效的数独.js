/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 *
 * https://leetcode.cn/problems/valid-sudoku/description/
 *
 * algorithms
 * Medium (63.12%)
 * Likes:    1210
 * Dislikes: 0
 * Total Accepted:    418.4K
 * Total Submissions: 661.1K
 * Testcase Example:  '[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]'
 *
 * 请你判断一个 9 x 9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。
 *
 *
 * 数字 1-9 在每一行只能出现一次。
 * 数字 1-9 在每一列只能出现一次。
 * 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
 *
 *
 *
 *
 * 注意：
 *
 *
 * 一个有效的数独（部分已被填充）不一定是可解的。
 * 只需要根据以上规则，验证已经填入的数字是否有效即可。
 * 空白格用 '.' 表示。
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：board =
 * [["5","3",".",".","7",".",".",".","."]
 * ,["6",".",".","1","9","5",".",".","."]
 * ,[".","9","8",".",".",".",".","6","."]
 * ,["8",".",".",".","6",".",".",".","3"]
 * ,["4",".",".","8",".","3",".",".","1"]
 * ,["7",".",".",".","2",".",".",".","6"]
 * ,[".","6",".",".",".",".","2","8","."]
 * ,[".",".",".","4","1","9",".",".","5"]
 * ,[".",".",".",".","8",".",".","7","9"]]
 * 输出：true
 *
 *
 * 示例 2：
 *
 *
 * 输入：board =
 * [["8","3",".",".","7",".",".",".","."]
 * ,["6",".",".","1","9","5",".",".","."]
 * ,[".","9","8",".",".",".",".","6","."]
 * ,["8",".",".",".","6",".",".",".","3"]
 * ,["4",".",".","8",".","3",".",".","1"]
 * ,["7",".",".",".","2",".",".",".","6"]
 * ,[".","6",".",".",".",".","2","8","."]
 * ,[".",".",".","4","1","9",".",".","5"]
 * ,[".",".",".",".","8",".",".","7","9"]]
 * 输出：false
 * 解释：除了第一行的第一个数字从 5 改为 8 以外，空格内其他数字均与 示例1 相同。 但由于位于左上角的 3x3 宫内有两个 8 存在,
 * 因此这个数独是无效的。
 *
 *
 *
 * 提示：
 *
 *
 * board.length == 9
 * board[i].length == 9
 * board[i][j] 是一位数字（1-9）或者 '.'
 *
 *
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  /**
   * 比如给定了一个数 他的坐标是 [row, col]
   * 我们需要按照那三个条件去判断是否符合要求，只要不符合要求就返回false
   * 如果好符合条件我们继续往下找
   */

  // 遍历矩阵
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      // 数字的情况 才做判断
      if (board[row][col] !== '.') {
        // 检测行
        for (let i = 0; i < 9; i++) {
          if (i !== col && board[row][i] === board[row][col]) {
            console.log(1111111);
            return false;
          }
        }

        // 检测列
        for (let i = 0; i < 9; i++) {
          if (i !== row && board[i][col] === board[row][col]) {
            console.log(22222222);
            return false;
          }
        }

        // 检测3*3的单元格
        // 怎么确定在哪个3*3表格中 [3, 4] 起点是 [3,3]
        const rowSize = parseInt(row / 3);
        const colSize = parseInt(col / 3);
        // const start = 3 * size;
        // const end = 3 * (size + 1);
        // // const end = 3 * size + 3;
        for (let i = 3 * rowSize; i < 3 * (rowSize + 1); i++) {
          for (let j = 3 * colSize; j < 3 * (colSize + 1); j++) {
            if (row !== i && col !== j && board[i][j] === board[row][col]) {
              console.log('row:', row);
              console.log('col:', col);
              console.log('i:', i);
              console.log('j:', j);
              console.log(33333333333);
              return false;
            }
          }
        }
      }
    }
  }
  return true;
};
// @lc code=end

// const board = [
//   ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
//   ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
//   ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
//   ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
//   ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
//   ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
//   ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
//   ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
//   ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
// ];

const board = [
  ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

const r = isValidSudoku(board);
console.log(r);
