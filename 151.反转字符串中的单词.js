/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 反转字符串中的单词
 *
 * https://leetcode.cn/problems/reverse-words-in-a-string/description/
 *
 * algorithms
 * Medium (53.22%)
 * Likes:    1106
 * Dislikes: 0
 * Total Accepted:    505.9K
 * Total Submissions: 937.8K
 * Testcase Example:  '"the sky is blue"'
 *
 * 给你一个字符串 s ，请你反转字符串中 单词 的顺序。
 * 
 * 单词 是由非空格字符组成的字符串。s 中使用至少一个空格将字符串中的 单词 分隔开。
 * 
 * 返回 单词 顺序颠倒且 单词 之间用单个空格连接的结果字符串。
 * 
 * 注意：输入字符串 s中可能会存在前导空格、尾随空格或者单词间的多个空格。返回的结果字符串中，单词间应当仅用单个空格分隔，且不包含任何额外的空格。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "the sky is blue"
 * 输出："blue is sky the"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "  hello world  "
 * 输出："world hello"
 * 解释：反转后的字符串中不能存在前导空格和尾随空格。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "a good   example"
 * 输出："example good a"
 * 解释：如果两个单词间有多余的空格，反转后的字符串需要将单词间的空格减少到仅有一个。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 10^4
 * s 包含英文大小写字母、数字和空格 ' '
 * s 中 至少存在一个 单词
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 进阶：如果字符串在你使用的编程语言中是一种可变数据类型，请尝试使用 O(1) 额外空间复杂度的 原地 解法。
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  /**
   * 方式一
   * 熟练使用api
   */
  // // 去除首尾空格
  // const str = s.trim();
  // // 拆分成数组
  // const str_arr = str.split(' ');
  // // 结果集
  // const result = [];
  // // 遍历单词数组
  // for (const word of str_arr) {
  //   // word 可能是 ' '
  //   if (word) {
  //     result.push(word);
  //   }
  // };
  // // console.log(result);
  // // 反转数组
  // return result.reverse().join(' ');

  /**
   * 方式二
   */
  let word = '';
  let result = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ' && word === '') {
      continue;
    } else if (s[i] === ' ' && word !== '') { // 找到一个单词
      result.push(word);
      word = '';
    } else {
      word += s[i];
    }
  }
  if (word !== '') {
    result.push(word);
  }
  return result.reverse().join(' ');
};
// @lc code=end

const s = "a good   example"
const r = reverseWords(s);
console.log(r);

