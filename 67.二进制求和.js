/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 *
 * https://leetcode.cn/problems/add-binary/description/
 *
 * algorithms
 * Easy (52.91%)
 * Likes:    1202
 * Dislikes: 0
 * Total Accepted:    399.8K
 * Total Submissions: 752.6K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给你两个二进制字符串 a 和 b ，以二进制字符串的形式返回它们的和。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入:a = "11", b = "1"
 * 输出："100"
 * 
 * 示例 2：
 * 
 * 
 * 输入：a = "1010", b = "1011"
 * 输出："10101"
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= a.length, b.length <= 10^4
 * a 和 b 仅由字符 '0' 或 '1' 组成
 * 字符串如果不是 "0" ，就不含前导零
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  // 原思路将数字转成10进制做加法处理，然后再处理成二进制
  // 但是由于给的二进制数字过大，导致处理成10进制有问题，只能作罢
  // const parse = (str) => {
  //   let r = 0;
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     r += str[i]*Math.pow(2, str.length-i-1);
  //   }
  //   return r;
  // }
  // let _a = parse(a);
  // let _b = parse(b);
  // console.log(_a);
  // console.log(_b);
  // let sum = _a + _b;
  // if (sum === 0) return '0';
  // const ans = [];
  // while (sum >= 1) {
  //   let binary = sum%2;
  //   ans.unshift(binary);
  //   sum = Math.floor(sum/2);
  // }
  // return ans.join('');
  
  let sum = 0;
  let ans = [];
  let add = 0;
  // 从后往前计算
  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
    // 先计算a字符串
    sum += (i >= 0 ? parseInt(a[i]) : 0);
    // 再计算b字符串
    sum += (j >= 0 ? parseInt(b[j]) : 0);
    // 加入到结果，需要注意，结果是与2求模运算
    ans.unshift(sum%2);
    // 判断是否需要进位
    add = Math.floor(sum/2);
    sum = add;
  }
  if (sum) {
    ans.unshift(sum%2);
  }
  return ans.join('')
};
// @lc code=end

