/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 *
 * https://leetcode.cn/problems/ransom-note/description/
 *
 * algorithms
 * Easy (61.76%)
 * Likes:    867
 * Dislikes: 0
 * Total Accepted:    446.6K
 * Total Submissions: 704.8K
 * Testcase Example:  '"a"\n"b"'
 *
 * 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。
 * 
 * 如果可以，返回 true ；否则返回 false 。
 * 
 * magazine 中的每个字符只能在 ransomNote 中使用一次。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：ransomNote = "a", magazine = "b"
 * 输出：false
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：ransomNote = "aa", magazine = "ab"
 * 输出：false
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：ransomNote = "aa", magazine = "aab"
 * 输出：true
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= ransomNote.length, magazine.length <= 10^5
 * ransomNote 和 magazine 由小写英文字母组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  /**
   * 使用hashmap来求解
   */
  // 构造magazine的map
  const magazineMap = new Map();
  for (const char of magazine) {
    magazineMap.set(char, (magazineMap.get(char) || 0) + 1);
  }

  // 遍历ransomNote
  const ransomMap = new Map();
  for (const char of ransomNote) {
    if (!magazineMap.has(char)) return false;
    ransomMap.set(char, (ransomMap.get(char) || 0) + 1);
    if (ransomMap.get(char) > magazineMap.get(char)) return false;
  }

  return true;
};
// @lc code=end

// const ransomNote = "a", magazine = "b"
// const ransomNote = "aa", magazine = "ab"
const ransomNote = "aa", magazine = "aab"

const r = canConstruct(ransomNote, magazine)

console.log(r);