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
  /**
   * 原始思路
   * 老规矩，按照每个区间的结束位置进行大小排个序
   * 老规矩错了，这回最好按照从头开始排序
   */
  // intervals.sort((a, b) => a[0] - b[0]);
  // // 结果集
  // const result = [];
  // let start = intervals[0][0];
  // let end = intervals[0][1];
  // for (let i = 1; i < intervals.length; i++) {
  //   const interval = intervals[i];
  //   if (interval[0] <= end) { // 说明有重叠
  //     end = Math.max(end, interval[1]);
  //   } else { // 此时啊，新的一轮开始了
  //     result.push([start, end]);
  //     start = interval[0];
  //     end = interval[1];
  //   }
  // }
  // result.push([start, end]);
  // return result;

  /**
   * 2024-03-07的二刷复习
   */
  // 先排序，暂时的思路按照每个区间的第一个数排序
  intervals.sort((a, b) => a[0] - b[0]);
  // console.log(intervals)
  // 开始合并区间的逻辑
  // 起始下标
  let startIndex = 0;
  // 数组长度
  const len = intervals.length;
  // 结果集
  const result = [];
  // 如何比较呢？
  while (startIndex < len) {
    const range = [];
    // 区间起始值
    let startNum = intervals[startIndex][0];
    // 区间结束值
    let endNum = intervals[startIndex][1];
    // 插入起始区间
    range.push(startNum);
    // 跟下一个区间比较
    // 如果下个区间的起始值 < 前区间的结束值，说明有重叠
    // 比较一下哪个结束值大，就取哪个，然后继续比较
    while (startIndex + 1 < len && endNum >= intervals[startIndex+1][0]) {
      // 哪个结束值大，取哪个
      endNum = Math.max(endNum, intervals[startIndex+1][1]);
      startIndex++
    }
    range.push(endNum);
    result.push(range);
    startIndex++;
  }
  console.log(result);
  return result;
};
// @lc code=end
// const intervals = [[2,9],[15,18],[4,7],[8,10]];
const intervals = [[1,4],[4,5]];
merge(intervals);

