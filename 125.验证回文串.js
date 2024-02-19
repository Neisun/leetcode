/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 *
 * https://leetcode.cn/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (46.63%)
 * Likes:    732
 * Dislikes: 0
 * Total Accepted:    548.7K
 * Total Submissions: 1.2M
 * Testcase Example:  '"A man, a plan, a canal: Panama"'
 *
 * 如果在将所有大写字符转换为小写字符、并移除所有非字母数字字符之后，短语正着读和反着读都一样。则可以认为该短语是一个 回文串 。
 * 
 * 字母和数字都属于字母数字字符。
 * 
 * 给你一个字符串 s，如果它是 回文串 ，返回 true ；否则，返回 false 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入: s = "A man, a plan, a canal: Panama"
 * 输出：true
 * 解释："amanaplanacanalpanama" 是回文串。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "race a car"
 * 输出：false
 * 解释："raceacar" 不是回文串。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = " "
 * 输出：true
 * 解释：在移除非字母数字字符之后，s 是一个空字符串 "" 。
 * 由于空字符串正着反着读都一样，所以是回文串。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 2 * 10^5
 * s 仅由可打印的 ASCII 字符组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  /**
   * 熟练使用api的方式
   */
  // 转小写
  // s = s.toLowerCase();
  // // 去除其他字符、空格，只保留字母
  // const s_arr = [];
  // for (const char of s) {
  //   const charCode = char.charCodeAt();
  //   // 小写字母范围97~122
  //   // 数字的范围48~57
  //   if ((charCode >= 48 && charCode <= 57) || (charCode >= 97 && charCode <= 122)) {
  //     s_arr.push(char);
  //   }
  // }
  // // 利用数组的reverse和join
  // return s_arr.join('') === s_arr.reverse().join('');

  /**
   * 第二种方式，双指针
   */
  // 这种方式能高效点
  let l = 0;
  let r = s.length - 1;

  // 判断是否是有效的字符
  const isValid = (char) => {
    return (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) || (char.charCodeAt() >= 48 && char.charCodeAt() <= 57)
  }

  while (l < r) {
    // 特殊字符
    // a~z 97~122
    // 0~9 48~57
    while (l < r && l >=0 && r <= s.length - 1 && l < r && !isValid(s[l].toLowerCase())) {
      l++;
    }
    while (l < r && l >=0 && r <= s.length - 1 && !isValid(s[r].toLowerCase())) {
      r--;
    }

    // 相等的情况
    if (s[l].toLowerCase() === s[r].toLowerCase()) {
      l++;
      r--;
    } else {
      return false;
    }
  }
  return true;
};
// @lc code=end
// const s = "A man, a plan, a canal: Panama";
const s = "race a car";
const r = isPalindrome(s);
console.log(r);

