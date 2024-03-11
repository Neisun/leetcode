/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 *
 * https://leetcode.cn/problems/word-pattern/description/
 *
 * algorithms
 * Easy (44.52%)
 * Likes:    637
 * Dislikes: 0
 * Total Accepted:    165.6K
 * Total Submissions: 371.3K
 * Testcase Example:  '"abba"\n"dog cat cat dog"'
 *
 * 给定一种规律 pattern 和一个字符串 s ，判断 s 是否遵循相同的规律。
 * 
 * 这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 s 中的每个非空单词之间存在着双向连接的对应规律。
 * 
 * 
 * 
 * 示例1:
 * 
 * 
 * 输入: pattern = "abba", s = "dog cat cat dog"
 * 输出: true
 * 
 * 示例 2:
 * 
 * 
 * 输入:pattern = "abba", s = "dog cat cat fish"
 * 输出: false
 * 
 * 示例 3:
 * 
 * 
 * 输入: pattern = "aaaa", s = "dog cat cat dog"
 * 输出: false
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 <= pattern.length <= 300
 * pattern 只包含小写英文字母
 * 1 <= s.length <= 3000
 * s 只包含小写英文字母和 ' '
 * s 不包含 任何前导或尾随对空格
 * s 中每个单词都被 单个空格 分隔
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  // 先把s拆分成单词
  words = s.split(' ');
  
  // 长度不一样，肯定不对
  if (words.length !== pattern.length) return false;

  // 思路就与同构字符串一样了
  const pMap = new Map();
  const wMap = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const x = pattern[i];
    const y = words[i];

    if ((pMap.get(x) && pMap.get(x) !== y) || (wMap.get(y) && wMap.get(y) !== x)) {
      return false;
    }

    pMap.set(x, y);
    wMap.set(y, x);
  }

  return true;
};
// @lc code=end

const pattern = "abba"
const s = "dog constructor constructor dog"
wordPattern(pattern, s);

