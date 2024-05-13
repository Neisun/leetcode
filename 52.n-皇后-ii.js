/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N 皇后 II
 *
 * https://leetcode.cn/problems/n-queens-ii/description/
 *
 * algorithms
 * Hard (82.32%)
 * Likes:    516
 * Dislikes: 0
 * Total Accepted:    148.7K
 * Total Submissions: 180.7K
 * Testcase Example:  '4'
 *
 * n 皇后问题 研究的是如何将 n 个皇后放置在 n × n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * 
 * 给你一个整数 n ，返回 n 皇后问题 不同的解决方案的数量。
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 4
 * 输出：2
 * 解释：如上图所示，4 皇后问题存在两个不同的解法。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 1
 * 输出：1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= n <= 9
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  // 构建棋盘 使用0填充，当放置皇后，该位置变为1
  const board = new Array(n).fill().map(_ => new Array(n).fill(0));

  // 需要一个函数检查，当前位置是否可行
  const isValid = (row, col) => {
    // 检查行与列
    for (let x = row - 1; x >= 0 && x < n; x--) {
      if (board[x][col] === 1) return false;
    }
    for (let y = col - 1; y >= 0 && y < n; y--) {
      if (board[row][y] === 1) return false;
    }
    // 检查对角线
    // 在左上对角线
    for (let x = row - 1, y = col - 1; x >= 0 && y >= 0 && x < n && y < n; x--, y--) {
      if (board[x][y] === 1) return false;
    }
    // 右上对角线
    for (let x = row - 1, y = col + 1; x >= 0 && y >= 0 && x < n && y < n; x--, y++) {
      if (board[x][y] === 1) return false;
    }
    // 检查左上
    // 检查右上
    return true;
  }

  let result = 0;

  // 创建一个dfs函数
  const dfs = (row) => {
    if (row === n) {
      result++;
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isValid(row, col)) {
        board[row][col] = 1;
        dfs(row+1);
        board[row][col] = 0;
      }
    }
  }

  dfs(0);
  return result;
};
// @lc code=end

