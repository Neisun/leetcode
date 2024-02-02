/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 找出字符串中第一个匹配项的下标
 *
 * https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/description/
 *
 * algorithms
 * Easy (42.95%)
 * Likes:    2137
 * Dislikes: 0
 * Total Accepted:    991.7K
 * Total Submissions: 2.3M
 * Testcase Example:  '"sadbutsad"\n"sad"'
 *
 * 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0
 * 开始）。如果 needle 不是 haystack 的一部分，则返回  -1 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：haystack = "sadbutsad", needle = "sad"
 * 输出：0
 * 解释："sad" 在下标 0 和 6 处匹配。
 * 第一个匹配项的下标是 0 ，所以返回 0 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：haystack = "leetcode", needle = "leeto"
 * 输出：-1
 * 解释："leeto" 没有在 "leetcode" 中出现，所以返回 -1 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= haystack.length, needle.length <= 10^4
 * haystack 和 needle 仅由小写英文字符组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  /**
   * 第一种方式
   * 熟练使用api
   */
  // return haystack.indexOf(needle);

  /**
   * 第二种方式
   * 暴力匹配
   */
  // 取出两个字符串的长度
  // const hl = haystack.length;
  // const nl = needle.length;
  // for (let start = 0; start < hl; start++) {
  //   let i = start;
  //   let j = 0;
  //   while (i < hl && j < nl && haystack[i] === needle[j]) {
  //     i++;
  //     j++;
  //   }
  //   if (j === nl) {
  //     return start;
  //   }
  // }
  // return -1;

  /**
   * 第三种方式，最高效的方式，KMP的方式
   * 字符串匹配的最高效的方式，但是也是最难理解的方式，我们再来回顾一下
   */
  // 取出两个字符串的长度
  const hl = haystack.length;
  const nl = needle.length;
  const next = [];

  // 构造next数组 next[i]表示0~i的最长的相同的前后缀的长度
  // abab 前缀 a ab aba 后缀 b ab bab 最长相同的前后缀是ab
  // 创建next数组
  const generateNext = (next) => {
    // 第一个字符没有前后缀
    next[0] = 0;
    // 从第二个字符开始算
    let i = 1;
    // 记录长度
    let l = 0;
    while (i < nl) {
      if (needle[i] === needle[l]) {
        next[i] = l+1;
        i++;
        l++;
      } else {
        // 需要判断l是不是等于0的情况
        if (l === 0) {
          next[i] = 0;
          i++;
        } else {
          l = next[l-1];
        }
      }
    }
  }
  
  generateNext(next);

  // 遍历
  let j = 0;
  for (let i = 0; i < hl; i++) {
    // 保持i不动，移动匹配串
    while (j > 0 && j < nl && haystack[i] !== needle[j]) {
      j = next[j-1];
    }
    if (haystack[i] === needle[j]) {
      j++;
    }
    if (j === nl) { // 找到匹配项目了
      return i - nl + 1;
    }
  }

  return -1;
  
  
};
// @lc code=end
const haystack = "sadbutsad", needle = "sad"
// const haystack = "leetcode", needle = "leeto"
const r = strStr(haystack, needle);
console.log(r);

