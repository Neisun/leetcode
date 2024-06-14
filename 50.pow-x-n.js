/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 *
 * https://leetcode.cn/problems/powx-n/description/
 *
 * algorithms
 * Medium (38.04%)
 * Likes:    1352
 * Dislikes: 0
 * Total Accepted:    455.8K
 * Total Submissions: 1.2M
 * Testcase Example:  '2.00000\n10'
 *
 * 实现 pow(x, n) ，即计算 x 的整数 n 次幂函数（即，x^n^ ）。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：x = 2.00000, n = 10
 * 输出：1024.00000
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：x = 2.10000, n = 3
 * 输出：9.26100
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：x = 2.00000, n = -2
 * 输出：0.25000
 * 解释：2^-2 = 1/2^2 = 1/4 = 0.25
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * -100.0 < x < 100.0
 * -2^31 <= n <= 2^31-1
 * n 是一个整数
 * 要么 x 不为零，要么 n > 0 。
 * -10^4 <= x^n <= 10^4
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  /**
   * 我还在想，为啥这么简单呢，结果超时了，fuck
   */
  // let flag = n < 0 ? -1 : 1;
  // let ans = 1;
  // for (let i = 1; i <= Math.abs(n); i++) {
  //   ans *= x;
  // }
  // return flag === -1 ? 1/ans : ans;

  /**
   * 算法思路分析
   * 采用快速幂的方式
   * 以3^13 的来看
   * 可以转化为3^(1101)即将13转成二进制的方式
   * 于是转成3^8 * 3^4 * 3^1
   * 可以观察得出其规律即分别对应 2^3 2^2 2^0 也就是求n转成二进制中1的所对应的位数
   */
  if (x === 1) return 1;

  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  let ans = 1;
  while (n) {
    // 看当前二进制最后一位是不是0，如果是0我们不处理
    // 如果是1，就需要处理
    if (n & 1) {
      ans *= x;
    }
    x *= x;
    n = n >>> 1;
  }
  return ans;
};
// @lc code=end

