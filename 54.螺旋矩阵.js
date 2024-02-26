/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 *
 * https://leetcode.cn/problems/spiral-matrix/description/
 *
 * algorithms
 * Medium (49.86%)
 * Likes:    1611
 * Dislikes: 0
 * Total Accepted:    463.9K
 * Total Submissions: 922.2K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[1,2,3,6,9,8,7,4,5]
 *
 *
 * 示例 2：
 *
 *
 * 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 * 输出：[1,2,3,4,8,12,11,10,9,5,6,7]
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
 * -100
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  /**
   * 假设给定的数据是1~9 3*3的矩阵
   * 那么模拟一下坐标(row, col) 其实会发现一直在做4个方向的运动
   * 1. 向右 row++
   * (0,0) -> (0,1)
   * 2. 向下 col++
   * (0,2) -> (1,2)
   * 3. 向左 col--
   * (2,2) -> (2,1)
   * 4. 向上 row--
   * (2,0) -> (1,0)
   * 这是一道模拟运动的题目，重点在于设置好边界
   * 四个方向的运动
   * 1. 由左至右
   * 2. 由上至下
   * 3. 由右向左
   * 4. 由下至上
   */
  
  // 得到行与列
  const row = matrix.length;
  const col = matrix[0].length;
  // 节点个数
  const totalSize = row * col;
  // 结果集
  const result = [];

  // 边界
  let left = 0;
  let right = col - 1;
  let top = 0;
  let bottom = row - 1;


  while (result.length < totalSize) {
    // 从左向右
    for (let i = left; i <= right && result.length < totalSize; i++) {
      result.push(matrix[left][i]);
    }
    top++;

    // 从上向下
    for (let i = top; i <= bottom && result.length < totalSize; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    // 从右向左
    for (let i = right; i >= left && result.length < totalSize; i--) {
      result.push(matrix[bottom][i]);
    }
    bottom--;

    // 从下向上
    for (let i = bottom; i >= top && result.length < totalSize; i--) {
      result.push(matrix[i][left]);
    }
    left++;
  }
  console.log(result);
  return result;
};
// @lc code=end

const matrix = [
  [1,  2,  3,  4],
  [5,  6,  7,  8],
  [9,  10, 11, 12],
  [13, 14, 15, 16]
];
// const matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
// ];
// const matrix = [[1]];
spiralOrder(matrix);
