/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 *
 * https://leetcode.cn/problems/summary-ranges/description/
 *
 * algorithms
 * Easy (54.85%)
 * Likes:    377
 * Dislikes: 0
 * Total Accepted:    146.3K
 * Total Submissions: 266.8K
 * Testcase Example:  '[0,1,2,4,5,7]'
 *
 * 给定一个  无重复元素 的 有序 整数数组 nums 。
 * 
 * 返回 恰好覆盖数组中所有数字 的 最小有序 区间范围列表 。也就是说，nums 的每个元素都恰好被某个区间范围所覆盖，并且不存在属于某个范围但不属于
 * nums 的数字 x 。
 * 
 * 列表中的每个区间范围 [a,b] 应该按如下格式输出：
 * 
 * 
 * "a->b" ，如果 a != b
 * "a" ，如果 a == b
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [0,1,2,4,5,7]
 * 输出：["0->2","4->5","7"]
 * 解释：区间范围是：
 * [0,2] --> "0->2"
 * [4,5] --> "4->5"
 * [7,7] --> "7"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0,2,3,4,6,8,9]
 * 输出：["0","2->4","6","8->9"]
 * 解释：区间范围是：
 * [0,0] --> "0"
 * [2,4] --> "2->4"
 * [6,6] --> "6"
 * [8,9] --> "8->9"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= nums.length <= 20
 * -2^31 <= nums[i] <= 2^31 - 1
 * nums 中的所有值都 互不相同
 * nums 按升序排列
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  // 使用map记录一下每个数字出现
  const map = new Map();
  // 因为数字各不相同，所以无需多余判断
  for (const num of nums) {
    map.set(num, true);
  }
  const len = nums.length;
  // 结果集
  const result = [];
  // 起始位置
  let start = 0;
  while (start < len) {
    const list = [];
    let startNum = nums[start];
    while (map.has(startNum)) {
      list.push(startNum);
      start++;
      startNum++;
    }
    // 可以直接在此处求解，不需要在遍历一次result中list
    // TODO: 留着继续优化
    result.push(list);
  }
  // console.log(result);
  return result.map(list => {
    if (list.length === 1) {
      return `${list[0]}`
    } else {
      return `${list[0]}->${list[list.length - 1]}`
    }
  })

  /**
   * 再想一下别的思路，我觉得会有更好的思路
   */
};
// @lc code=end

// const nums = [0,1,2,4,5,7];
// const nums = [0,2,3,4,6,8,9];
// const r = summaryRanges(nums);
// console.log(r)

