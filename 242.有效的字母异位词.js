/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 *
 * https://leetcode.cn/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (66.05%)
 * Likes:    897
 * Dislikes: 0
 * Total Accepted:    734.2K
 * Total Submissions: 1.1M
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * 
 * 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: s = "anagram", t = "nagaram"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: s = "rat", t = "car"
 * 输出: false
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 
 * s 和 t 仅包含小写字母
 * 
 * 
 * 
 * 
 * 进阶: 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  // 使用一个hash记录一下每个字符出现的个数
  const sMap = new Map();
  const tMap = new Map();
  // 遍历s记录到map中
  for (const char of s) {
    sMap.set(char, (sMap.get(char) || 0) + 1);
  }
  // 遍历t记录到map中
  for (const char of t) {
    tMap.set(char, (tMap.get(char) || 0) + 1);
  }

  // 遍历t，与map做比对
  for (const char of t) {
    if (sMap.has(char)) {
      sMap.set(char, sMap.get(char) - 1);
      if (sMap.get(char) === 0) {
        sMap.delete(char);
      }
    }
  }

  // 遍历s，对map做对比
  for (const char of s) {
    if (tMap.has(char)) {
      tMap.set(char, tMap.get(char) - 1);
      if (tMap.get(char) === 0) {
        tMap.delete(char);
      }
    }
  }

  return sMap.size === 0 && tMap.size === 0;
};
// @lc code=end

// const s = "anagram", t = "nagaram"
// const s = "rat", t = "car"
const s = "a", t = "ab"
const r = isAnagram(s, t);
console.log(r)