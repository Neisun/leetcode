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
  // 对words进行排序处理
  // words.sort((a, b) => {
  //   // 两个字符串长度不一致，短的排在前，长的排在后
  //   if (a.length !== b.length) {
  //     return a.length - b.length;
  //   } else {
  //     // 长度一致，那么按照字典序返回，所以，我们需要将字典序靠前的排在后边
  //     return b.localeCompare(a);
  //   }
  // })


  // let result = '';
  // const wordDict = new Set();
  // wordDict.add('');
  
  // // 遍历words
  // for (const word of words) {
  //   // 截取每个word的除了最后一个字符
  //   const _word = word.slice(0, word.length - 1);
  //   if (wordDict.has(_word)) {
  //     result = word;
  //     wordDict.add(word)
  //   }
  // }

  // return result;

  /**** 分割线 *****/

  /**
   * 上述处理方式有一点难懂的地方就是b.localcompare(a)是反着来的
   * 对于这种逐步查找的我们尝试使用前缀树来求解
   */
  // 首先需要构建前缀树
  class TrieNode {
    constructor() {
      this.children = {};
      this.isEnd = false;
    }
  }

  // 构建Trie
  // 他的数据结构是这样的
  
  class Trie {
    constructor() {
      this.node = new TrieNode();
      // this.children = new TrieNode();
      // this.isEnd = false;
    }

    // insert方法
    insert(word) {
      let node = this.node;
      for (const char of word) {
        if (!node.children[char]) {
          node.children[char] = new TrieNode();
        }
        node = node.children[char];
      }
      node.isEnd = true;
    }

    // search方法，确切地说，应该叫匹配前缀，searchPrefix
    search(word) {
      let node = this.node;
      for (const char of word) {
        // 这段代码是关键
        if (!node.children[char] || !node.children[char].isEnd) return false;
        node = node.children[char];
      }
      return node && node.isEnd;
    }
  }


  const trie = new Trie();

  // 遍历words，构建Trie树
  for (const word of words) {
    trie.insert(word);
  }

  let longest = '';

  // 遍历words，利用Trie树寻找最长的单词
  for (const word of words) {
    if (trie.search(word)) {
      if (word.length > longest.length || (word.length === longest.length && word.localeCompare(longest) < 0)) {
        longest = word;
      }
    }
  }


  // 需要明白为什么banana为什么search的时候是false
  // 因为没有以b ba ban ...之类的前缀

  return longest;

};
// @lc code=end

const words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
// const words = ["m","mo","moc","moch","mocha","l","la","lat","latt","latte","c","ca","cat"]
// const words = ["yo","ew","fc","zrc","yodn","fcm","qm","qmo","fcmz","z","ewq","yod","ewqz","y"]
const r = longestWord(words);
console.log(r)

