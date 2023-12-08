/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 *
 * https://leetcode.cn/problems/longest-common-subsequence/description/
 *
 * algorithms
 * Medium (64.97%)
 * Likes:    1478
 * Dislikes: 0
 * Total Accepted:    394.9K
 * Total Submissions: 607.8K
 * Testcase Example:  '"abcde"\n"ace"'
 *
 * 给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。
 * 
 * 一个字符串的 子序列
 * 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。
 * 
 * 
 * 例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
 * 
 * 
 * 两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：text1 = "abcde", text2 = "ace" 
 * 输出：3  
 * 解释：最长公共子序列是 "ace" ，它的长度为 3 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：text1 = "abc", text2 = "abc"
 * 输出：3
 * 解释：最长公共子序列是 "abc" ，它的长度为 3 。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：text1 = "abc", text2 = "def"
 * 输出：0
 * 解释：两个字符串没有公共子序列，返回 0 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * text1 和 text2 仅由小写英文字符组成。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  /**
   * dp[i][j]表示在text1中以i下标结尾，在text2中以j下标结尾的最长公共子序列长度
   * 
   * 状态转移
   * 对于[...i]和[...j]中 如果 text1[i] === text2[j] 那么有 dp[i][j] = Math.max(dp[i][j], dp[i-1][j-1]+1)
   * 
   * 初始化？
   * dp[i][0]
   * dp[0][j]
   */
  const len1 = text1.length;
  const len2 = text2.length;
  // 构造dp数组
  const dp = new Array(len1).fill(0).map(_ => new Array(len2).fill(0));

  // 初始化
  // 由于我们dp数组的定义是在两个字符串中分别以i结尾和以j结尾的最长公共子序列最大值
  // 那么 dp[i][0]就是在text1里[0...i]中找text2[0]是否出现过，如果出现的话，那么计为1
  for (let i = 0; i < len1; i++) {
    const str = text1.substring(0, i+1);
    if (str.includes(text2[0])) {
      dp[i][0] = 1;
    }
  }
  
  // console.log(dp);

  // 同理的，dp[0][j]就是在text2里[0...j]中找text1[0]是否出现过，如果出现的话，那么计为1
  for (let j = 0; j < len2; j++) {
    const str = text2.substring(0, j+1);
    if (str.includes(text1[0])) {
      dp[0][j] = 1;
    }
  }

  // console.log(dp);

  // 遍历
  for (let i = 1; i < len1; i++) {
    for (let j = 1; j < len2; j++) {
      if (text1[i] === text2[j]) {
        // dp[i][j] = Math.max(dp[i][j], dp[i-1][j-1]+1);
        // 其实不需要打擂台比较了，因为dp[i-1][j-1]就是最大值
        dp[i][j] = dp[i-1][j-1]+1;
      } else {
        // 这块儿其实是状态推导过程中最容易犯错的地方
        // 如果说对于[0...i]与[0...j]来说，结尾的两个字母并不一样，那么该怎么转移呢？
        // 要看 [0...i-1]与[0...j] [0...i]与[0...j-1]哪个最大
        dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
      }
    }
  }

  // console.log(dp);

  return dp[len1-1][len2-1]
};
// @lc code=end
const text1 = "abcde", text2 = "ace";
// const text1 = "abc", text2 = "abc";

longestCommonSubsequence(text1, text2);

