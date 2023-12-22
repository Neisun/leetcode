/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 *
 * https://leetcode.cn/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (63.18%)
 * Likes:    4930
 * Dislikes: 0
 * Total Accepted:    828.7K
 * Total Submissions: 1.3M
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出：6
 * 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：height = [4,2,0,3,2,5]
 * 输出：9
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == height.length
 * 1 <= n <= 2 * 10^4
 * 0 <= height[i] <= 10^5
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  // 一道hard级别的难度的题目
  // 我们需要使用三种方式求解，只是为了更好的理解题目
  // 其中暴力和双指针的方式是一定要会的
  // 单调栈是效率更优版
  
  /**
   * 暴力解法
   * 计算每个格子的雨水，需要找出左边最高的，与右边最高的
   * 然后 min(lH, rH) - h 就是当前格子可以接的雨水
   * 时间复杂度上是O(n^2)，不知道能不能通过，试一试吧
   * 不给通过，超时了
   */
  // const len = height.length;
  // let sum = 0;
  // for (let i = 0; i < len; i++) {
  //   // 首尾不考虑，因为没有比头更靠前，比尾更靠后的元素了
  //   if (i === 0 || i === len - 1) continue;
  //   // 找左边比当前元素大的最大值
  //   let lH = height[i];
  //   for (let j = i - 1; j >= 0; j--) {
  //     if (height[j] > lH) {
  //       lH = height[j];
  //     }
  //   }
  //   // 找右边最大的值
  //   let rH = height[i];
  //   for (let k = i + 1; k < len; k++) {
  //     if (height[k] > rH) {
  //       rH = height[k];
  //     }
  //   }

  //   // 计算雨水和
  //   sum += Math.min(lH,rH) - height[i];
  // }

  // // console.log(sum);

  // return sum;


  /**
   * 暴力搜索优化版，之前在找当前元素的左边最大值或者右边最大值的过程中
   * 会有许多重复操作
   * 为了避免重复操作，我们可以使用数组记录一下
   * 记忆优化，时间复杂度上通过了
   */
  // const len = height.length;
  // const lMaxList = new Array(len).fill(0);
  // const rMaxList = new Array(len).fill(0);
  // let sum = 0;


  // lMaxList[0] = height[0];
  // for (let i = 1; i < len; i++) {
  //   lMaxList[i] = Math.max(lMaxList[i-1], height[i]);
  // }

  // rMaxList[len-1] = height[len-1];
  // for (let i = len - 2; i >= 0; i--) {
  //   rMaxList[i] = Math.max(rMaxList[i+1], height[i]);
  // }

  // for (let i = 0; i < len; i++) {
  //   sum += Math.min(lMaxList[i], rMaxList[i]) - height[i];
  // }

  // console.log(sum);

  // return sum;

  /**
   * 单调栈方式
   * 放弃了，很难理解
   */
  const len = height.length;
  const stack = [0];
  let sum = 0;
  
  // 遍历
  for (let i = 1; i < len - 1; i++) {
    while (stack.length && height[i] > height[stack[stack.length-1]]) {
      const index = stack.pop();
      const midH = height[index];
      const rH = height[i];
      const lH = height[stack[stack.length-1]];
      sum += Math.min(lH,rH) - midH;
    }
    stack.push(i);
  }

  console.log(sum);
};
// @lc code=end

// const height = [0,1,0,2,1,0,1,3,2,1,2,1];
const height = [4,2,0,3,2,5];
trap(height);
