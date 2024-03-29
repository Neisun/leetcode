/*
 * @lc app=leetcode.cn id=275 lang=javascript
 *
 * [275] H 指数 II
 *
 * https://leetcode.cn/problems/h-index-ii/description/
 *
 * algorithms
 * Medium (45.64%)
 * Likes:    309
 * Dislikes: 0
 * Total Accepted:    100.6K
 * Total Submissions: 220.9K
 * Testcase Example:  '[0,1,3,5,6]'
 *
 * 给你一个整数数组 citations ，其中 citations[i] 表示研究者的第 i 篇论文被引用的次数，citations 已经按照 升序排列
 * 。计算并返回该研究者的 h 指数。
 * 
 * h 指数的定义：h 代表“高引用次数”（high citations），一名科研人员的 h 指数是指他（她）的 （n 篇论文中）至少 有 h
 * 篇论文分别被引用了至少 h 次。
 * 
 * 请你设计并实现对数时间复杂度的算法解决此问题。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：citations = [0,1,3,5,6]
 * 输出：3
 * 解释：给定数组表示研究者总共有 5 篇论文，每篇论文相应的被引用了 0, 1, 3, 5, 6 次。
 * 由于研究者有3篇论文每篇 至少 被引用了 3 次，其余两篇论文每篇被引用 不多于 3 次，所以她的 h 指数是 3 。
 * 
 * 示例 2：
 * 
 * 
 * 输入：citations = [1,2,100]
 * 输出：2
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == citations.length
 * 1 <= n <= 10^5
 * 0 <= citations[i] <= 1000
 * citations 按 升序排列
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  /**
   * 要找h篇论文最少每篇论文被引用了h次
   */
  // let h = 0;
  // const n = citations.length;
  // for (let i = n - 1; i >= 0; i--) {
  //   if (h < citations[i]) {
  //     h++;
  //   }
  // }
  // return h;

  /**
   * 还可以使用二分法，因为已经排好序了
   * 所以我们想着往二分的方向上靠，怎么使用二分呢？
   */
  const n = citations.length;
  let l = 0;
  let r = n - 1;
  while (l < r) {
    let mid = Math.floor((l+r+1)/2);
    if (citations[mid] >= mid) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return l;
};
// @lc code=end

