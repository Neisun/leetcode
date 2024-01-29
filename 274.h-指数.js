/*
 * @lc app=leetcode.cn id=274 lang=javascript
 *
 * [274] H 指数
 *
 * https://leetcode.cn/problems/h-index/description/
 *
 * algorithms
 * Medium (46.34%)
 * Likes:    449
 * Dislikes: 0
 * Total Accepted:    148K
 * Total Submissions: 318.9K
 * Testcase Example:  '[3,0,6,1,5]'
 *
 * 给你一个整数数组 citations ，其中 citations[i] 表示研究者的第 i 篇论文被引用的次数。计算并返回该研究者的 h 指数。
 * 
 * 根据维基百科上 h 指数的定义：h 代表“高引用次数” ，一名科研人员的 h 指数 是指他（她）至少发表了 h 篇论文，并且 至少 有 h
 * 篇论文被引用次数大于等于 h 。如果 h 有多种可能的值，h 指数 是其中最大的那个。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：citations = [3,0,6,1,5]
 * 输出：3 
 * 解释：给定数组表示研究者总共有 5 篇论文，每篇论文相应的被引用了 3, 0, 6, 1, 5 次。
 * 由于研究者有 3 篇论文每篇 至少 被引用了 3 次，其余两篇论文每篇被引用 不多于 3 次，所以她的 h 指数是 3。
 * 
 * 示例 2：
 * 
 * 
 * 输入：citations = [1,3,1]
 * 输出：1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == citations.length
 * 1 <= n <= 5000
 * 0 <= citations[i] <= 1000
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  // const n = citations.length;
  // if (n === 0) return 0;
  // // 排个序吧 从小到大
  // citations.sort((a, b) => a - b);
  // // 取中间的
  // const mid = Math.floor((n-1) / 2);
  // // 看一下中间的值和n哪个小，取哪个
  // // [0,1,3,5,6]
  // return citations[mid] <= n ? citations[mid] : n;


  // 上边错误思路
  // 下边是正确解法
  
  // 从小到大排序
  // citations.sort((a, b) => a - b);
  // const n = citations.length;
  // let h = 0;
  // for (let i = n - 1; i >= 0; i--) {
  //   if (h < citations[i]) {
  //     h++;
  //   }
  // }
  // return h;


  /**
   * 利用空间换时间的方式，维护一个数组来计数
   * 对于h指数，有h篇论文最少被引用了h次
   */
  // 创建一个数组统计次数
  // [100, 1, 2, 2, 3, 4, 5]
  // const n = citations.length;
  // // counter[i] 表示引用次数为i的论文的数量
  // const counter = new Array(n+1).fill(0);
  // for (let i = 0; i < n; i++) {
  //   if (citations[i] >= n) {
  //     counter[n]++;
  //   } else {
  //     counter[citations[i]]++;
  //   }
  // }
  // // console.log(counter);
  // let total = 0;
  // for (let i = n; i >= 0; i--) {
  //   total += counter[i];
  //   if (total >= i) {
  //     return i;
  //   }
  // }
  // return 0;

  /**
   * 总体分析一下这个题，这个题题意是有点难懂
   * 3 0 6 1 5
   * 可以排个序，从大到小
   * 6 5 3 1 0
   * 假设现在的h是1 那就说至少有一个citations[i]比1大，存在
   * 假设现在的h是2 说明至少有两个citations[i]比2大 存在
   * 假设现在的h是3 说明至少有三个citations[i]比3大 存在
   * 假设现在的h是4 说明至少有四个citations[i]比4大 不存在 返回3
   * 思路大概就是这样的
   */
  const n = citations.length;
  // 排序
  citations.sort((a, b) => b - a);
  // [3,1,1]
  let h = 0;
  for (let i = 0; i < n; i++) {
    if (i+1 <= citations[i]) {
      h = i+1;
    }
  }
  return h;
};
// @lc code=end

// 考虑一些特殊的情况
// [100, 1, 2, 2] 应该得出什么？按照定义 最少h篇论文，被引用了h次 所以是2
// 那么怎么计算出这个2呢？


// 如果只有 [3, 3, 3, 3]

// const citations = [3,0,6,1,5];
// const citations = [1,3,1];
// const citations = [100,2,7,9,10,20];
const citations = [100, 1, 2, 2];
const r = hIndex(citations);

