/*
 * @lc app=leetcode.cn id=212 lang=javascript
 *
 * [212] 单词搜索 II
 *
 * https://leetcode.cn/problems/word-search-ii/description/
 *
 * algorithms
 * Hard (43.51%)
 * Likes:    861
 * Dislikes: 0
 * Total Accepted:    106K
 * Total Submissions: 245.7K
 * Testcase Example:  '[["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]]\n' +
  '["oath","pea","eat","rain"]'
 *
 * 给定一个 m x n 二维字符网格 board 和一个单词（字符串）列表 words， 返回所有二维网格上的单词 。
 * 
 * 单词必须按照字母顺序，通过 相邻的单元格
 * 内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母在一个单词中不允许被重复使用。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：board =
 * [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]],
 * words = ["oath","pea","eat","rain"]
 * 输出：["eat","oath"]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：board = [["a","b"],["c","d"]], words = ["abcb"]
 * 输出：[]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == board.length
 * n == board[i].length
 * 1 <= m, n <= 12
 * board[i][j] 是一个小写英文字母
 * 1 <= words.length <= 3 * 10^4
 * 1 <= words[i].length <= 10
 * words[i] 由小写英文字母组成
 * words 中的所有字符串互不相同
 * 
 * 
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  // // 创建Trie树
  // class TrieNode {
  //   constructor() {
  //     this.children = {};
  //     this.isEnd = false;
  //   }
  // }

  // // 一个完整的Trie类
  // class Trie {
  //   constructor() {
  //     this.node = new TrieNode();
  //   }
  //   /**
  //    * 插入单词
  //    * @param {string} word 
  //    */
  //   insert(word) {
  //     let node = this.node;
  //     for (const char of word) {
  //       if (!node.children[char]) {
  //         node.children[char] = new TrieNode();
  //       }
  //       node = node.children[char];
  //     }
  //     // 一个完整单词的结束符
  //     node.isEnd = true;
  //   }
  //   /**
  //    * 查找以prefix为前缀的节点
  //    * @param {string} prefix 
  //    * @returns {TrieNode}
  //    */
  //   searchPrefix(prefix) {
  //     let node = this.node;
  //     for (const char of prefix) {
  //       if (node.children[char]) {
  //         node = node.children[char];
  //       } else {
  //         return null;
  //       }
  //     }
  //     return node;
  //   }
  //   /**
  //    * 查找是否存在以word开头的节点
  //    * @param {string} word 
  //    * @returns {boolean}
  //    */
  //   startWith(word) {
  //     const node = this.searchPrefix(word);
  //     return node !== null;
  //   }

  //   /**
  //    * 查找以前缀表是否存在单词word
  //    * @param {string} word 
  //    * @returns {boolean}
  //    */
  //   search(word) {
  //     const node = this.searchPrefix(word);
  //     return node !== null && node.isEnd;
  //   }
  // }

  // // 创建前缀树
  // const trie = new Trie();

  // // 将单词插入到trie中
  // for (const word of words) {
  //   trie.insert(word);
  // }

  // const result = [];
  // const row = board.length;
  // const col = board[0].length;

  // // dfs方法
  // const dfs = (x, y, word, node) => {
  //   if (node.isEnd) {
  //     result.push(word);
  //     // 去重，避免重复插入， 为什么要这么写，因为words中给出的单词是不重复的，找到一个后就不需要再找了
  //     node.isEnd = false;
  //   }

  //   // 越界
  //   if (x < 0 || x >= row || y < 0 || y >= col) return;

  //   // 记录一下board上的节点
  //   const store = board[x][y];

  //   if (store === '#' || !node.children[store]) return;

  //   // 前进
  //   board[x][y] = '#';
  //   // 四个方向走
  //   word += store;
  //   dfs(x, y-1, word, node.children[store]);
  //   dfs(x, y+1, word, node.children[store]);
  //   dfs(x-1, y, word, node.children[store]);
  //   dfs(x+1, y, word, node.children[store]);
  //   // 回溯
  //   board[x][y] = store;
  // }

  // // 遍历board
  // for (let x = 0; x < row; x++) {
  //   for (let y = 0; y < col; y++) {
  //     dfs(x, y, '', trie.node);
  //   }
  // }

  // return result;

  // 新的解法
  class TrieNode {
    constructor() {
      this.children = {};
      this.isEnd = false;
    }
  }

  class Trie {
    constructor() {
      this.node = new TrieNode();
    }

    insert(word) {
      let node = this.node;
      for (const char of word) {
        if (!node.children[char]) {
          node.children[char] = new TrieNode();
        }
        node = node.children[char];
      }
      // 完整的单词，添加一个标识符记录
      node.isEnd = true;
    }

    searchPrefix(prefix) {
      let node = this.node;
      for (const char of prefix) {
        if (!node.children[char]) {
          return null;
        } else {
          node = node.children[char];
        }
      }
      return node;
    }

    startWith(word) {
      const node = this.searchPrefix(word);
      // 如果能找到不为null的节点，那就说明存在以word这个单词开头的单词
      return node !== null;
    }

    search(word) {
      const node = this.searchPrefix(word);
      // 如果能找到不为null，并且node.isEnd标识是true就是一个完整的单词
      return node !== null && node.isEnd;
    }
  }

  const trie = new Trie();
  // 构建Trie树
  for (const word of words) {
    trie.insert(word);
  }

  // 获取网格的行与列
  const row = board.length;
  const col = board[0].length;

  // 记录网格访问
  const visited = new Array(row).fill().map(_ => new Array(col).fill(false));

  // 记录结果
  const result = [];

  // dfs函数
  const dfs = (x, y, word, node) => {
    if (node.isEnd) {
      result.push(word);
      node.isEnd = false;
    }
    
    // 越界
    if (x < 0 || x >= row || y < 0 || y >= col) return;


    const char = board[x][y];
    // word += char;
    const newWord = word + char;

    // 访问过
    if (visited[x][y]) return;

    // 没有以这字母开头的节点 或者 以这个newWord作为判断依据
    // if (!trie.startWith(newWord)) return; // 这个很耗时，就差在这个代码上，时间复杂度一直过不去
    if (!node.children[char]) return;

    visited[x][y] = true;
    dfs(x+1, y, newWord, node.children[char]);
    dfs(x-1, y, newWord, node.children[char]);
    dfs(x, y-1, newWord, node.children[char]);
    dfs(x, y+1, newWord, node.children[char]);
    // 回溯
    visited[x][y] = false;
  }

  // 遍历board
  for (let x = 0; x < row; x++) {
    for (let y = 0; y < col; y++) {
      dfs(x, y, '', trie.node);
    }
  }

  console.log(result);

  return result;
  
};
// @lc code=end

