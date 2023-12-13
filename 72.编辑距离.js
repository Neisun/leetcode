/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 *
 * https://leetcode.cn/problems/edit-distance/description/
 *
 * algorithms
 * Medium (62.81%)
 * Likes:    3232
 * Dislikes: 0
 * Total Accepted:    422.3K
 * Total Submissions: 672.5K
 * Testcase Example:  '"horse"\n"ros"'
 *
 * 给你两个单词 word1 和 word2， 请返回将 word1 转换成 word2 所使用的最少操作数  。
 * 
 * 你可以对一个单词进行如下三种操作：
 * 
 * 
 * 插入一个字符
 * 删除一个字符
 * 替换一个字符
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：word1 = "horse", word2 = "ros"
 * 输出：3
 * 解释：
 * horse -> rorse (将 'h' 替换为 'r')
 * rorse -> rose (删除 'r')
 * rose -> ros (删除 'e')
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：word1 = "intention", word2 = "execution"
 * 输出：5
 * 解释：
 * intention -> inention (删除 't')
 * inention -> enention (将 'i' 替换为 'e')
 * enention -> exention (将 'n' 替换为 'x')
 * exention -> exection (将 'n' 替换为 'c')
 * exection -> execution (插入 'u')
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= word1.length, word2.length <= 500
 * word1 和 word2 由小写英文字母组成
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
   * 这道题其实是非常困难的一道题，如果不使用动态规划去解，会非常复杂
   * dp数组如何定义?
   * dp[i][j]表示在word1中以i结尾的字符串 变成 在word2中以j结尾的字符串最少操作数
   * 
   * 如何状态转移？
   * 需要看 word1[i]与word2[j]是否一致
   * word1[i] === word2[j]
   * 那么可以做如下推导 dp[i][j] = dp[i-1][j-1]
   * 
   * word1[i] !== word2[j]
   * 可以做三种操作
   * 1. 插入
   * 2. 替换
   * 3. 删除
   * 我们一步步看这三种操作，该如何一步步推导
   * 
   * 插入
   * 等同于在 word1中i 的后边插入了 word2[j](这块儿非常抽象的，最好画图来看，建议看官方题解的视频，非常棒)
   * 于是比较就变成了 [0...i] 与 [0...j-1] 状态推导变为 dp[i][j-1]+1
   * 
   * 替换
   * 就等于说把 word1[i] 变成了 word2[j], 这时候他俩就相等了，只需要比较[0...i-1]与[0...j-1]即可，但是由于操作了一次，需要+1
   * 状态转移变成 dp[i-1][j-1]+1
   * 
   * 删除
   * 直接不要word1[i]了，等同于比较 [0...i-1]和[0...j]
   * dp[i-1][j]+1
   */
  
  // const wl1 = word1.length;
  // const wl2 = word2.length;

  // // console.log(wl1, wl2)

  // // 都是空字符串
  // if (wl1 === 0 && wl2 === 0) return 0;
  // // word1是空字符串，word2不是
  // if (wl1 === 0 && wl2 !== 0) return wl2;
  // // word1不是空字符串，word2是
  // if (wl1 !== 0 && wl2 === 0) return wl1; 

  // // 构造dp数组
  // const dp = new Array(wl1).fill(0).map(_ => new Array(wl2).fill(0));

  // // 初始化
  // // dp[i][0]
  // if (word1[0] === word2[0]) {
  //   dp[0][0] = 0;
  // } else {
  //   dp[0][0] = 1;
  // }

  // for (let i = 1; i < wl1; i++) {
  //   // bac a
  //   // abc d
  //   if (word1[i] === word2[0]) {
  //     dp[i][0] = dp[i-1][0]
  //   } else {
  //     dp[i][0] = dp[i-1][0] + 1;
  //   }
  // }

  // // console.log(dp);

  // // dp[0][j]的情况
  // // a bcd
  // // b abc
  // for (let j = 1; j < wl2; j++) {
  //   if (word2[j] === word1[0]) {
  //     dp[0][j] = dp[0][j-1]
  //   } else {
  //     dp[0][j] = dp[0][j-1] + 1;
  //   }
  // }

  // // 开始遍历
  // for (let i = 1; i < wl1; i++) {
  //   for (let j = 1; j < wl2; j++) {
  //     if (word1[i] === word2[j]) {
  //       dp[i][j] = dp[i-1][j-1]
  //     } else {
  //       dp[i][j] = Math.min(dp[i][j-1]+1, dp[i-1][j-1]+1, dp[i-1][j]+1)
  //     }
  //   }
  // }

  // // console.log(dp);

  // return dp[wl1-1][wl2-1];

  /**
   * 上边的思路是对的，但是如果以i和j结尾，会非常难写，所以不得已以i-1和j-1结尾
   * 这种算是解题技巧，也比较好写
   */

  const wl1 = word1.length;
  const wl2 = word2.length;

  const dp = new Array(wl1+1).fill(0).map(_ => new Array(wl2+1).fill(0));

  // 初始化
  for (let i = 0; i <= wl1; i++) {
    dp[i][0] = i;
  }

  for (let j = 0; j <= wl2; j++) {
    dp[0][j] = j;
  }

  // 遍历
  for (let i = 1; i <= wl1; i++) {
    for (let j = 1; j <= wl2; j++) {
      if (word1[i-1] === word2[j-1]) {
        dp[i][j] = dp[i-1][j-1]
      } else {
        dp[i][j] = Math.min(dp[i][j-1]+1, dp[i-1][j-1]+1, dp[i-1][j]+1)
      }
    }
  }

  return dp[wl1][wl2];
};
// @lc code=end

const word1 = "horse", word2 = "ros";
// const word1 = "intention", word2 = "executio";
// const word1 = "", word2 = "";
// const word1 = "horse", word2 = "";
// const word1 = "", word2 = "ros";
const r = minDistance(word1, word2);
console.log(r);

