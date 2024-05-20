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
  // // 构建棋盘 使用0填充，当放置皇后，该位置变为1
  // const board = new Array(n).fill().map(_ => new Array(n).fill(0));

  // // 需要一个函数检查，当前位置是否可行
  // const isValid = (row, col) => {
  //   // 检查行与列
  //   for (let x = row - 1; x >= 0 && x < n; x--) {
  //     if (board[x][col] === 1) return false;
  //   }
  //   for (let y = col - 1; y >= 0 && y < n; y--) {
  //     if (board[row][y] === 1) return false;
  //   }
  //   // 检查对角线
  //   // 在左上对角线
  //   for (let x = row - 1, y = col - 1; x >= 0 && y >= 0 && x < n && y < n; x--, y--) {
  //     if (board[x][y] === 1) return false;
  //   }
  //   // 右上对角线
  //   for (let x = row - 1, y = col + 1; x >= 0 && y >= 0 && x < n && y < n; x--, y++) {
  //     if (board[x][y] === 1) return false;
  //   }
  //   // 检查左上
  //   // 检查右上
  //   return true;
  // }

  // let result = 0;

  // // 创建一个dfs函数
  // const dfs = (row) => {
  //   if (row === n) {
  //     result++;
  //     return;
  //   }
  //   for (let col = 0; col < n; col++) {
  //     if (isValid(row, col)) {
  //       board[row][col] = 1;
  //       dfs(row+1);
  //       board[row][col] = 0;
  //     }
  //   }
  // }

  // dfs(0);
  // return result;

  /**
   * 2024-05-14 重写
   * 重新捋顺思路
   */
  
  // 构造棋盘
  // 如果放置皇后，我们将该位置记为1，否则记为0
  const board = new Array(n).fill().map(_ => new Array(n).fill(0));


  // 需要一个函数，检查当前放置是否可以放置皇后
  // 根据题意描述，需要检查该位置[x,y] 
  // 1. 其所在的行与列，是否存在皇后
  // 2. 检查其左上、右上对角线是否存在皇后
  // 细分析发现，不用考虑行，因为逐行去放置，每行只有一个皇后
  // 所以条件改为
  // 1. 检查其所在列，是否存在皇后
  // 2. 检查其左上、右上对教习是否存在皇后
  
  const isValid = (row, col) => {
    // 检查列，而且只需要检查这个节点，上边的元素
    for (let x = row; x >=0; x--) {
      if (board[x][col]) return false;
    }

    // 检查左上对角线
    for (let x = row - 1, y = col - 1; x >= 0 && y >= 0 && x < n && y < n; x--, y--) {
      if (board[x][y]) return false;
    }

    // 检查右上对角线
    for (let x = row - 1, y = col + 1;  x >= 0 && y >= 0 && x < n && y < n; x--, y++) {
      if (board[x][y]) return false;
    }
    return true;
  }

  let result = 0;

  const dfs = (row) => {
    if (row === n) {
      result++;
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isValid(row, col)) {
        board[row][col] = 1;
        dfs(row+1, col);
        board[row][col] = 0;
      }
    }
  }

  dfs(0);
  return result;
};
// @lc code=end

