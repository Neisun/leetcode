/*
 * @lc app=leetcode.cn id=135 lang=javascript
 *
 * [135] 分发糖果
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  const len = ratings.length;
  // 存储每个孩子糖果的数组
  const candyList = new Array(len).fill(1);

  // 使用两次遍历的方式

  // 遍历孩子
  for (let i = 0; i < len - 1; i++) {
    // 与右边对比 就是跟后边对比
    if (ratings[i+1] > ratings[i]) {
      candyList[i+1] = candyList[i] + 1;
    }
  }

  // 与左边对比 就是跟前边对比
  for (let i = len - 1; i >= 1; i--) {
    if (ratings[i-1] > ratings[i]) {
      candyList[i-1] = Math.max(candyList[i] + 1, candyList[i-1]);
    }
  }

  console.log(candyList)
  // 统计结果
  return candyList.reduce((pre, cur) => pre + cur);
};
// @lc code=end

// const ratings = [1,0,2];
// const ratings = [1,2,2];
const ratings = [1,3,4,5,2];
const r = candy(ratings);
console.log(r);

