/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根 
 *
 * https://leetcode.cn/problems/sqrtx/description/
 *
 * algorithms
 * Easy (38.43%)
 * Likes:    1551
 * Dislikes: 0
 * Total Accepted:    912.7K
 * Total Submissions: 2.4M
 * Testcase Example:  '4'
 *
 * 给你一个非负整数 x ，计算并返回 x 的 算术平方根 。
 * 
 * 由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
 * 
 * 注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：x = 4
 * 输出：2
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：x = 8
 * 输出：2
 * 解释：8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= x <= 2^31 - 1
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x === 1) return 1;
  // 直接二分
  let left = 0;
  let right = x;
  let set = new Set();
  while (left < right) {
    let mid = Math.floor((left+right)/2);
    if (set.has(mid)) {
      return left;
    } else {
      set.add(mid);
    }
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid < x) {
      left = mid;
    } else {
      right = mid;
    }
  }
  return left;

  // 0 - 8 => 4
  // 0 - 4 => 2
  // 2 - 4 => 3
  // 2 - 3 => 2
};
// @lc code=end

