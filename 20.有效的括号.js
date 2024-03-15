/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode.cn/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (43.88%)
 * Likes:    4377
 * Dislikes: 0
 * Total Accepted:    1.7M
 * Total Submissions: 3.9M
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 每个右括号都有一个对应的相同类型的左括号。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "()"
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "()[]{}"
 * 输出：true
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "(]"
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 10^4
 * s 仅由括号 '()[]{}' 组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  /**
   * 这个题很有意思，是典型的栈利用
   */
  // 操作栈
  const stack = [];
  // 做一个记录
  const map = {
    "(": ")",
    "{": "}",
    "[": "]"
  }

  // 遍历
  for (const char of s) {
    if (stack[stack.length-1] !== char) {
      stack.push(map[char]);
    } else {
      stack.pop();
    }
  }

  // console.log(stack)
  return stack.length === 0;
};
// @lc code=end

// const s = "(()[]{}"
const s = "(]"

isValid(s)

