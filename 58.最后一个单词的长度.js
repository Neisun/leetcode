/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 *
 * https://leetcode.cn/problems/length-of-last-word/description/
 *
 * algorithms
 * Easy (43.98%)
 * Likes:    673
 * Dislikes: 0
 * Total Accepted:    521.6K
 * Total Submissions: 1.2M
 * Testcase Example:  '"Hello World"'
 *
 * 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。
 * 
 * 单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "Hello World"
 * 输出：5
 * 解释：最后一个单词是“World”，长度为5。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "   fly me   to   the moon  "
 * 输出：4
 * 解释：最后一个单词是“moon”，长度为4。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "luffy is still joyboy"
 * 输出：6
 * 解释：最后一个单词是长度为6的“joyboy”。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 10^4
 * s 仅有英文字母和空格 ' ' 组成
 * s 中至少存在一个单词
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  /**
   * 方式一
   * 熟练使用api
   */
  // const s_arr = s.trim().split(' ');
  // return s_arr[s_arr.length - 1].length;

  /**
   * 方式二
   * 不使用api
   * "   fly me   to   the moon  "
   */
  // 咱们从后遍历
  const sl = s.length;
  let count = 0;
  for (let i = sl - 1; i >= 0; i--) {
    if (s[i] === ' ' && count === 0) continue;
    if (s[i] === ' ' && count > 0) return count;
    count++;
  }
  return count;
};
// @lc code=end
// const s = "Hello World"
const s = "   fly me   to   the moon  "
const r = lengthOfLastWord(s);
console.log(r)

