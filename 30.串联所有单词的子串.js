/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 *
 * https://leetcode.cn/problems/substring-with-concatenation-of-all-words/description/
 *
 * algorithms
 * Hard (39.29%)
 * Likes:    1071
 * Dislikes: 0
 * Total Accepted:    191K
 * Total Submissions: 487.5K
 * Testcase Example:  '"barfoothefoobarman"\n["foo","bar"]'
 *
 * 给定一个字符串 s 和一个字符串数组 words。 words 中所有字符串 长度相同。
 * 
 * s 中的 串联子串 是指一个包含  words 中所有字符串以任意顺序排列连接起来的子串。
 * 
 * 
 * 例如，如果 words = ["ab","cd","ef"]， 那么 "abcdef"， "abefcd"，"cdabef"，
 * "cdefab"，"efabcd"， 和 "efcdab" 都是串联子串。 "acdbef" 不是串联子串，因为他不是任何 words 排列的连接。
 * 
 * 
 * 返回所有串联子串在 s 中的开始索引。你可以以 任意顺序 返回答案。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "barfoothefoobarman", words = ["foo","bar"]
 * 输出：[0,9]
 * 解释：因为 words.length == 2 同时 words[i].length == 3，连接的子字符串的长度必须为 6。
 * 子串 "barfoo" 开始位置是 0。它是 words 中以 ["bar","foo"] 顺序排列的连接。
 * 子串 "foobar" 开始位置是 9。它是 words 中以 ["foo","bar"] 顺序排列的连接。
 * 输出顺序无关紧要。返回 [9,0] 也是可以的。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
 * 输出：[]
 * 解释：因为 words.length == 4 并且 words[i].length == 4，所以串联子串的长度必须为 16。
 * s 中没有子串长度为 16 并且等于 words 的任何顺序排列的连接。
 * 所以我们返回一个空数组。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
 * 输出：[6,9,12]
 * 解释：因为 words.length == 3 并且 words[i].length == 3，所以串联子串的长度必须为 9。
 * 子串 "foobarthe" 开始位置是 6。它是 words 中以 ["foo","bar","the"] 顺序排列的连接。
 * 子串 "barthefoo" 开始位置是 9。它是 words 中以 ["bar","the","foo"] 顺序排列的连接。
 * 子串 "thefoobar" 开始位置是 12。它是 words 中以 ["the","foo","bar"] 顺序排列的连接。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 10^4
 * 1 <= words.length <= 5000
 * 1 <= words[i].length <= 30
 * words[i] 和 s 由小写英文字母组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  /**
   * 哇哦，这个题有一点复杂了
   * words中的项目全排列，连成的字符串，在s中出现的起始位置
   * 如果以暴力的方式求解，那么时间复杂度会非常高
   * 暂时放在这，有点懒得想
   * 先用暴力的方式求一下
   * TODO: 慢慢想吧，不是很好想的一个题
   * 看了一下题解，大概写一下
   */
  // 本质上还是滑动窗口
  // 特殊情况处理
  // if (words.length === 0) return [];
  // // 字符串长度
  // const sl = s.length;
  // // 单个单词的长度
  // const wordLen = words[0].length;
  // // words中形成字符串的总长度
  // const totalLen = wordLen * words.length;
  // // 结果集
  // const result = [];

  // // 统计一下words中每个单词出现的次数，使用map记录
  // const wordMap = new Map();
  // for (const word of words) {
  //   // 写的稍微复杂点，但是可读性好
  //   if (wordMap.has(word)) {
  //     wordMap.set(word, wordMap.get(word) + 1);
  //   } else {
  //     wordMap.set(word, 1);
  //   }
  //   // 简便写法，易读性差点
  //   // wordMap.set(word, (wordMap.get(word) || 0) + 1);
  // }

  // // 遍历s，以每一个字符为起点，开始找
  // // 为了把字符串划分为 0 wordLen 2wordLen 3wordLen ...
  // // 1 wordLen+1 2wordLen+1 3wordLen+1 ...
  // for (let i = 0; i <= sl - totalLen; i++) {
  //   // 用来存储以i为起点，截取的word的出现的次数的map映射
  //   const tempMap = new Map();
  //   let count = 0;
  //   while (count < words.length) {
  //     // 截取起点
  //     const start = i + count * wordLen;
  //     // 截取终点
  //     const end = start + wordLen;
  //     // 截取出单词
  //     const word = s.substring(start, end);
  //     // 这块巧妙在不去操作原map即wordMap，而是每次构造新的map来进行匹配
  //     // 如果单词没在words出现
  //     if (!wordMap.has(word)) {
  //       // 退出
  //       break;
  //     } else {
  //       // 当前的子串
  //       tempMap.set(word, (tempMap.get(word) || 0) + 1);
  //       if (tempMap.get(word) > wordMap.get(word)) { // 多了
  //         break;
  //       }
  //     }
  //     count++;
  //   }
  //   if (count === words.length) {
  //     result.push(i);
  //   }
  // }
  // return result;


  /**
   * 另一种方式，使用滑动窗口的方式
   * 在反复观看题解 https://blog.lichangao.com/daily_practice/leetcode/string/sliding_window.html#_0030-%E4%B8%B2%E8%81%94%E6%89%80%E6%9C%89%E5%8D%95%E8%AF%8D%E7%9A%84%E5%AD%90%E4%B8%B2
   * 大概明白了
   * 有一个巧妙的点，就是怎么将s拆分成单词，常规做法是枚举每一个字符，其实不用，只需要枚举单个单词长度就可以,其他都是倍数关系
   */
  // 处理特殊情况
  if (words.length === 0) return [];
  // 单个单词长度
  const wordLen = words[0].length;
  // 单词个数
  const wordSize = words.length;
  // words中单词构成字符串的总长度
  const totalLen = wordLen * wordSize;
  // 目标字符串的总长度
  const sLen = s.length;
  // 结果集
  const result = [];

  // 记录words中每个单词出现的个数
  const wordMap = new Map();
  for (const word of words) {
    wordMap.set(word, (wordMap.get(word) || 0) + 1);
  }

  // 遍历
  for (let i = 0; i < wordLen; i++) {
    const window = new Map();
    let count = 0;
    // 遍历s 以j为起点
    for (let j = i; j + wordLen <= sLen; j += wordLen) {
      // 达到预期长度
      if (j >= totalLen + i) {
        // 取出头部的单词
        const word = s.substring(j - totalLen, j - totalLen + wordLen);
        // 窗口中去掉头部单词
        window.set(word, window.get(word)-1);
        if (window.get(word) < wordMap.get(word)) {
          count--;
        }
      }
      // 在没有达到预期长度之前，都是不断加入到窗口中
      // 截取出单词
      const word = s.substring(j, j + wordLen);
      window.set(word, (window.get(word) || 0) + 1);
      if (window.get(word) <= wordMap.get(word)) {
        count++;
      }

      if (count === wordSize) {
        result.push(j - (wordSize-1)*wordLen)
      }
    }
  }
  return result;
};
// @lc code=end

// const s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"];
const s = "barfoothefoobarman", words = ["foo","bar"];
// const s = "barfoofoobarthefoobarman", words = ["bar","foo","the"];
// const s = "lingmindraboofooowingdingbarrwingmonkeypoundcake", words = ["fooo","barr","wing","ding","wing"];
findSubstring(s, words);

