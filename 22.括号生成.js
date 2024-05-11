/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode.cn/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (77.50%)
 * Likes:    3576
 * Dislikes: 0
 * Total Accepted:    840.6K
 * Total Submissions: 1.1M
 * Testcase Example:  '3'
 *
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 3
 * 输出：["((()))","(()())","(())()","()(())","()()()"]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 1
 * 输出：["()"]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= n <= 8
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  /**
   * 思路来自于 https://www.bilibili.com/video/BV1xV411q7wE/?spm_id_from=333.337.search-card.all.click
   * 这个题说实话，我个人感觉难度挺大的，难点在于很难想
   * 没有太多的思路
   * 直到看了上述的B站的视频，哦豁，讲的真棒
   */
  // 结果集
  const result = [];
  
  const dfs = (left, right, pathStr) => {
    // 无效组合
    if (right > left) return;
    // 找到了结果
    if (left === n && right === n) {
      result.push(pathStr);
    }
    if (left < n) {
      dfs(left+1, right, pathStr + '(');
    }
    if (right < left) {
      dfs(left, right + 1, pathStr + ')');
    }
  }

  dfs(0, 0, '');
  return result;
};
// @lc code=end

