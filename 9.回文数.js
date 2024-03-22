/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 *
 * https://leetcode.cn/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (55.83%)
 * Likes:    2810
 * Dislikes: 0
 * Total Accepted:    1.6M
 * Total Submissions: 2.8M
 * Testcase Example:  '121'
 *
 * 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
 * 
 * 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 
 * 
 * 例如，121 是回文，而 123 不是。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：x = 121
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：x = -121
 * 输出：false
 * 解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：x = 10
 * 输出：false
 * 解释：从右向左读, 为 01 。因此它不是一个回文数。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * -2^31 <= x <= 2^31 - 1
 * 
 * 
 * 
 * 
 * 进阶：你能不将整数转为字符串来解决这个问题吗？
 * 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  /**
   * 方式一
   * 转成字符串，双指针
   */
  // x = x.toString();
  // let start = 0;
  // let end = x.length - 1;
  // while (start < end) {
  //   if (x[start] !== x[end]) return false;
  //   start++;
  //   end--;
  // }
  // return true;

  /**
   * 方式二
   * 转成字符串数组，reverse
   */
  // x = Array.from(x.toString());
  // return x.join('') === x.reverse().join('');

  /**
   * 方式三
   * 有什么别的算术方式么？？
   */
  // 如果是负数肯定不行
  // 如果最后一位是0那么就意味第一位是0，这不符合数字表示，也不行（x=0除外）
  if (x < 0 || (x !== 0 && x % 10 === 0)) return false;

  // 12321
  let r = 0;
  while (r < x) {
    r = r * 10 + (x % 10);
    x = parseInt(x / 10);
  }
  // console.log(x);
  // console.log(r);
  return x === r || parseInt(r/10) === x;
};
// @lc code=end

// 12321

isPalindrome(123321)

