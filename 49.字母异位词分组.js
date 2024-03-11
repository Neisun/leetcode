/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 *
 * https://leetcode.cn/problems/group-anagrams/description/
 *
 * algorithms
 * Medium (67.73%)
 * Likes:    1833
 * Dislikes: 0
 * Total Accepted:    631.5K
 * Total Submissions: 929.9K
 * Testcase Example:  '["eat","tea","tan","ate","nat","bat"]'
 *
 * 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
 * 
 * 字母异位词 是由重新排列源单词的所有字母得到的一个新单词。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
 * 输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * 
 * 示例 2:
 * 
 * 
 * 输入: strs = [""]
 * 输出: [[""]]
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: strs = ["a"]
 * 输出: [["a"]]
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= strs.length <= 10^4
 * 0 <= strs[i].length <= 100
 * strs[i] 仅包含小写字母
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  /**
   * 这把改成分组了，范伟的话怎么说来着，组团忽悠我来啦？
   */

  /**
   * 思路1
   * 我擦，超时了，看来O(n^2)是不被允许的
   */
  // const gen = str => {
  //   return Array.from(str).sort().join('');
  // }

  // const map = new Map();
  // const result = []

  // // 遍历strs
  // for (let i = 0; i < strs.length; i++) {
  //   const str = gen(strs[i]);
  //   const arr = [];
  //   // 访问过
  //   if (map.get(str)) continue;
  //   arr.push(strs[i]);
  //   map.set(str, true);
  //   for (let j = i+1; j < strs.length; j++) {
  //     if (str === gen(strs[j])) {
  //       arr.push(strs[j]);
  //     }
  //   }
  //   result.push(arr)
  // }

  // console.log(result);
  // return result;

  /**
   * 思路二
   */
  const gen = str => Array.from(str).sort().join('')
  const sort_strs = strs.map(str => gen(str));
  // 形成 word: []
  const map = new Map();
  sort_strs.forEach(item => {
    if (!map.has(item)) {
      map.set(item, []);
    }
  })
  
  for (const str of strs) {
    map.get(gen(str)).push(str);
  }
  const result = []
  map.forEach(v => {
    result.push(v)
  })
  // console.log(result)
  return result;
};
// @lc code=end

// const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
const strs = ["",""]
groupAnagrams(strs)

