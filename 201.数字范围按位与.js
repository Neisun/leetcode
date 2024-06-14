/*
 * @lc app=leetcode.cn id=201 lang=javascript
 *
 * [201] 数字范围按位与
 *
 * https://leetcode.cn/problems/bitwise-and-of-numbers-range/description/
 *
 * algorithms
 * Medium (54.26%)
 * Likes:    516
 * Dislikes: 0
 * Total Accepted:    93.2K
 * Total Submissions: 170.4K
 * Testcase Example:  '5\n7'
 *
 * 给你两个整数 left 和 right ，表示区间 [left, right] ，返回此区间内所有数字 按位与 的结果（包含 left 、right
 * 端点）。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：left = 5, right = 7
 * 输出：4
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：left = 0, right = 0
 * 输出：0
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：left = 1, right = 2147483647
 * 输出：0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function(left, right) {
  /**
   * 算法思路分析
   * [left, right] 区间内所有数字都进行按位与运算
   * 一开始的思路从left 到 right 遍历
   * 进行与运算，想法很美好，但是超时了
   * 有什么更好的思路？？
   * 举例来看
   * 5-7
   * 5 6 7
   * 转成二进制分别是
   * 101 110 111
   */
  // let ans = left;
  // for (let i = left; i <= right; i++) {
  //   ans = ans & i;
  // }
  // return ans;

  /**
   * https://leetcode.cn/problems/bitwise-and-of-numbers-range/solutions/384938/shu-zi-fan-wei-an-wei-yu-by-leetcode-solution/?envType=study-plan-v2&envId=top-interview-150
   * 看官方题解给出的示例图
   * 我们可以清晰的明白了其思路
   */
  let shift = 0;
  while (left < right) {
    left >>= 1;
    right >>= 1;
    shift++;
  }
  return left << shift;
};
// @lc code=end

