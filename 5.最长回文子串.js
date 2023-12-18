/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode.cn/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (37.87%)
 * Likes:    6983
 * Dislikes: 0
 * Total Accepted:    1.6M
 * Total Submissions: 4.2M
 * Testcase Example:  '"babad"'
 *
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 * 
 * 如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "cbbd"
 * 输出："bb"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 1000
 * s 仅由数字和英文字母组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  /**
   * 双指针的方式
   * 一定要会的方式
   */
  // let result = '';
  // let longest = 0;
  // const sl = s.length;
  // // 考虑奇数的情况 1位中心点
  // for (let i = 0; i < sl; i++) {
  //   let j = i;
  //   let k = i;
  //   while (j >= 0 && k < sl && s[j] === s[k]) {
  //     const len = k-j+1;
  //     if (longest < len) {
  //       longest = len;
  //       result = s.substring(j,k+1);
  //     }
  //     j--;
  //     k++;
  //   }
  // }

  // // 考虑偶数的情况 2位中心点
  // for (let i = 0; i < sl; i++) {
  //   let j = i;
  //   let k = i+1;
  //   while (j >= 0 && k < sl && s[j] === s[k]) {
  //     const len = k-j+1;
  //     if (longest < len) {
  //       longest = len;
  //       result = s.substring(j,k+1);
  //     }
  //     j--;
  //     k++;
  //   }
  // }

  // // console.log(result);

  // return result;

  /**
   * 动态规划的方式
   * dp[i][j]的定义，以[i...j]结尾的子串是不是回文串
   * 如果s[i] === s[j] 并且 dp[i+1][j-1] = true 那么 dp[i][j] = true即 [i...j]是回文串，统计一下最长，记录最长的字符串
   * 这块儿的有个逻辑一致让我有点困惑就是需要判断 j-i <= 1的情况，因为使用dp[i+1][j-1]无法覆盖到
   */
  let result = '';
  let longest = 0;
  const sl = s.length;
  const dp = new Array(sl).fill(false).map(_ => new Array(sl).fill(false));

  // 初始化
  for (let i = 0; i < sl; i++) {
    dp[i][i] = true;
  }
  // 由于 dp[i][j] 是由 dp[i+1][j-1]推导得出，所以i的遍历是由大到小 j的遍历是由小到大
  // 遍历
  for (let i = sl-1; i >= 0; i--) {
    for (let j = i; j < sl; j++) {
      if (s[i] === s[j]) {
        if (j - i <= 1) { // 一个字符或者两个字符的情况 比如 a aa 因为这种字符串无法使用dp[i+1][j-1]覆盖到
          dp[i][j] = true;
          if (longest < j-i+1) {
            longest = j-i+1;
            result = s.substring(i, j+1);
          }
        } else if (dp[i+1][j-1]) {
          dp[i][j] = true;
          if (longest < j-i+1) {
            longest = j-i+1;
            result = s.substring(i, j+1);
          }
        }
      }
    }
  }

  // console.log(result);

  // console.log(dp);
  return result;
};
// @lc code=end
// const s = "babad";
const s = "cbbd";
longestPalindrome(s);

