/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 *
 * https://leetcode.cn/problems/word-ladder/description/
 *
 * algorithms
 * Hard (48.34%)
 * Likes:    1333
 * Dislikes: 0
 * Total Accepted:    201.5K
 * Total Submissions: 416.2K
 * Testcase Example:  '"hit"\n"cog"\n["hot","dot","dog","lot","log","cog"]'
 *
 * 字典 wordList 中从单词 beginWord 和 endWord 的 转换序列 是一个按下述规格形成的序列 beginWord -> s1 ->
 * s2 -> ... -> sk：
 * 
 * 
 * 每一对相邻的单词只差一个字母。
 * 对于 1 <= i <= k 时，每个 si 都在 wordList 中。注意， beginWord 不需要在 wordList 中。
 * sk == endWord
 * 
 * 
 * 给你两个单词 beginWord 和 endWord 和一个字典 wordList ，返回 从 beginWord 到 endWord 的 最短转换序列
 * 中的 单词数目 。如果不存在这样的转换序列，返回 0 。
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：beginWord = "hit", endWord = "cog", wordList =
 * ["hot","dot","dog","lot","log","cog"]
 * 输出：5
 * 解释：一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog", 返回它的长度 5。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：beginWord = "hit", endWord = "cog", wordList =
 * ["hot","dot","dog","lot","log"]
 * 输出：0
 * 解释：endWord "cog" 不在字典中，所以无法进行转换。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= beginWord.length <= 10
 * endWord.length == beginWord.length
 * 1 <= wordList.length <= 5000
 * wordList[i].length == beginWord.length
 * beginWord、endWord 和 wordList[i] 由小写英文字母组成
 * beginWord != endWord
 * wordList 中的所有字符串 互不相同
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  /**
   * 第一步
   * 我们需要形成一个找到下一个对应word的字典
   * 对于示例来说
   * beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
   * hit => [hot]
   * hot => [dot, lot]
   * dot => [hot, dog, lot]
   * dog => [dot, log, cog]
   * lot => [hot, dot, log]
   * log => [dog, lot, cog]
   * cog => [dog, log]
   * 
   * 第二步
   * 按深度优先搜索去查找，每次遍历下一个列表中的元素，需要判断下一个元素是否被访问过，访问过则跳过
   * 对于没访问过的，我们加入到结果集中，当下一个元素是endWord的时候结束递归，并且记录最短的长度
   * 
   * 
   * 找的是最近的点，所以使用深度优先搜索不合适了，会导致超时，改成bfs的方式
   */
  
  // ** 第一步 形成一个字典
  const dictMap = new Map();

  // 形成字典的方法
  const generateDict = (targetWord, wordList) => {
    dictMap.set(targetWord, []);
    for (const word of wordList) {
      let count = 0;
      for (let i = 0; i < targetWord.length; i++) {
        if (targetWord[i] !== word[i]) {
          count++;
        }
      }
      if (count === 1) {
        if (dictMap.get(targetWord)) {
          dictMap.get(targetWord).push(word);
        }
      }
    }
  }

  // 形成字典
  generateDict(beginWord, wordList);
  for (const targetWord of wordList) {
    generateDict(targetWord, wordList);
  }
  
  console.log(dictMap);

  // ** 第二步
  // const visited = new Map();
  // let result = Infinity;

  // // DFS函数
  // const dfs = (currentWord, path) => {
  //   if (currentWord === endWord) {
  //     result = Math.min(result, path.length);
  //     return;
  //   }
  //   // 获取要遍历的单词列表
  //   const list = dictMap.get(currentWord);
  //   for (const word of list) {
  //     if (!visited.get(word)) {
  //       path.push(word);
  //       visited.set(word, true);
  //       dfs(word, path);
  //       path.pop();
  //       visited.set(word, false);
  //     }
  //   }
  // }
  // visited.set(beginWord, true);
  // dfs(beginWord, [beginWord]);
  
  // console.log(result === Infinity ? 0 : result);

  // return result === Infinity ? 0 : result;

  // 应该使用bfs的方式
  const queue = [beginWord];
  const visited = new Map();
  visited.set(beginWord, 1);

  while (queue.length) {
    const word = queue.shift();
    const count = visited.get(word);
    const list = dictMap.get(word);
    for (const currentWord of list) {
      if (currentWord === endWord) {
        return count + 1;
      };
      if (!visited.get(currentWord)) {
        queue.push(currentWord);
        visited.set(currentWord, count+1);
      }
    }
  }


  return 0;
};
// @lc code=end

const beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]

// const beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]

// const beginWord = "a", endWord = "c", wordList = ["a","b","c"]

ladderLength(beginWord, endWord, wordList)

