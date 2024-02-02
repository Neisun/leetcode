/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] N 字形变换
 *
 * https://leetcode.cn/problems/zigzag-conversion/description/
 *
 * algorithms
 * Medium (52.32%)
 * Likes:    2265
 * Dislikes: 0
 * Total Accepted:    640.4K
 * Total Submissions: 1.2M
 * Testcase Example:  '"PAYPALISHIRING"\n3'
 *
 * 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。
 * 
 * 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：
 * 
 * 
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * 
 * 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。
 * 
 * 请你实现这个将字符串进行指定行数变换的函数：
 * 
 * 
 * string convert(string s, int numRows);
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "PAYPALISHIRING", numRows = 3
 * 输出："PAHNAPLSIIGYIR"
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "PAYPALISHIRING", numRows = 4
 * 输出："PINALSIGYAHRPI"
 * 解释：
 * P     I    N
 * A   L S  I G
 * Y A   H R
 * P     I
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "A", numRows = 1
 * 输出："A"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * s 由英文字母（小写和大写）、',' 和 '.' 组成
 * 1 
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  /**
   * 这个题一开始，我是没看懂，太抽象了，看了一部分题解，有了点思路
   * 我想利用二维数组的方式确定坐标
   */
  // // 行数1
  // if (numRows === 1) return s;
  // // 创建二维数组，模拟坐标 列数暂时不确定
  // const grid = new Array(numRows).fill().map(_ => []);
  // // 行
  // let row = 0;
  // // 列
  // let col = 0;
  // // 方向
  // let down = false;
  // // 下面开始模拟这个过程
  // // row不断叠加 row++ 直到 == numRows-1, 开始变换row, row--,并且col++
  // for (let i = 0; i < s.length; i++) {
  //   // row == numRows-1或者0的时候开始变换方向
  //   if (row === numRows-1 || row === 0) {
  //     down = !down;
  //   }
  //   grid[row][col] = s[i];
  //   row += down ? 1 : -1;
  //   // col的变换规律
  //   // 方向向上 row从 numRows-1 ~ 0的过程 col++
  //   // 方向向下 row从 0 ~ numRows-1的过程 col++
  // }

  // 上边思路陷入困境了，没法找到col增加的规律


  /**
   * 换个思路进行，找规律
   * PAYPALISHIRING numRows = 4
   *  P     I    N
      A   L S  I G
      Y A   H R
      P     I
      从中找出规律
      下标: 0 1 2 3 4 5
      字母: P A Y P A L
      行数: 0 1 2 3 2 1

      下标: 6 7 8 9 10 11
      字母: I S H I R I
      行数: 0 1 2 3 2 1

      ....

      我们发现一直都是以这个组合循环下去
      组合的个数: 2 * numRows - 2
      
   */
  if (numRows === 1) return s;
  // 创建数组
  const str_arr = new Array(numRows).fill('');
  // 组合个数
  const groupNum = 2 * numRows - 2;
  // 遍历字符串
  for (let i = 0; i < s.length; i++) {
    const idx = i % groupNum;
    if (idx < numRows) {
      str_arr[idx] += s[i];
    } else {
      str_arr[groupNum - idx] += s[i];
    }
  }
  let result = '';
  for (const str of str_arr) {
    result += str;
  }
  return result;
};
// @lc code=end

const s = "PAYPALISHIRING", numRows = 4;
const r = convert(s, numRows);
console.log(r);

