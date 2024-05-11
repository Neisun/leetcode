/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 *
 * https://leetcode.cn/problems/word-search/description/
 *
 * algorithms
 * Medium (46.44%)
 * Likes:    1811
 * Dislikes: 0
 * Total Accepted:    523.6K
 * Total Submissions: 1.1M
 * Testcase Example:  '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCCED"'
 *
 * 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false
 * 。
 * 
 * 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word =
 * "ABCCED"
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word =
 * "SEE"
 * 输出：true
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word =
 * "ABCB"
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == board.length
 * n = board[i].length
 * 1 
 * 1 
 * board 和 word 仅由大小写英文字母组成
 * 
 * 
 * 
 * 
 * 进阶：你可以使用搜索剪枝的技术来优化解决方案，使其在 board 更大的情况下可以更快解决问题？
 * 
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  // 个人感觉需要构建Trie树
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
      // 打上标记
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
      return node !== null;
    }

    search(word) {
      const node = this.searchPrefix(word);
      return node !== null && node.isEnd;
    }
  }


  const row = board.length;
  const col = board[0].length;

  const visited = new Array(row).fill().map(_ => new Array(col).fill(false));

  let result = false;

  const trie = new Trie();
  trie.insert(word);

  const dfs = (x, y, curWord, node) => {
    if (curWord === word) {
      result = true;
      return;
    }

    // 越界
    if (x < 0 || x >= row || y < 0 || y >= col) return;

    // 访问过
    if (visited[x][y]) return;

    const char = board[x][y];

    // node不存在
    if (!node.children[char]) return;

    visited[x][y] = true;
    dfs(x+1, y, curWord + char, node.children[char]);
    dfs(x-1, y, curWord + char, node.children[char]);
    dfs(x, y+1, curWord + char, node.children[char]);
    dfs(x, y-1, curWord + char, node.children[char]);
    visited[x][y] = false;
  }

  for (let x = 0; x < row; x++) {
    for (let y = 0; y < col; y++) {
      dfs(x, y, '', trie.node)
    }
  }

  return result;


  // TODO: 使用另一种简洁的方式

};
// @lc code=end

