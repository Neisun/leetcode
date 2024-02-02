/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 *
 * https://leetcode.cn/problems/integer-to-roman/description/
 *
 * algorithms
 * Medium (66.50%)
 * Likes:    1237
 * Dislikes: 0
 * Total Accepted:    443.5K
 * Total Submissions: 664.4K
 * Testcase Example:  '3'
 *
 * 罗马数字包含以下七种字符： I， V， X， L，C，D 和 M。
 * 
 * 
 * 字符          数值
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 * 
 * 例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V +
 * II 。
 * 
 * 通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数
 * 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：
 * 
 * 
 * I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
 * X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
 * C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
 * 
 * 
 * 给你一个整数，将其转为罗马数字。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: num = 3
 * 输出: "III"
 * 
 * 示例 2:
 * 
 * 
 * 输入: num = 4
 * 输出: "IV"
 * 
 * 示例 3:
 * 
 * 
 * 输入: num = 9
 * 输出: "IX"
 * 
 * 示例 4:
 * 
 * 
 * 输入: num = 58
 * 输出: "LVIII"
 * 解释: L = 50, V = 5, III = 3.
 * 
 * 
 * 示例 5:
 * 
 * 
 * 输入: num = 1994
 * 输出: "MCMXCIV"
 * 解释: M = 1000, CM = 900, XC = 90, IV = 4.
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  /**
   * 字符          数值
      I             1
      V             5
      X             10
      L             50
      C             100
      D             500
      M             1000
   * 前几天做了罗马数字转整数，这一次反过来，要把整数转罗马
   * 拿 1994 举例子 思考一下我们需要怎么转换
   * 1000 + 900 + 90 + 4
   * M + CM + XC + IV
   */
  // 先把数字拆分
  // 从后向前遍历
  const num_str = `${num}`;
  const len = num_str.length;
  const map = {
    // 个位
    "0": {
      "0": '',
      "1": "I",
      "2": "II",
      "3": "III",
      "4": "IV",
      "5": "V",
      "6": "VI",
      "7": "VII",
      "8": "VIII",
      "9": "IX"
    },
    // 十位
    "1": {
      "0": '',
      "1": "X",
      "2": "XX",
      "3": "XXX",
      "4": "XL",
      "5": "L",
      "6": "LX",
      "7": "LXX",
      "8": "LXXX",
      "9": "XC"
    },
    // 百位
    "2": {
      "0": '',
      "1": "C",
      "2": "CC",
      "3": "CCC",
      "4": "CD",
      "5": "D",
      "6": "DC",
      "7": "DCC",
      "8": "DCCC",
      "9": "CM"
    },
    // 千位
    "3": {
      "0": '',
      "1": "M",
      "2": "MM",
      "3": "MMM"
    },
  }
  let result = '';
  for (let i = 0; i < len; i++) {
    // 表示当前位，个 十 百 千
    const pow = len - 1 - i;
    result += map[pow][num_str[i]];
  }
  return result;
};
// @lc code=end
// const num = 1994;
const num = 10;
intToRoman(num);

