/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 *
 * https://leetcode.cn/problems/rotate-image/description/
 *
 * algorithms
 * Medium (75.20%)
 * Likes:    1814
 * Dislikes: 0
 * Total Accepted:    533K
 * Total Submissions: 705.1K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。
 *
 * 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[[7,4,1],[8,5,2],[9,6,3]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
 * 输出：[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * n == matrix.length == matrix[i].length
 * 1 <= n <= 20
 * -1000 <= matrix[i][j] <= 1000
 *
 *
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  /**
   * 顺时针旋转90
   * 就意味着
   * 行列变换存在着这样的关系
   * 3*3矩阵来看
   * 1 2 3     7 4 1
   * 4 5 6  -> 8 5 2
   * 7 8 9     9 6 3
   * 看一下坐标的规律吧
   * 1(0,0) 2(0,1) 3(0,2)
   * 4(1,0) 5(1,1) 6(1,2)
   * 7(2,0) 8(2,1) 9(2,2)
   *
   *
   * 7(0,0) 4(0,1) 1(0,2)
   * 8(1,0) 5(1,1) 2(1,2)
   * 9(2,0) 6(2,1) 3(2,2)
   *
   * 1(0,0) -> 3(0,2)
   * 3(0,2) -> 9(2,2)
   * 9(2,2) -> 7(2,0)
   * 7(2,0) -> 1(0,0)
   *
   * 2(0,1) -> 6(1,2)
   * 6(1,2) -> 8(2,1)
   * 8(2,1) -> 4(1,0)
   * 4(1,0) -> 2(0,1)
   *
   *
   * 找出的规律如上，但是代码怎么写，这块儿有点头疼，没有想好
   * 每次交换四个节点的位置
   * 假设是N*N的矩阵
   * 那么节点个数是N²
   * 我们观察，如果N是偶数
   * 每次换4个节点的位置，那么意味着需要换 N²/4 = (N/2) * (N/2)
   *
   * 如果N是奇数，中间节点不用交换
   * 那就是交换 (N²-1)/4 = (N-1)(N+1)/4 = (N-1)/2 * (N+1)/2
   */
  // 获取到矩阵的行列数
  const n = matrix.length;

  // 我们判断一下奇偶数
  if (n % 2 === 0) { // 偶数
    for (let i = 0; i < n / 2; i++) {
      for (let j = 0; j < n / 2; j++) {
        // 找出规律做交换
        // 我们拿给出的示例为例子，找出规律
        // 5 -> 15
        // 15 -> 16
        // 16 -> 11
        // 11 -> 5
        // 我们来找一下其坐标之间的联系
        // (0,0) -> (3,0)
        // (3,0) -> (3,3)
        // (3,3) -> (0,3)
        // (0,3) -> (0,0)
        // 好像看不出来啥，我们得看下一组，找出其规律
        // 1 -> 13
        // 13 -> 12
        // 12 -> 10
        // 10 -> 1
        // (0,1) -> (2,0)
        // (2,0) -> (3,2)
        // (3,2) -> (1,3)
        // (1,3) -> (0,1)
        // 这个时候 n = 4 i = 0 j = 1
        const temp = matrix[i][j];
        matrix[i][j] = matrix[n-j-1][i]
        matrix[n-j-1][i] = matrix[n-i-1][n-j-1];
        matrix[n-i-1][n-j-1] = matrix[j][n-i-1];
        matrix[j][n-i-1] = temp
      }
    }
  } else { // 奇数
    for (let i = 0; i < (n-1)/2; i++) {
      for (let j = 0; j < (n+1)/2; j++) {
        const temp = matrix[i][j];
        matrix[i][j] = matrix[n-j-1][i]
        matrix[n-j-1][i] = matrix[n-i-1][n-j-1];
        matrix[n-i-1][n-j-1] = matrix[j][n-i-1];
        matrix[j][n-i-1] = temp
      }
    }
  }
  // for (let i = 0; i < Math.floor(n / 2); i++) {
  //   for (let j = 0; j < Math.floor((n + 1) / 2); j++) {
  //     const temp = matrix[i][j];
  //     matrix[i][j] = matrix[n - j - 1][i];
  //     matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
  //     matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
  //     matrix[j][n - i - 1] = temp;
  //   }
  // }
  console.log(matrix);
};
// @lc code=end

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

const matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

rotate(matrix);
