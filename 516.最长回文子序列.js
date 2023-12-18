/*
 * @lc app=leetcode.cn id=516 lang=javascript
 *
 * [516] 最长回文子序列
 *
 * https://leetcode.cn/problems/longest-palindromic-subsequence/description/
 *
 * algorithms
 * Medium (67.09%)
 * Likes:    1144
 * Dislikes: 0
 * Total Accepted:    210.3K
 * Total Submissions: 313.5K
 * Testcase Example:  '"bbbab"'
 *
 * 给你一个字符串 s ，找出其中最长的回文子序列，并返回该序列的长度。
 * 
 * 子序列定义为：不改变剩余字符顺序的情况下，删除某些字符或者不删除任何字符形成的一个序列。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "bbbab"
 * 输出：4
 * 解释：一个可能的最长回文子序列为 "bbbb" 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "cbbd"
 * 输出：2
 * 解释：一个可能的最长回文子序列为 "bb" 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * s 仅由小写英文字母组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  // 跟回文子串做个了断

  /**
   * 上一题我们做了 647. 回文子串求回文子串的个数
   * 这一题我们可以沿用之前的思路
   * 我们先使用双指针的方式去解
   * 这是求回文子序列。。。
   * 子串的方式崩塌了
   * 
   * 如果以动态规划的方式求解呢？
   * 
   * dp[i][j]表示在[i..j]区间中最长回文子序列的长度
   * 那么可以做出如下推断，如果 s[i] === s[j] 那么 dp[i][j] = dp[i-1][j-1]+1
   * 如果不相等呢?
   * 是不是可以比较 [i...j-1]或者[i-1..j]的最大值
   * dp[i][j] = max(dp[i][j-1],dp[i-1][j])
   */

  // const sl = s.length;
  // const dp = new Array(sl+1).fill(0).map(_ => new Array(sl+1).fill(0));
  
  // // 初始化
  // // 遍历
  // for (let i = 1; i < sl; i++) {
  //   for (let j = 1; j < sl; j++) {
  //     if (s[i-1] === s[j-1]) {
  //       dp[i][j] = dp[i-1][j-1]+1;
  //     } else {
  //       dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j]);
  //     }
  //   }
  // }

  // console.log(dp);

  // return dp[1][sl];

  /**
   * 上述是错误的示范，我决定留着它，因为他是一个非常经典的错误示范代码
   * dp定义没问题
   * 有问题的是状态转移
   * 是从内向外的推导
   * 以[i,i+1...j-1,j]，来说 如果s[i] === s[j]那么 
   * dp[i][j] = dp[i+1][j-1]+2
   * 如果不相等 可以考虑删掉j 或者 i比较一下
   * 那就是 max(dp[i+1][j], dp[i][j-1])
   */
  const sl = s.length;
  const dp = new Array(sl).fill(0).map(_ => new Array(sl).fill(0));

  // 初始化
  for (let i = 0; i < sl; i++) {
    dp[i][i] = 1;
  }
  
  // 遍历
  for (let i = sl - 1; i >= 0; i--) {
    for (let j = i+1; j < sl; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i+1][j-1]+2;
      } else {
        dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1]);
      }
    }
  }

  console.log(dp);

  return dp[0][sl-1];
};
// @lc code=end

const s = "cbbd";
// const s = "bbbab";
longestPalindromeSubseq(s);

