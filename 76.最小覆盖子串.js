/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 *
 * https://leetcode.cn/problems/minimum-window-substring/description/
 *
 * algorithms
 * Hard (45.42%)
 * Likes:    2830
 * Dislikes: 0
 * Total Accepted:    516K
 * Total Submissions: 1.1M
 * Testcase Example:  '"ADOBECODEBANC"\n"ABC"'
 *
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 ""
 * 。
 * 
 * 
 * 
 * 注意：
 * 
 * 
 * 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
 * 如果 s 中存在这样的子串，我们保证它是唯一的答案。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "ADOBECODEBANC", t = "ABC"
 * 输出："BANC"
 * 解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "a", t = "a"
 * 输出："a"
 * 解释：整个字符串 s 是最小覆盖子串。
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: s = "a", t = "aa"
 * 输出: ""
 * 解释: t 中两个字符 'a' 均应包含在 s 的子串中，
 * 因此没有符合条件的子字符串，返回空字符串。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * ^m == s.length
 * ^n == t.length
 * 1 <= m, n <= 10^5
 * s 和 t 由英文字母组成
 * 
 * 
 * 
 * 进阶：你能设计一个在 o(m+n) 时间内解决此问题的算法吗？
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  /**
   * 先采用暴力解法试一下
   * 暴力解法超时了
   * 看来思路是没问题的
   */
  // // 记录一下s的长度
  // const sl = s.length;
  // // 记录一下t的长度
  // const tl = t.length;
  // // 记录符合条件的字符串长度
  // let minLen = Infinity;
  // // 记录结果
  // let result = '';
  // // 利用map记录t中每个字符的个数
  // const tMap = new Map();
  // for (const char of t) {
  //   tMap.set(char, (tMap.get(char) || 0) + 1);
  // }

  // // 遍历s，给定起始位置
  // for (let i = 0; i + tl <= sl; i++) {
  //   const map = new Map();
  //   let count = 0;
  //   for (let j = i; j < sl; j++) {
  //     const char = s[j];
  //     // 记录一下字符的个数
  //     map.set(char, (map.get(char) || 0) + 1);
  //     if (map.get(char) <= tMap.get(char)) {
  //       count++;
  //     }
  //     if (count === tl) {
  //       if (minLen > j - i + 1) {
  //         minLen = j - i + 1;
  //         result = s.substring(i, j+1);
  //       }
  //     }
  //   }
  // }
  // return result;

  /**
   * 滑动窗口求解，一次遍历
   * 0 1 2 3 4 5 6 7 8 9 10 11 12
   * A D O B E C O D E B A  N  C
   * TODO: 2024-02-23 重想一遍，之前的逻辑略显混乱
   */
  // 统计一下目标字符串中字符出现的次数
  const tMap = new Map();
  for (const char of t) {
    tMap.set(char, (tMap.get(char) || 0) + 1);
  }

  const windowMap = new Map();
  let count = 0;
  let start = 0;
  let minLen = Infinity;
  let result = '';
  // 遍历字符串s
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    windowMap.set(char, (windowMap.get(char) || 0) + 1);
    // 字符出现在t中
    // if (tMap.has(char)) {
    //   if (windowMap.get(char) <= tMap.get(char)) {
    //     count++;
    //   }
    // }

    // 字符出现在t中 逻辑简化
    if (windowMap.get(char) <= tMap.get(char)) {
      count++;
    }


    // 找到了匹配的结果，开始不断移动左边的起点
    while (count === t.length) {
      if (minLen > i - start + 1) {
        minLen = i - start + 1;
        result = s.substring(start, i + 1);
      }
      // 窗口中的首个字符
      const startChar = s[start];
      // 去掉窗口中的第一个字符
      windowMap.set(startChar, windowMap.get(startChar) - 1);
      // 如果字符出现在t中，并且个数要小于tMap，不能等于，因为已经去掉了一个
      // if (tMap.has(startChar)) {
      //   if (windowMap.get(startChar) < tMap.get(char)) {
      //     count--;
      //   }
      // }
      // 简化逻辑
      if (windowMap.get(startChar) < tMap.get(startChar)) {
        count--;
      }
      start++;
    }
  }

  console.log(result);
  return result;
};
// @lc code=end

const s = "ADOBECODEBANC", t = "ABC";
// const s = "a", t = "a";
// const s = "a", t = "aa";
minWindow(s, t);

