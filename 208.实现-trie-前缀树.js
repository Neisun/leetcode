/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 *
 * https://leetcode.cn/problems/implement-trie-prefix-tree/description/
 *
 * algorithms
 * Medium (71.91%)
 * Likes:    1635
 * Dislikes: 0
 * Total Accepted:    326.4K
 * Total Submissions: 453.5K
 * Testcase Example:  '["Trie","insert","search","search","startsWith","insert","search"]\n' +
  '[[],["apple"],["apple"],["app"],["app"],["app"],["app"]]'
 *
 * Trie（发音类似 "try"）或者说 前缀树
 * 是一种树形数据结构，用于高效地存储和检索字符串数据集中的键。这一数据结构有相当多的应用情景，例如自动补完和拼写检查。
 * 
 * 请你实现 Trie 类：
 * 
 * 
 * Trie() 初始化前缀树对象。
 * void insert(String word) 向前缀树中插入字符串 word 。
 * boolean search(String word) 如果字符串 word 在前缀树中，返回 true（即，在检索之前已经插入）；否则，返回
 * false 。
 * boolean startsWith(String prefix) 如果之前已经插入的字符串 word 的前缀之一为 prefix ，返回 true
 * ；否则，返回 false 。
 * 
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 输入
 * ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
 * [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
 * 输出
 * [null, null, true, false, true, null, true]
 * 
 * 解释
 * Trie trie = new Trie();
 * trie.insert("apple");
 * trie.search("apple");   // 返回 True
 * trie.search("app");     // 返回 False
 * trie.startsWith("app"); // 返回 True
 * trie.insert("app");
 * trie.search("app");     // 返回 True
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * word 和 prefix 仅由小写英文字母组成
 * insert、search 和 startsWith 调用次数 总计 不超过 3 * 10^4 次
 * 
 * 
 */

// @lc code=start

// var Trie = function() {
//   this.prefix = new Map();
// };

// /** 
//  * @param {string} word
//  * @return {void}
//  */
// Trie.prototype.insert = function(word) {
//   this.prefix.set(word, true);
// };

// /** 
//  * @param {string} word
//  * @return {boolean}
//  */
// Trie.prototype.search = function(word) {
//   return this.prefix.has(word);
// };

// /** 
//  * @param {string} prefix
//  * @return {boolean}
//  */
// Trie.prototype.startsWith = function(prefix) {
//   for (const [w, v] of this.prefix) {
//     if (this.compare(w, prefix)) return true;
//   }
//   return false;
// };

// Trie.prototype.compare = function (word, prefix) {
//   const len = prefix.length;
//   for (let i = 0; i < len; i++) {
//     if (word[i] !== prefix[i]) return false;
//   }
//   return true;
// }


var Trie = function() {
  // 构建根节点
  this.children = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  /**
   * 举例说明，对于要插入的单词 goo google
   * 首先插入的是 goo，那么我们构造出的结构如下
   * {
      g: {
        o: {
          o: {
            isEnd: true
          }
        }
      }
    }
    更直观的表述是类似于树的结构
             g
            /
           o
          /
         o 这里是一个完整的单词，然后打一个标记isEnd
    接下来我们插入google这个单词
    我们还是从头开始找，然后插入得到的数据结构是
    {
      g: {
        o: {
          o: {
            isEnd: true,
            g: {
              l: {
                e: {
                  isEnd: true
                }
              }
            }
          }
        }
      }
    }
    更直观的树形展示
                  g
                 /
                o
               /
              o => 这里打一个标记isEnd
             /
            g
           /
          l
         /
        e => 这里打一个标记isEnd
   */
  let node = this.children;
  for (const char of word) {
    if (!node[char]) {
      node[char] = {};
    }
    node = node[char];
  }
  node.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let node = this.children;
  for (const char of word) {
    if (!node[char]) return false;
    node = node[char];
  }
  return !!node && !!node.isEnd
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let node = this.children;
  for (const char of prefix) {
    if (!node[char]) return false;
    node = node[char];
  }
  return !!node;
};


/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end


// 上述解法，即使通过了测试用例，但这个做法并不是前缀树或者叫前缀表的数据结构，所以我们重新写一下

const trie = new Trie();
trie.insert('apple');
console.log(trie.search('apple')); // true
console.log(trie.search('app')); // false
console.log(trie.startsWith('app')); // true
trie.insert('app');
console.log(trie.search('app')); // true