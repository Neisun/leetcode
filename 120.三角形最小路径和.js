/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 *
 * https://leetcode.cn/problems/triangle/description/
 *
 * algorithms
 * Medium (68.61%)
 * Likes:    1349
 * Dislikes: 0
 * Total Accepted:    358.5K
 * Total Submissions: 521.4K
 * Testcase Example:  '[[2],[3,4],[6,5,7],[4,1,8,3]]'
 *
 * 给定一个三角形 triangle ，找出自顶向下的最小路径和。
 * 
 * 每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1
 * 的两个结点。也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
 * 输出：11
 * 解释：如下面简图所示：
 * ⁠  2
 * ⁠ 3 4
 * ⁠6 5 7
 * 4 1 8 3
 * 自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：triangle = [[-10]]
 * 输出：-10
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * triangle[0].length == 1
 * triangle[i].length == triangle[i - 1].length + 1
 * -10^4 
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 
 * 你可以只使用 O(n) 的额外空间（n 为三角形的总行数）来解决这个问题吗？
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  /**
   * 2024-07-01二刷此题
   */
  const rows = triangle.length;
  // dp[i][j]表示由顶点出发，走到[i,j]位置的最小路径和
  const dp = new Array(rows).fill(0).map(_ => new Array(rows).fill(Infinity));
  dp[0][0] = triangle[0][0];
  for (let row = 1; row < rows; row++) {
    for (let col = 0; col <= row; col++) {
      // 需要处理越界的情况
      const topLeft = col > 0 ? dp[row-1][col-1] : Infinity;
      const topRight = col < row ? dp[row-1][col] : Infinity;
      dp[row][col] = Math.min(topLeft, topRight) + triangle[row][col];
    }
  }
  console.log(dp)
  return Math.min(...dp[rows-1]);
};
// @lc code=end

