/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 *
 * https://leetcode.cn/problems/maximal-square/description/
 *
 * algorithms
 * Medium (49.93%)
 * Likes:    1672
 * Dislikes: 0
 * Total Accepted:    333.2K
 * Total Submissions: 660.1K
 * Testcase Example:  '[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]'
 *
 * 在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：matrix =
 * [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
 * 输出：4
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：matrix = [["0","1"],["1","0"]]
 * 输出：1
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：matrix = [["0"]]
 * 输出：0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == matrix.length
 * n == matrix[i].length
 * 1 
 * matrix[i][j] 为 '0' 或 '1'
 * 
 * 
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  // 记录正方形最大边
  let maxSideLen = 0;
  // 获取矩阵的长宽
  const rows = matrix.length;
  const cols = matrix[0].length;
  // 构造dp数组 dp[i][j]表示以坐标[i,j]为正方向右下角，可以构造最大正方形的边长
  const dp = new Array(rows).fill().map(_ => new Array(cols).fill(0));

  
  // 初始化两条边，上边
  for (let j = 0; j < cols; j++) {
    if (matrix[0][j] === '1') {
      dp[0][j] = 1;
      maxSideLen = 1;
    }
  }

  // 左边
  for (let i = 0; i < rows; i++) {
    if (matrix[i][0] === '1') {
      dp[i][0] = 1;
      maxSideLen = 1;
    }
  }
  
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[i][j] === '1') {
        dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1;
      }
      maxSideLen = Math.max(maxSideLen, dp[i][j]);
    }
  }

  console.log(dp)

  return maxSideLen**2;
};
// @lc code=end

