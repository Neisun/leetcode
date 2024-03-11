/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 *
 * https://leetcode.cn/problems/happy-number/description/
 *
 * algorithms
 * Easy (63.59%)
 * Likes:    1528
 * Dislikes: 0
 * Total Accepted:    478.2K
 * Total Submissions: 747.3K
 * Testcase Example:  '19'
 *
 * 编写一个算法来判断一个数 n 是不是快乐数。
 * 
 * 「快乐数」 定义为：
 * 
 * 
 * 对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
 * 然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
 * 如果这个过程 结果为 1，那么这个数就是快乐数。
 * 
 * 
 * 如果 n 是 快乐数 就返回 true ；不是，则返回 false 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 19
 * 输出：true
 * 解释：
 * 1^2 + 9^2 = 82
 * 8^2 + 2^2 = 68
 * 6^2 + 8^2 = 100
 * 1^2 + 0^2 + 0^2 = 1
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 2
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= n <= 2^31 - 1
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  /**
   * 找一下规律
   * 如果这个数是1 -> 1
   * 2 -> 
   * 4 -> 
   * 16 -> 
   * 1 + 36 -> 
   * 37 -> 
   * 9 + 49 -> 
   * 58 -> 
   * 25 + 64
   * 89 -> 64 + 81
   * 145 -> 1 + 16 + 25
   * 42 -> 16 + 4
   * 20 -> 4 + 0
   * 4出现过 变成了死循环了，return false
   */
  // const visited = new Map();
  // const calculate = n => {
  //   if (n === 1) {
  //     return true;
  //   } else if (visited.has(n)) {
  //     return false
  //   } else {
  //     visited.set(n, true);
  //     // 数字转成字符串方便求解
  //     const num_str = `${n}`;
  //     // 字符串转成数组方便计算
  //     const num_arr = num_str.split('');
  //     // 计算
  //     const nextNum = num_arr.reduce((pre, next) => {
  //       return pre + next**2;
  //     }, 0)
  //     // console.log(nextNum)
  //     return calculate(nextNum);
  //   }
  // }
  // return calculate(n);

  /**
   * 对于数字的处理还可以有更好的处理方式，而不是转化成字符串那么处理
   */
  const visited = new Map();
  // 辅助函数
  const calculate = (n, visited) => {
    if (n === 1) return true;
    if (visited.has(n)) return false;
    visited.set(n, true);
    let sum = 0;
    while (n > 0) {
      // 不断与10取模处理，得出当前位的数值
      const digest = n % 10;
      sum += digest**2;
      // 取模后剩下的数
      n = Math.floor(n / 10);
    }
    return calculate(sum, visited);
  }
  return calculate(n, visited);
};
// @lc code=end
// const n = 19;
const n = 2;
const r = isHappy(n)
console.log(r);
