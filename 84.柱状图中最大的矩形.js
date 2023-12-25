/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 *
 * https://leetcode.cn/problems/largest-rectangle-in-histogram/description/
 *
 * algorithms
 * Hard (45.27%)
 * Likes:    2624
 * Dislikes: 0
 * Total Accepted:    381K
 * Total Submissions: 840.3K
 * Testcase Example:  '[2,1,5,6,2,3]'
 *
 * 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
 * 
 * 求在该柱状图中，能够勾勒出来的矩形的最大面积。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 
 * 
 * 输入：heights = [2,1,5,6,2,3]
 * 输出：10
 * 解释：最大的矩形为图中红色区域，面积为 10
 * 
 * 
 * 示例 2：
 * 
 * 
 * 
 * 
 * 输入： heights = [2,4]
 * 输出： 4
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 0 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  /**
   * 在[i...j]区间内，最大的面积等于 i..j内最小的高度 * j-1+1
   */

  /**
   * 先试一下暴力解法,
   * 暴力解法超时了
   */
  // let max = 0;
  // const len = heights.length;
  // for (let i = 0; i < len; i++) {
  //   for (let j = i; j < len; j++) {
  //     const h = Math.min(...heights.slice(i,j+1))
  //     // console.log(`${i}-${j}`, min);
  //     const w = j - i + 1;
  //     max = Math.max(max, w * h);
  //   }
  // }

  // console.log(max);

  // return max;

  /**
   * 单调栈的方式
   * 这是一个从栈顶到栈底的依次递增的栈
   * 与接雨水问题极为类似的，接雨水是找凹槽 即 大小大
   * 这是相反的 这是找 小大小即 左右两边第一个小的元素
   */
  // 首尾各插入一个0，来防止特殊情况如[2,4]这种
  heights.push(0);
  heights.unshift(0);
  const len = heights.length;
  const st = [0];
  let max = 0;
  for (let i = 1; i < len; i++) {
    while (st.length && heights[i] < heights[st[st.length-1]]) {
      const mid = st.pop();
      if (st.length) {
        const left = st[st.length-1];
        const right = i;
        const w = right - left - 1;
        const h = heights[mid];
        max = Math.max(max, w * h);
      }
    }
    st.push(i);
  }

  console.log(max);

  return max;
};
// @lc code=end
// const heights = [2,1,5,6,2,3];
const heights = [2,4];
largestRectangleArea(heights);

