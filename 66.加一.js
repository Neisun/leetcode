/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 *
 * https://leetcode.cn/problems/plus-one/description/
 *
 * algorithms
 * Easy (45.27%)
 * Likes:    1378
 * Dislikes: 0
 * Total Accepted:    724.2K
 * Total Submissions: 1.6M
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
 * 
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 * 
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：digits = [1,2,3]
 * 输出：[1,2,4]
 * 解释：输入数组表示数字 123。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：digits = [4,3,2,1]
 * 输出：[4,3,2,2]
 * 解释：输入数组表示数字 4321。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：digits = [0]
 * 输出：[1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 0 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let add = 0;
  let sum = 0;
  const len = digits.length;
  for (let i = len - 1; i >= 0; i--) {
    if (i === len - 1) {
      sum = digits[i] + 1;
      add = sum > 9 ? 1 : 0;
    } else {
      sum = digits[i] + add;
      add = sum > 9 ? 1 : 0;
    }
    digits[i] = sum%10;
  }
  if (add) digits.unshift(add);
  return digits;
};
// @lc code=end
// const digits = [1,2,3];
// const digits = [4,3,2,1];
const digits = [9,9];
plusOne(digits);

