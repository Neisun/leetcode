/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  /**
   * 3中收入情况
   * 5 10 20
   * 
   * 3中找零情况
   * 5块不找零
   * 10块找 1个5块
   * 20块 先找1个10块1个5块 如果没有10块找3个5块
   */
  let five = 0;
  let ten = 0;
  let twenty = 0;
  for (const bill of bills) {
    if (bill === 5) {
      five++;
    } else if (bill === 10) {
      five--;
      ten++;
      if (five < 0) return false;
    } else {
      twenty++;
      if (ten) {
        ten--;
        five--;
      } else {
        five -= 3;
      }
      if(five < 0) return false;
    }
  }
  return true;
};
// @lc code=end
// const bills = [5,5,5,10,20];
const bills = [5,5,10,10,20];
lemonadeChange(bills);

