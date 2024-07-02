/*
 * @lc app=leetcode.cn id=97 lang=javascript
 *
 * [97] 交错字符串
 *
 * https://leetcode.cn/problems/interleaving-string/description/
 *
 * algorithms
 * Medium (44.63%)
 * Likes:    1016
 * Dislikes: 0
 * Total Accepted:    151.5K
 * Total Submissions: 337K
 * Testcase Example:  '"aabcc"\n"dbbca"\n"aadbbcbcac"'
 *
 * 给定三个字符串 s1、s2、s3，请你帮忙验证 s3 是否是由 s1 和 s2 交错 组成的。
 * 
 * 两个字符串 s 和 t 交错 的定义与过程如下，其中每个字符串都会被分割成若干 非空 子字符串：
 * 
 * 
 * s = s1 + s2 + ... + sn
 * t = t1 + t2 + ... + tm
 * |n - m| <= 1
 * 交错 是 s1 + t1 + s2 + t2 + s3 + t3 + ... 或者 t1 + s1 + t2 + s2 + t3 + s3 +
 * ...
 * 
 * 
 * 注意：a + b 意味着字符串 a 和 b 连接。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
 * 输出：false
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s1 = "", s2 = "", s3 = ""
 * 输出：true
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= s1.length, s2.length <= 100
 * 0 <= s3.length <= 200
 * s1、s2、和 s3 都由小写英文字母组成
 * 
 * 
 * 
 * 
 * 进阶：您能否仅使用 O(s2.length) 额外的内存空间来解决它?
 * 
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  /**
   * 定义dp数组的定义
   * dp[i][j]
   * 取出s1中前i个字符
   * 取出s2中前j个字符
   * 构成s3中i+j个字符
   * 
   * 如何进行状态推导？？
   * 
   */
  const s1L = s1.length;  // s1的长度
  const s2L = s2.length;  // s2的长度
  const s3L = s3.length;  // s3的长度

  // 若s1和s2合起来的长度!==s3的长度，肯定是够不成的
  if (s1L + s2L !== s3L) return false;  // 如果 s1 和 s2 合起来的长度不同于 s3 的长度，则返回 false

  // 构造dp
  const dp = new Array(s1L+1).fill().map(_ => new Array(s2L+1).fill(false));  // 初始化一个二维数组，用于存储状态

  // 初始化
  // 即取出s1中前0个字符，取出s2中前0个字符，构造出s3长度为0的字符串
  // 即两个空串构造空串 结果必然是true
  dp[0][0] = true;  // 初始化 dp[0][0]

  // 有下边递归公式，可以看出我们需要初始化 dp[0][j]和dp[i][0]的情况
  // dp[0][j] s1不取，s2截取到j
  for (let j = 1; j <= s2L; j++) {
    dp[0][j] = dp[0][j-1] && s2[j-1] === s3[j-1];  // 初始化 dp[0][j]
  }

  // 同理
  for (let i = 1; i <= s1L; i++) {
    dp[i][0] = dp[i-1][0] && s1[i-1] === s3[i-1];  // 初始化 dp[i][0]
  }

  

  // 状态推导
  for (let i = 1; i <= s1L; i++) {
    for (let j = 1; j <= s2L; j++) {
      dp[i][j] = (dp[i-1][j] && s1[i-1] === s3[i+j-1]) || (dp[i][j-1] && s2[j-1] === s3[i+j-1]);  // 状态推导
    }
  }

  return dp[s1L][s2L];  // 返回最后的结果
};
// @lc code=end

