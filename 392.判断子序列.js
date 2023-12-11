/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 *
 * https://leetcode.cn/problems/is-subsequence/description/
 *
 * algorithms
 * Easy (52.30%)
 * Likes:    977
 * Dislikes: 0
 * Total Accepted:    365.3K
 * Total Submissions: 698.9K
 * Testcase Example:  '"abc"\n"ahbgdc"'
 *
 * 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。
 * 
 * 
 * 字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。
 * 
 * 进阶：
 * 
 * 如果有大量输入的 S，称作 S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T
 * 的子序列。在这种情况下，你会怎样改变代码？
 * 
 * 致谢：
 * 
 * 特别感谢 @pbrother 添加此问题并且创建所有测试用例。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "abc", t = "ahbgdc"
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "axc", t = "ahbgdc"
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * 0 
 * 两个字符串都只由小写字符组成。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  /**
   * 双指针方式
   * 一个指针从s起始出发
   * 一个指针从t起始出发
   * 
   * 遇到相同 即 s[i] === t[j]，那么 i++ j++
   * 如果 不等那么 j++
   * 如果到最后 i >= s.length，证明s是t的子序列
   */
  
  let i = 0;
  let j = 0;

  while (j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }

  // console.log(i);

  return i >= s.length;

  /**
   * 动态规划方式
   * 等同于求s 和 t的最长公共子序列的长度是不是s.length
   */
  // const len1 = s.length;
  // const len2 = t.length;
  // // 空字符串时候
  // if (len1 === 0) return true;
  // // 构造dp数组
  // const dp = new Array(len1).fill(0).map(_ => new Array(len2).fill(0));

  // // 初始化
  // for (let i = 0; i < len1; i++) {
  //   const str = s.substring(0, i+1);
  //   if (str.includes(t[0])) {
  //     dp[i][0] = 1;
  //   }
  // }

  // for (let j = 0; j < len2; j++) {
  //   const str = t.substring(0, j+1);
  //   if (str.includes(s[0])) {
  //     dp[0][j] = 1;
  //   }
  // }

  // // 遍历
  // for (let i = 1; i < len1; i++) {
  //   for (let j = 1; j < len2; j++) {
  //     if (s[i] === t[j]) {
  //       dp[i][j] = dp[i-1][j-1]+1
  //     } else {
  //       // dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j])
  //       // 这块儿为什么与最长公共子序列存在差异呢？
  //       // 之前比较的是s的[0..i-1,i]和t[0..j-1,j]，如果s[i] === t[j] 可以从前者里获取出结果并且+1

  //       // 如果不相等，那么我们应该比较的是[0...i]和[0...j-1]，[0....i-1]和[0....j]的哪个最大值
  //       // 但是，如果不相等可以不考虑 t[j]这个字符，所以[0....i-1]和[0....j]可以不考虑
  //       dp[i][j] = dp[i][j-1];
  //     }
  //   }
  // }

  // // console.log(dp);

  // return dp[len1-1][len2-1] === len1;
};
// @lc code=end

const s = "abc", t = "ahbgdc"
// const s = "axc", t = "ahbgdc"
// const s = "bb", t = "ahbgdc"

isSubsequence(s,t);
