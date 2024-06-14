/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 *
 * https://leetcode.cn/problems/factorial-trailing-zeroes/description/
 *
 * algorithms
 * Medium (50.11%)
 * Likes:    832
 * Dislikes: 0
 * Total Accepted:    200.1K
 * Total Submissions: 396.6K
 * Testcase Example:  '3'
 *
 * 给定一个整数 n ，返回 n! 结果中尾随零的数量。
 * 
 * 提示 n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 3
 * 输出：0
 * 解释：3! = 6 ，不含尾随 0
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 5
 * 输出：1
 * 解释：5! = 120 ，有一个尾随 0
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：n = 0
 * 输出：0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= n <= 10^4
 * 
 * 
 * 
 * 
 * 进阶：你可以设计并实现对数时间复杂度的算法来解决此问题吗？
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  /**
   * 梳理算法逻辑
   * 假定输入的是5
   * 那么按照阶乘定义
   * 5 * 4 * 3 * 2 * 1
   * 如果按照阶乘定义计算，八成会溢出
   */
};
// @lc code=end

