/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  // 老规矩，按照每个区间的结束位置进行大小排个序
  // 老规矩错了，这回最好按照从头开始排序
  intervals.sort((a, b) => a[0] - b[0]);
  // 结果集
  const result = [];
  let start = intervals[0][0];
  let end = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];
    if (interval[0] <= end) { // 说明有重叠
      end = Math.max(end, interval[1]);
    } else { // 此时啊，新的一轮开始了
      result.push([start, end]);
      start = interval[0];
      end = interval[1];
    }
  }
  result.push([start, end]);
  return result;
};
// @lc code=end
const intervals = [[1,3],[2,6],[8,10],[15,18]];
merge(intervals);

