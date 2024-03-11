/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 *
 * https://leetcode.cn/problems/set-matrix-zeroes/description/
 *
 * algorithms
 * Medium (64.46%)
 * Likes:    1027
 * Dislikes: 0
 * Total Accepted:    321.6K
 * Total Submissions: 491.5K
 * Testcase Example:  '[[1,1,1],[1,0,1],[1,1,1]]'
 *
 * 给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。
 *
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：matrix = [[1,1,1],[1,0,1],[1,1,1]]
 * 输出：[[1,0,1],[0,0,0],[1,0,1]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
 * 输出：[[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * m == matrix.length
 * n == matrix[0].length
 * 1 <= m, n <= 200
 * -2^31 <= matrix[i][j] <= 2^31 - 1
 *
 *
 *
 *
 * 进阶：
 *
 *
 * 一个直观的解决方案是使用  O(mn) 的额外空间，但这并不是一个好的解决方案。
 * 一个简单的改进方案是使用 O(m + n) 的额外空间，但这仍然不是最好的解决方案。
 * 你能想出一个仅使用常量空间的解决方案吗？
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  /**
   * 记录0节点的坐标
   * 再将0节点所在的行与列，都变成0
   * 测试通过，只是勉强通过，一个比较笨的方法吧
   */
  // 矩阵的行与列
  // const m = matrix.length;
  // const n = matrix[0].length;

  // // 0节点所在的行
  // const zeroRows = new Set();
  // // 0节点所在的列
  // const zeroCols = new Set();

  // // 寻找0节点的坐标
  // for (let i = 0; i < m; i++) {
  //   for (let j = 0; j < n; j++) {
  //     if (matrix[i][j] === 0) {
  //       zeroRows.add(i);
  //       zeroCols.add(j);
  //     }
  //   }
  // }

  // // 将0节点所在行的所有节点都置为0
  // for (const row of zeroRows) {
  //   for (let i = 0; i < n; i++) {
  //     matrix[row][i] = 0;
  //   }
  // }

  // // 将0节点所在列的所有节点都置为0
  // for (const col of zeroCols) {
  //   for (let i = 0; i < m; i++) {
  //     matrix[i][col] = 0;
  //   }
  // }

  // console.log(matrix);

  /**
   * 还有什么好的办法？？
   */
};
// @lc code=end

// const matrix = [
//   [1, 1, 1],
//   [1, 0, 1],
//   [1, 1, 1],
// ];

const matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];

setZeroes(matrix);
