/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 *
 * https://leetcode.cn/problems/insert-interval/description/
 *
 * algorithms
 * Medium (42.66%)
 * Likes:    869
 * Dislikes: 0
 * Total Accepted:    197.5K
 * Total Submissions: 462K
 * Testcase Example:  '[[1,3],[6,9]]\n[2,5]'
 *
 * 给你一个 无重叠的 ，按照区间起始端点排序的区间列表。
 * 
 * 在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：intervals = [[1,3],[6,9]], newInterval = [2,5]
 * 输出：[[1,5],[6,9]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * 输出：[[1,2],[3,10],[12,16]]
 * 解释：这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。
 * 
 * 示例 3：
 * 
 * 
 * 输入：intervals = [], newInterval = [5,7]
 * 输出：[[5,7]]
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：intervals = [[1,5]], newInterval = [2,3]
 * 输出：[[1,5]]
 * 
 * 
 * 示例 5：
 * 
 * 
 * 输入：intervals = [[1,5]], newInterval = [2,7]
 * 输出：[[1,7]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * intervals[i].length == 2
 * 0 
 * intervals 根据 intervals[i][0] 按 升序 排列
 * newInterval.length == 2
 * 0 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  /**
   * 这个题跟合并区间，可以说是如出一辙了，把要插入的区间，放进原数组
   * 在按照合并区间拍一遍就可以嘞
   */
  intervals.push(newInterval);
  // 排序
  intervals.sort((a, b) => a[0] - b[0]);
  // 开始遍历逻辑
  const result = [];
  // 起始节点
  let startIndex = 0;
  while (startIndex < intervals.length) {
    const list = [];
    let startNum = intervals[startIndex][0];
    let endNum = intervals[startIndex][1];
    list.push(startNum);
    // 持续寻找
    while (startIndex + 1 < intervals.length && endNum >= intervals[startIndex+1][0]) {
      endNum = Math.max(endNum, intervals[startIndex+1][1]);
      startIndex++;
    }
    list.push(endNum);
    result.push(list);
    startIndex++;
  }
  // console.log(result)
  return result;
};
// @lc code=end

// const intervals = [[1,3],[6,9]], newInterval = [2,5]
const intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]

insert(intervals, newInterval);

