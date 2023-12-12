/*
 * @lc app=leetcode.cn id=583 lang=javascript
 *
 * [583] 两个字符串的删除操作
 *
 * https://leetcode.cn/problems/delete-operation-for-two-strings/description/
 *
 * algorithms
 * Medium (66.87%)
 * Likes:    644
 * Dislikes: 0
 * Total Accepted:    142.2K
 * Total Submissions: 212.5K
 * Testcase Example:  '"sea"\n"eat"'
 *
 * 给定两个单词 word1 和 word2 ，返回使得 word1 和  word2 相同所需的最小步数。
 * 
 * 每步 可以删除任意一个字符串中的一个字符。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入: word1 = "sea", word2 = "eat"
 * 输出: 2
 * 解释: 第一步将 "sea" 变为 "ea" ，第二步将 "eat "变为 "ea"
 * 
 * 
 * 示例  2:
 * 
 * 
 * 输入：word1 = "leetcode", word2 = "etco"
 * 输出：4
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 
 * 1 <= word1.length, word2.length <= 500
 * word1 和 word2 只包含小写英文字母
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  /**
   * 从题意分析可以得出，如果想找步数最少，那么一定是尽量找word1和word2中最长的公共子序列
   * 所以这个题就模型就转变成找两个字符串中最长的公共子序列问题了
   * 
   * dp[i][j]表示在word1中以i结尾，在word2中以j结尾的最长公共子序列的长度为dp[i][j]
   * 
   * 状态转移
   * 如果word1[i] === word2[j]
   * dp[i][j] = dp[i-1][j-1]+1
   * 
   * 如果word1[i] !== word2[j]
   * dp[i][j] = max(dp[i-1][j], dp[i][j-1])
   */

  const wl1 = word1.length;
  const wl2 = word2.length;

  // 构造dp数组
  const dp = new Array(wl1).fill(0).map(_ => new Array(wl2).fill(0));

  // 初始化
  // dp[i][0]
  for (let i = 0; i < wl1; i++) {
    const str = word1.substring(0, i+1);
    if (str.includes(word2[0])) {
      dp[i][0] = 1;
    }
  }

  // dp[0][j]
  for (let j = 0; j < wl2; j++) {
    const str = word2.substring(0, j+1);
    if (str.includes(word1[0])) {
      dp[0][j] = 1;
    }
  }

  // 遍历
  for (let i = 1; i < wl1; i++) {
    for (let j = 1; j < wl2;j++) {
      if (word1[i] === word2[j]) {
        dp[i][j] = dp[i-1][j-1]+1
      } else {
        dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
      }
    }
  }

  // console.log(dp);

  return wl1 - dp[wl1-1][wl2-1] + wl2 - dp[wl1-1][wl2-1];
};
// @lc code=end

// const word1 = "sea", word2 = "eat";
const word1 = "leetcode", word2 = "etco";

minDistance(word1, word2);

