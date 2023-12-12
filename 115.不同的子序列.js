/*
 * @lc app=leetcode.cn id=115 lang=javascript
 *
 * [115] 不同的子序列
 *
 * https://leetcode.cn/problems/distinct-subsequences/description/
 *
 * algorithms
 * Hard (51.51%)
 * Likes:    1172
 * Dislikes: 0
 * Total Accepted:    158.7K
 * Total Submissions: 307.6K
 * Testcase Example:  '"rabbbit"\n"rabbit"'
 *
 * 给你两个字符串 s 和 t ，统计并返回在 s 的 子序列 中 t 出现的个数，结果需要对 10^9 + 7 取模。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "rabbbit", t = "rabbit"
 * 输出：3
 * 解释：
 * 如下所示, 有 3 种可以从 s 中得到 "rabbit" 的方案。
 * rabbbit
 * rabbbit
 * rabbbit
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "babgbag", t = "bag"
 * 输出：5
 * 解释：
 * 如下所示, 有 5 种可以从 s 中得到 "bag" 的方案。 
 * babgbag
 * babgbag
 * babgbag
 * babgbag
 * babgbag
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length, t.length <= 1000
 * s 和 t 由英文字母组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
  /**
   * 使用回溯先看一下
   * 回溯超时了，看来还需要别的方式求解
   */
  // let result = 0;
  // const sl = s.length;
  // const tl = t.length;
  // const backtrace = (start, path) => {
  //   // console.log(path, start);
  //   if (path.length >= tl) {
  //     if (path.join('') === t) {
  //       result++;
  //     }
  //     return;
  //   }
  //   for (let i = start; i < sl; i++) {
  //     // 剪枝操作一下，如果从起始位置截取的字符串长度 < tl，也不用找了
  //     if (path.length > tl) continue;
  //     path.push(s[i]);
  //     backtrace(i+1, path);
  //     path.pop();
  //   }
  // }

  // backtrace(0, []);

  // return result%(10e9 + 7);

  /**
   * 动态规划
   * 如何定义dp数组
   * dp[i][j]是以i结尾的s中，以j结尾的t中出现的个数是dp[i][j]
   * 这么说看起来比较饶，其实是在s中从[0..i]中选子序列 出现[0..j]t的个数
   * 
   * 状态转移？
   * 两种情况
   * s[i] === t[j]
   * 结果来自于两种情况
   * 即 [0...i-1]中的出现的子序列中出现[0...j-1]的个数，翻译一下从前i-1的子串中出现t中到j-1字符串的个数
   * 与 [0...i]中出现 [0...j-1]的个数, 即 前i个子串中出现t中到j-1字符串的个数
   * dp[i][j] = dp[i-1][j-1]+dp[i][j-1]
   * 
   * s[i] !== t[j]
   * 这时候考虑的是前i-1中出现以j结尾的字符串的个数
   */

  const sl = s.length;
  const tl = t.length;

  // 构造dp数组
  const dp = new Array(sl).fill(0).map(_ => new Array(tl).fill(0));

  // 初始化
  // dp[i][0]
  // for (let i = 0; i < sl; i++) {
  //   if (s[i] === t[0]) {
  //     dp[i][0] = dp[i-1][0]
  //   }
  // }

  if (s[0] === t[0]) {
    dp[0][0] = 1;
  }

  // 初始化
  // dp[i][0]
  for (let i = 1; i < sl; i++) {
    if (s[i] === t[0]) {
      dp[i][0] = dp[i-1][0] + 1
    } else {
      dp[i][0] = dp[i-1][0];
    }
  }

  // dp[0][j]
  for (let j = 0; j < tl; j++) {
    const str = t.substring(0, j+1);
    if (s[0] === str) {
      dp[0][j] = 1;
    }
  }

  // console.log(dp);
  

  // 遍历
  for (let i = 1; i < sl; i++) {
    for (let j = 1; j < tl; j++) {
      if (s[i] ===t[j]) {
        dp[i][j] = dp[i-1][j-1] + dp[i-1][j];
      } else {
        dp[i][j] = dp[i-1][j];
      }
    }
  }

  console.log(dp);

  return dp[sl-1][tl-1];
};
// @lc code=end

// const s = "rabbbit", t = "rabbit";
const s = "babgbag", t = "bag"


numDistinct(s,t);

