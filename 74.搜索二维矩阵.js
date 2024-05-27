/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 *
 * https://leetcode.cn/problems/search-a-2d-matrix/description/
 *
 * algorithms
 * Medium (49.06%)
 * Likes:    926
 * Dislikes: 0
 * Total Accepted:    408.5K
 * Total Submissions: 822.2K
 * Testcase Example:  '[[1,3,5,7],[10,11,16,20],[23,30,34,60]]\n3'
 *
 * 给你一个满足下述两条属性的 m x n 整数矩阵：
 * 
 * 
 * 每行中的整数从左到右按非严格递增顺序排列。
 * 每行的第一个整数大于前一行的最后一个整数。
 * 
 * 
 * 给你一个整数 target ，如果 target 在矩阵中，返回 true ；否则，返回 false 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= m, n <= 100
 * -10^4 <= matrix[i][j], target <= 10^4
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  /**
   * 方法一：
   * 摊平二维数组为一维数组
   * 然后使用二分
   */
  // const list = [];
  // for (const nums of matrix) {
  //   list.push(...nums);
  // }
  
  // let left = 0;
  // let right = list.length - 1;

  // while (left <= right) {
  //   let mid = Math.floor((left+right)/2);
  //   if (list[mid] === target) {
  //     return true;
  //   } else if (list[mid] < target) {
  //     left = mid + 1;
  //   } else {
  //     right = mid - 1;
  //   }
  // }
  // return false;

  /**
   * 方法二:
   * 换一种思路从右上角开始找
   * 每一行的右上角就是最大值记为 matrix[row][col-1];
   * 如果 matrix[row][col-1] < target 说明 在下一行 row++继续找
   * 如果 matrix[row][col-1] > target 那么在当前行二分查找
   * 如果 matrix[row][col-1] === target return true
   */
  const row = matrix.length;
  const col = matrix[0].length;
  let x = 0,
      y = col - 1;
  
  while (x < row && y < col && y >= 0) {
    if (matrix[x][y] < target) {
      x++;
    } else if (matrix[x][y] === target) {
      return true;
    } else {
      y--;
    }
  }

  return false;
};
// @lc code=end

