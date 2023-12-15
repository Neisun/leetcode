/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 *
 * https://leetcode.cn/problems/palindromic-substrings/description/
 *
 * algorithms
 * Medium (67.06%)
 * Likes:    1267
 * Dislikes: 0
 * Total Accepted:    309.1K
 * Total Submissions: 460.8K
 * Testcase Example:  '"abc"'
 *
 * 给你一个字符串 s ，请你统计并返回这个字符串中 回文子串 的数目。
 * 
 * 回文字符串 是正着读和倒过来读一样的字符串。
 * 
 * 子字符串 是字符串中的由连续字符组成的一个序列。
 * 
 * 具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "abc"
 * 输出：3
 * 解释：三个回文子串: "a", "b", "c"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "aaa"
 * 输出：6
 * 解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 1000
 * s 由小写英文字母组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  /**
   * dp数组如何定义?
   * dp[i][j]表示以i开头以j结尾的字符串回文子串的数量
   * 如果 s[i] === s[j] 表示[i...j]这是一个回文串
   * 那么 dp[i][j] = dp[i-1][j-1]+1
   * s[i] !== s[j]
   * dp[i][j] = dp[i][j-1] + dp[i-1][j]
   * 
   * 不知道上述推断是不是正确的，我需要把 abc这种字符串构成的dp数组模拟出来
   * 根据模拟
   * 决定以一维数组的形式构造dp
   * dp[i]表示以i结尾的回文字符串的数量
   */
  // const len = s.length;
  // const dp = new Array(len).fill(0);
  // // 初始化
  // dp[0] = 1;

  // // 遍历
  // for (let i = 1; i < len; i++) {
  //   for (let j = 1; j <= i; j++) {
  //     if (s[j] === s[i]) {
  //       dp[i] += dp[j-1]+1;
  //     } else {
  //       dp[i] += dp[j-1];
  //     }
  //   }
  // }

  // console.log(dp);

  // return dp[len-1];

  /**
   * 以上的思路全错。。。。。
   * 预留TODO: 下午再想
   * 首先看dp数组的定义
   * dp[i][j]表示[i,j]范围内，或者说以i开头j结尾的子串是否是回文子串
   * 有如下论证，如果[i...j]是回文串，根据回文串的特点 s[i] === s[j] 并且 [i+1,...j-1]必然是回文串
   * 如果 s[i] !== s[j] 那么[i...j]不是回文串
   * 
   * 状态推导
   * s[i] !== s[j] dp[i][j] = false;
   * 
   * s[i] === s[j] 如果 dp[i+1][j-1] = true，那么 dp[i][j] = true
   * 
   * 注意注意注意，重要的事情说三遍，由于dp[i][j]是由i+1,j-1推导出来的，所以i得遍历是从到小，j的遍历从小到大哦
   */

  // const l = s.length;

  // // 构造dp
  // const dp = new Array(l).fill(false).map(_ => new Array(l).fill(false));

  // let count = 0;

  // 初始化?
  // 单个字符肯定是true 由于其考虑到了一个字符的情况，所以可以不用初始化
  // for (let i = 0; i < l; i++) {
  //   dp[i][i] = true;
  // }

  // 遍历
  // for (let i = l-1; i >= 0; i--) { // i从大到小遍历
  //   for (let j = 0; j < l; j++) { // j从小到大遍历
  //     if (i <= j) {
  //       if (s[i] === s[j]) {
  //         if (j - i <= 1) { // 只有一个或者两个字符的时候
  //           dp[i][j] = true;
  //           count++
  //         } else if (dp[i+1][j-1]) { 
  //           count++;
  //           dp[i][j] = true;
  //         }
  //       }
  //     }
  //   }
  // }

  // 上述遍历条件简写
  // for (let i = l-1; i >= 0; i--) { // i从大到小遍历
  //   for (let j = i; j < l; j++) { // j从小到大遍历
  //     if (s[i] === s[j]) {
  //       if (j - i <= 1) {
  //         dp[i][j] = true;
  //         count++;
  //       } else if (dp[i+1][j-1]) {
  //         dp[i][j] = true;
  //         count++;
  //       }
  //     }
  //   }
  // }
  

  // console.log(count);

  // console.log(dp);

  // return count;

  /**
   * 双指针方式
   * 确定中心点，分别向两边移动
   * 遇到 s[i] === s[j] 说明[i,j]（包含i，j）区间内的字符串是回文串，计数+1,然后分别向两边移动
   * 
   * 只不过我没有想到的点，我只考虑到以一个字符当中心点，没考虑到以两个字符当中心点的情况
   * 至于如果是3个、或者4个或者更多的点当中心点都是 以1或者2个当中心点的变形
   * 
   * 写到这个时候，我有点明白为什么要考虑这两种情况了，因为回文串可以是奇数或者偶数的
   * 举例子来看 abba
   * 以1位中心点考虑，可以得到 a b b a
   * 以2为中心点考虑，可以得到 bb abba
   * 所以 对于abba，回文子串的个数是 以1位中心点 + 以2位中心点的和
   * 
   * 会不会出现以1位中心点 和 以2位中心点出现重复的情况呢
   * 看一个稍微极端的例子
   * aaaa
   * 以1位中心点，可以得到 a1 a2 a1a2a3 a3 a2a3a4 a4
   * 以2位中心点，可以得到 a1a2 a2a3 a1a2a3a4 a3a4
   * 没有重复的情况出现
   */
  const len = s.length;
  let count = 0;

  // 以1位为中心点(回文串是奇数的情况)
  for (let i = 0; i < len; i++) {
    let j = i; // 左指针
    let k = i; // 右指针
    while (j >= 0 && k < len && s[j] === s[k]) {
      j--;
      k++;
      count++;
    }
  }

  // 以2位为中心点(回文串是偶数的情况)
  for (let i = 0; i < len; i++) {
    let j = i;
    let k = i + 1;
    while (j >= 0 && k < len && s[j] === s[k]) {
      j--;
      k++;
      count++;
    }
  }

  // console.log(count);

  return count;
};
// @lc code=end

// const s = 'abc';
const s = 'aaaa';

countSubstrings(s);
