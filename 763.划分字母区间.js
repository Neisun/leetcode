/*
 * @lc app=leetcode.cn id=763 lang=javascript
 *
 * [763] 划分字母区间
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
  /**
   * 这道题其实是比较难的，因为确实不好想呀
   * 不知道该怎么划分区间
   */
  // 第一次遍历，我们使用一个hash map 来记录每个字母出现的最后的位置
  const map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = i;
  }

  // 第二次遍历找位置
  let left = 0;
  let right = 0;
  const result = [];
  for (let i = 0; i < s.length; i++) {
    right = Math.max(right, map[s[i]]);
    if (i === right) {
      result.push(right - left + 1);
      left = right + 1;
    }
  }
  return result;
};
// @lc code=end

