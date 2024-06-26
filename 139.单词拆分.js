/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  /**
   * 回溯+记忆优化
   * 这个版本是动态规划的前身
   */
  // 选定一个起始点，开始遍历，每次切割(start, i)出来，看看是不是在wordDict中
  // const sl = s.length;
  // const memo = new Array(sl).fill(true);
  // const backtracing = (start) => {
  //   // 终止条件
  //   // 这个时候切割出来的是空字符串
  //   if (start === sl) return true;
  //   // 如果已经计算过，就不需要再往下走了，不然会超时
  //   if (!memo[start]) return false;
  //   for (let i = start; i < sl; i++) {
  //     const str = s.substring(start, i+1);
  //     if (!wordDict.includes(str)) continue;
  //     // 需要看看是否在wordDict中出现
  //     if (backtracing(i+1)) return true;
  //   }
  //   memo[start] = false;
  //   return false;
  // }
  // return backtracing(0);

  /**
   * 动态规划，看看能够从记忆优化的回溯算法中窥出一丝端倪，来写出动态规划
   * dp[j]的定义表示从0~j构成的字符串是否可以由字典中的单词拼接出来
   * 
   * 状态转移?
   * 如果 dp[j]是true，那么如果 [j, k] 够成的字符串可以由字典拼接出来，那么dp[k] = true
   */
  
  // // 字符串的长度
  // const sl = s.length;
  // // 构造dp数组
  // const dp = new Array(sl+1).fill(false);

  // // 初始化? 空字符串必然可以由字典拼接出来
  // dp[0] = true;

  // // 遍历
  // for (let i = 1; i <= sl; i++) {
  //   for (let k = 0; k < i; k++) {
  //     const str = s.substring(k, i);
  //     if (dp[k] && wordDict.includes(str)) {
  //       dp[i] = true;
  //     }
  //   }
  // }

  // // console.log(dp);

  // return dp[sl];


  /**
   * 2024-06-17 重新梳理
   * 貌似对这个题目已经没有了思路，二刷强化印象
   */
  // const n = s.length;
  // const dp = new Array(n+1).fill(false);
  // const dict = new Set(wordDict);
  // dp[0] = true;
  
  // for (let i = 1; i <= n; i++) {
  //   for (let j = 0; j < i; j++) {
  //     const word = s.substring(j, i);
  //     if (dp[j] && dict.has(word)) {
  //       dp[i] = true;
  //     }
  //   }
  // }
  // return dp[n];

  // 当做背包问题求解
  const sl = s.length;
  const wl = wordDict.length;
  const dp = new Array(sl+1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= sl; i++) {
    for (let j = 0; j < wl; j++) {
      if (i >= wordDict[j].length) {
        if (dp[i-wordDict[j].length] && s.slice(i-wordDict[j].length, i) === wordDict[j]) {
          dp[i] = true;
        }
      }
    }
  }

  return dp[sl];
};
// @lc code=end
const s = "leetcode", wordDict = ["leet", "code"];
wordBreak(s, wordDict);

