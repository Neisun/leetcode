/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (39.33%)
 * Likes:    9975
 * Dislikes: 0
 * Total Accepted:    2.7M
 * Total Submissions: 6.8M
 * Testcase Example:  '"abcabcbb"'
 *
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: s = "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: s = "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: s = "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= s.length <= 5 * 10^4
 * s 由英文字母、数字、符号和空格组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  /**
   * 那 abcabcbb 来看
   * 从头开始 a b c a这个时候a重复了
   * 
   * 如果是暴力解法的话，需要找出所有的子串，然后去掉重复的子串，在比较剩余的看哪个最长
   */
  
  // 先试用暴力解法，看一下思路
  // 没想到，暴力算法通过了。。。
  // let str = '';
  // let result = 0;
  // let allDif = true;
  // for (let i = 0; i < s.length; i++) {
  //   str = '';
  //   for (let j = i; j < s.length; j++) {
  //     if (str.includes(s[j])) { // 重复了
  //       result = Math.max(result, j - i);
  //       allDif = false;
  //       break;
  //     } else {
  //       str += s[j];
  //       result = Math.max(result, j - i + 1);
  //     }
  //   }
  // }
  // return allDif ? s.length : result;

  /**
   * 使用别的方式，优化一下这个算法
   * 类似于双指针的方式
   */
  let str_arr = [];
  let result = 0;
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    while (str_arr.join('').includes(s[i])) { // 重复了
      str_arr.shift();
      result = Math.max(result, i - j);
      j++;
    }
    str_arr.push(s[i]);
  }
  // console.log(str_arr, result);
  return str_arr.length > result ? str_arr.length : result;
};
// @lc code=end
// const s = "abcabcbb";
// const s = "pwwkew";
// const s = "aaaaa";
// const s = "abcd";
// const s = "aab";
const r = lengthOfLongestSubstring(s);
// console.log(r);

