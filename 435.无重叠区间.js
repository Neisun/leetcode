/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  // 按照每个区间的终点排序，算出来不重叠区间的个数，使用总区间个数-不重叠区间个数就是答案
  intervals.sort((a, b) => a[1] - b[1]);
  let count = 1;
  let end = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];
    if (interval[0] >= end) { // 找到不重叠的区间
      count++;
      end = interval[1];
    }
  }
  return intervals.length - count;
};
// @lc code=end

