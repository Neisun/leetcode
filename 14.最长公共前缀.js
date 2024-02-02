/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode.cn/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (43.58%)
 * Likes:    3051
 * Dislikes: 0
 * Total Accepted:    1.2M
 * Total Submissions: 2.8M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：strs = ["flower","flow","flight"]
 * 输出："fl"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：strs = ["dog","racecar","car"]
 * 输出：""
 * 解释：输入不存在公共前缀。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= strs.length <= 200
 * 0 <= strs[i].length <= 200
 * strs[i] 仅由小写英文字母组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  // 只有一个字符串的情况
  if (strs.length === 1) return strs[0];
  let cpf = '';
  let allSame = true;
  // 其他情况
  for (let end = 0; end < 201; end++) {
    cpf = strs[0].substring(0, end + 1);
    for (const str of strs) {
      if (!str.startsWith(cpf)) {
        allSame = false;
        return strs[0].substring(0, end);
      }
    }
  }
  return allSame ? cpf : '';
};
// @lc code=end

// const strs = ["flower","flow","flight"];
// const strs = ["dog","racecar","car"];
const strs = ["c","acc","ccc"];
const r = longestCommonPrefix(strs);
console.log(r);

