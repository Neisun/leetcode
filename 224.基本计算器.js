/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 *
 * https://leetcode.cn/problems/basic-calculator/description/
 *
 * algorithms
 * Hard (42.57%)
 * Likes:    1024
 * Dislikes: 0
 * Total Accepted:    137.9K
 * Total Submissions: 323.5K
 * Testcase Example:  '"1 + 1"'
 *
 * 给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。
 * 
 * 注意:不允许使用任何将字符串作为数学表达式计算的内置函数，比如 eval() 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "1 + 1"
 * 输出：2
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = " 2-1 + 2 "
 * 输出：3
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "(1+(4+5+2)-3)+(6+8)"
 * 输出：23
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 3 * 10^5
 * s 由数字、'+'、'-'、'('、')'、和 ' ' 组成
 * s 表示一个有效的表达式
 * '+' 不能用作一元运算(例如， "+1" 和 "+(2 + 3)" 无效)
 * '-' 可以用作一元运算(即 "-1" 和 "-(2 + 3)" 是有效的)
 * 输入中不存在两个连续的操作符
 * 每个数字和运行的计算将适合于一个有符号的 32位 整数
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let num = 0;
  let res = 0;
  let op = 1;
  // 使用一个栈来存放符号
  let ops = [1];
  for (const char of s) {
    if (char >= '0' && char <= '9') {
       // 遍历得到当前数字
      num = num * 10 + parseInt(char, 10);
      // 找到数字后，不继续往下走了
      continue;
    }

    res += num * op;
    num = 0;

    // 判断符号
    if (char === '+') {
      op = ops[ops.length-1];
    } else if (char === '-') {
      op = -ops[ops.length-1];
    } else if (char === '(') {
      ops.push(op);
    } else if (char === ')') {
      ops.pop();
    }
  }

  res += num * op;

  return res;
}
// @lc code=end

// const s = "(1+(4+5+2)-3)+(6+8)";
// const s = "2147483647";
// const s = " 2-1 + 2 ";
// const s = "1-(     -2)";
// const s = "(1+2)-3";
// const s = "12345";
const s = "1-(2+3)";
const r = calculate(s);
console.log(r)

// 以这个为例 (1+(4+5+2)-3)+(6+8)，看一下算法的过程

// (  res = 0 num = 0 sign = [1,1] op = 1
// 1  num = 1
// +  res += num * op  = 1 * 1 = 1; num = 0; op = 1
// (  res += 0 = 1; num = 1; op = 1; sign = [1,1,1]
// 4  num = 4
// +  res += 4 * 1 = 5; num = 0; op = 1;
// 5  num = 5
// +  res += 5 * 1 = 10; num = 0; op = 1;
// 2  num = 2
// )  res += 2 * 1 = 12; num = 0; sign = [1,1]
// -  res = 12 num = 0; op = -1
// 3  num = 3
// )  res += 12 - 3 = 9; num = 0; sign = [1]


// 1 - (2 + 3)

