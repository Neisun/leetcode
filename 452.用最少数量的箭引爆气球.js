/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  // 这道题目的是找重叠区间最多，一只箭可以穿过这些重叠区域，然后再找新的重叠区域组合再给一只箭
  // 先排序，我们的箭从第一个气球的结束点发出来寻找，所以我们以终点排序
  points.sort((a, b) => a[1] - b[1]);
  let count = 1;
  let start = points[0][1];
  for (let i = 1; i < points.length; i++) {
    const point = points[i];
    if (point[0] > start) { // 不重叠的区间，需要再发射一支箭
      count++;
      start = point[1];
    }
  }
  return count;
};
// @lc code=end
const points = [[10,16],[2,8],[1,6],[7,12]];
findMinArrowShots(points);
