/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 *
 * https://leetcode.cn/problems/isomorphic-strings/description/
 *
 * algorithms
 * Easy (49.04%)
 * Likes:    699
 * Dislikes: 0
 * Total Accepted:    248.8K
 * Total Submissions: 504.8K
 * Testcase Example:  '"egg"\n"add"'
 *
 * 给定两个字符串 s 和 t ，判断它们是否是同构的。
 * 
 * 如果 s 中的字符可以按某种映射关系替换得到 t ，那么这两个字符串是同构的。
 * 
 * 
 * 每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。不同字符不能映射到同一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入：s = "egg", t = "add"
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "foo", t = "bar"
 * 输出：false
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "paper", t = "title"
 * 输出：true
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 
 * 
 * 1 <= s.length <= 5 * 10^4
 * t.length == s.length
 * s 和 t 由任意有效的 ASCII 字符组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  /**
   * 同构的意思，是按照相同的格式进行输出
   * 思路是什么样子的呢？？
   * 说实话，我真没觉得这个题有多简单。。。
   * 我们拿 foo bar来看
   * 我们需要维护映射关系
   * sMap
   * f -> b
   * o -> a
   * o -> r
   * 
   * tMap
   * b -> f
   * a -> o
   * r -> o
   */
  const sMap = {}
  const tMap = {}

  for (let i = 0; i < s.length; i++) {
    const x = s[i];
    const y = t[i];
    if ((sMap[x] && sMap[x] !== y) || (tMap[y] && tMap[y] !== x)) {
      return false;
    }
    sMap[x] = y
    tMap[y] = x;
  }
  return true;
};
// @lc code=end

const s = "egg"
const t = "add"

isIsomorphic(s, t);

