/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  /**
   * 这次小偷的偷法改变了，因为房子连成一圈了
   * 于是情况就变得复杂了
   * 于是得分三种情况讨论了
   * 我们拿 1 2 3 4 5
   * 1. 包括头元素，不包括尾 1 2 3 4
   * 2. 包括尾元素，不包括头 2 3 4 5
   * 3. 不包含头尾 2 3 4
   * 
   * dp[i] 对于当前房间i的最大金额
   * 状态转移
   * 不偷: 从dp[i-1]获取
   * 偷：从dp[i-2]+nums[i]获取
   * dp[i] = max(dp[i-1], dp[i-2]+nums[i])
   * 初始化?
   */
  const len = nums.length;

  // 特殊情况处理
  // 只有一个元素
  if (len === 1) return nums[0];
  // 只有俩个元素
  if (len === 2) {
    return Math.max(nums[0], nums[1]);
  }
  
  // 写一个方法专用来遍历数组
  const traverse = (start, end) => {
    const dp = new Array(len);
    dp[start] = nums[start];
    dp[start+1] = Math.max(nums[start], nums[start+1]);
    for (let i = start+2; i < end; i++) {
      dp[i] = Math.max(dp[i-1], dp[i-2]+nums[i]);
    }
    return dp[end-1];
  }

  // 第一种情况，包含头，不包含尾
  const result1 = traverse(0, len-1);

  // 第二种情况， 包含尾，不包含头
  const result2 = traverse(1, len);

  // 第三种情况，不包含头尾，由于第一种情况和第二种情况包含了，将这个情况包含在内了，所以这一步可以节省了
  // const result3 = traverse(1, len-1);

  // return Math.max(result1, result2, result3);
  return Math.max(result1, result2);
};
// @lc code=end

