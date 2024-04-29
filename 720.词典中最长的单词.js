/*
 * @lc app=leetcode.cn id=720 lang=javascript
 *
 * [720] 词典中最长的单词
 *
 * https://leetcode.cn/problems/longest-word-in-dictionary/description/
 *
 * algorithms
 * Medium (51.94%)
 * Likes:    349
 * Dislikes: 0
 * Total Accepted:    69.3K
 * Total Submissions: 133.1K
 * Testcase Example:  '["w","wo","wor","worl","world"]'
 *
 * 给出一个字符串数组 words 组成的一本英语词典。返回 words 中最长的一个单词，该单词是由 words 词典中其他单词逐步添加一个字母组成。
 * 
 * 若其中有多个可行的答案，则返回答案中字典序最小的单词。若无答案，则返回空字符串。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：words = ["w","wo","wor","worl", "world"]
 * 输出："world"
 * 解释： 单词"world"可由"w", "wo", "wor", 和 "worl"逐步添加一个字母组成。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
 * 输出："apple"
 * 解释："apply" 和 "apple" 都能由词典中的单词组成。但是 "apple" 的字典序小于 "apply" 
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= words.length <= 1000
 * 1 <= words[i].length <= 30
 * 所有输入的字符串 words[i] 都只包含小写字母。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
  /**
   * 1. 方式一
   * 我首先想到的是暴力的方式，使用hash map
   */
  // const wordDict = new Map();

  // // 遍历所有的单词，记录到map中
  // for (const word of words) {
  //   wordDict.set(word, true);
  // }

  // let result = '';
  // let longest = 0;

  // // 排序
  // words.sort((a, b) => {
  //   if (a.length !== b.length) {
  //     return a.length - b.length;
  //   } else {
  //     return a.localeCompare(b);
  //   }
  // })

  // console.log(words);

  // // 遍历所有的单词，然后添加26个小写字母
  // // a 97
  // // z 122
  // // String.fromCharCode()
  // for (const word of words) {
  //   for (let i = 97; i <= 122; i++) {
  //     let _word = word;
  //     _word += String.fromCharCode(i);
  //     if (wordDict.has(_word)) {
  //       if (_word.length > longest) {
  //         longest = _word.length;
  //         result = _word;
  //       }
  //     }
  //   }
  // }
  
  // return result;

  /**** 分割线 *****/
  // 上述方法，貌似解决不了，因为顺序的问题
};
// @lc code=end

// const words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
// const words = ["m","mo","moc","moch","mocha","l","la","lat","latt","latte","c","ca","cat"]
// const words = ["yo","ew","fc","zrc","yodn","fcm","qm","qmo","fcmz","z","ewq","yod","ewqz","y"]
// const r = longestWord(words);
// console.log(r)

