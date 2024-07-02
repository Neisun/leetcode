/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 *
 * https://leetcode.cn/problems/minimum-path-sum/description/
 *
 * algorithms
 * Medium (69.79%)
 * Likes:    1688
 * Dislikes: 0
 * Total Accepted:    619.2K
 * Total Submissions: 877.9K
 * Testcase Example:  '[[1,3,1],[1,5,1],[4,2,1]]'
 *
 * 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 * 
 * 说明：每次只能向下或者向右移动一步。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
 * 输出：7
 * 解释：因为路径 1→3→1→1→1 的总和最小。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：grid = [[1,2,3],[4,5,6]]
 * 输出：12
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 200
 * 0 <= grid[i][j] <= 200
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  // 矩阵的行数和列数
  const rows = grid.length;
  const cols = grid[0].length;

  // 动态规划数组：dp[i][j] 表示从左上角到第 i 行第 j 列的最小路径和
  const dp = new Array(rows).fill().map(_ => new Array(cols).fill(0));

  // 初始化第一行和第一列
  dp[0][0] = grid[0][0]; // 第一个元素
  for (let col = 1; col < cols; col++) {
    dp[0][col] = dp[0][col-1] + grid[0][col]; // 第一列的其他元素，只能从左边来
  }
  for (let row = 1; row < rows; row++) {
    dp[row][0] = dp[row-1][0] + grid[row][0]; // 第一行的其他元素，只能从上边来
  }

  // 递推公式：dp[i][j] = min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      dp[row][col] = Math.min(dp[row-1][col], dp[row][col-1]) + grid[row][col];
    }
  }

  // 返回最后一行最后一列的元素
  return dp[rows-1][cols-1];
};
// @lc code=end

