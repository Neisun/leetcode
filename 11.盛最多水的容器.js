/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 *
 * https://leetcode.cn/problems/container-with-most-water/description/
 *
 * algorithms
 * Medium (60.03%)
 * Likes:    4815
 * Dislikes: 0
 * Total Accepted:    1.2M
 * Total Submissions: 2M
 * Testcase Example:  '[1,8,6,2,5,4,8,3,7]'
 *
 * 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
 * 
 * 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 
 * 返回容器可以储存的最大水量。
 * 
 * 说明：你不能倾斜容器。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入：[1,8,6,2,5,4,8,3,7]
 * 输出：49 
 * 解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
 * 
 * 示例 2：
 * 
 * 
 * 输入：height = [1,1]
 * 输出：1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == height.length
 * 2 <= n <= 10^5
 * 0 <= height[i] <= 10^4
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  /**
   * 来一个双指针的方式
   * l起点 r指向起点后
   * 盛水量: 宽 * 高
   * 宽 = r - l
   * 高 = min(height[l], height[r])
   * 利用一个变量记录最大的量
   * 暴力双指针的方式，超时了，该怎么办呢？
   */
  // const len = height.length;
  // let max = 0;
  // for (let l = 0; l < len - 1; l++) {
  //   for (let r = l + 1; r < len; r++) {
  //     const w = r - l;
  //     const h = Math.min(height[l], height[r]);
  //     max = Math.max(max, w * h);
  //   }
  // }
  // return max;

  /**
   * 暴力解法超时了，还有什么好办法么
   * 双指针
   * l指向起始位置 r指向末尾位置
   * 现在的问题是什么时候移动指针呢？
   * 我们发现盛水的容积：取决于 宽 * 高
   * 比较 height[l] height[r]我们会发现
   * 如果如果高度小的那个比如说height[l] 没有变化，随着宽度的减少，会越来越小
   * 所以我们推理出 height[l]和height[r]打擂台比较，哪个小就移动哪个
   * l小 那么 l++
   * r小 那么 r--
   * 不断重复这个过程，并计算面积，找出最大的
   */
  let l = 0;
  let r = height.length - 1;
  let max = 0;
  while (l < r) {
    const w = r - l;
    const h = Math.min(height[l], height[r]);
    max = Math.max(max, w * h);
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  console.log(max);
  return max;
};
// @lc code=end

const height = [1,8,6,2,5,4,8,3,7];
// const height = [1,1];
const r = maxArea(height);

