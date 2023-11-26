/*
 * @lc app=leetcode.cn id=140 lang=javascript
 *
 * [140] 单词拆分 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  /**
   * 这个题必须使用回溯了，因为等同于求路径
   */
  const result = [];
  const sl = s.length;

  const backtracing = (start, path) => {
    // 回溯结束
    if (start === sl) {
      // 要使用path的副本，因为是引用数据类型
      result.push([...path].join(' '));
      return;
    }

    // 遍历
    for (let i = start; i < sl; i++) {
      const word = s.substring(start, i+1);
      if (!wordDict.includes(word)) continue;
      path.push(word);
      backtracing(i+1, path);
      path.pop();
    }
  }

  backtracing(0, []);

  // console.log(result);

  return result;
};
// @lc code=end
const s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"];
wordBreak(s, wordDict);
