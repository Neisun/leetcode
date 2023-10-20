/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  // 为了避免浪费，将孩子与饼干从大到小排序，让大饼干尽量分给大胃口的孩子
  g.sort((a, b) => b - a);
  s.sort((a, b) => b - a);
  console.log(g, s);
  const cookiesUsed = new Array(s.length).fill(0);
  const hasCookies = new Array(g.length).fill(0);
  for (let i = 0; i < s.length; i++) { // 遍历饼干
    for (let j = 0; j < g.length; j++) { // 遍历小孩子
      if (cookiesUsed[i]) continue; // 饼干用过了
      if (hasCookies[j]) { // 小孩有饼干了
        continue;
      } else {
        if (s[i] >= g[j]) { // 可以发一块饼干
          hasCookies[j] = 1;
          cookiesUsed[i] = 1;
        }
      }
    }
  }
  return hasCookies.filter(item => item >= 1).length;
};
// @lc code=end

// 测试
// const g = [1,2,3], s = [1,1];
const g = [1,2], s = [1,2,3];
const result = findContentChildren(g, s);
console.log(result);

