/*
 * @lc app=leetcode.cn id=738 lang=javascript
 *
 * [738] 单调递增的数字
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// var monotoneIncreasingDigits = function(n) {
//   // 我们发现如果这个数字本身就是单调递增的就返回本身
//   if (isIncreasedNum(n)) return n;
//   // 如果不是单调递增的，我们就得出规则
//   const len = n.toString().length;
//   const base = Math.pow(10, len - 1);
//   let result = Math.floor(n / base) - 1;
//   for (let i = 0; i < len - 1; i++) {
//     result += '9';
//   }
//   return Number(result);
// };

// // 写一个函数判断当前数字是不是单调递增的
// /**
//  * 
//  * @param {number} number 
//  */
// function isIncreasedNum(number) {
//   const strNum = number.toString();
//   for (let i = 0; i < strNum.length - 1; i++) {
//     if (strNum[i+1] < strNum[i]) return false;
//   }
//   return true;
// }

var monotoneIncreasingDigits = function(n) {
  // 上述思路存在问题，我们改写一下
  // 从后向前遍历
  const strNum = Array.from(n.toString()).map(item => parseInt(item, 10));
  const len = strNum.length;
  let changeIndex = Infinity;
  for (let i = len - 1; i > 0; i--) {
    if (strNum[i-1] > strNum[i]) {
      strNum[i-1] -= 1;
      changeIndex = i;
    }
  }

  for (let i = changeIndex; i < len; i++) {
    strNum[i] = 9;
  }
  
  console.log(strNum);

  return Number(strNum.join(''));

};
// @lc code=end
// const n = 1234;
// const n = 7218;
const n = 10;
monotoneIncreasingDigits(n);


