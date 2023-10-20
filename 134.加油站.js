/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
// var canCompleteCircuit = function(gas, cost) {
//   const len = gas.length;
//   let restGas = 0;
//   // 先上暴力搜索，暴搜时间复杂度O(N^2)
//   for (let start = 0; start < len; start++) {
//     restGas = gas[start] - cost[start];
//     let i = (start + 1) % len;
//     while (restGas > 0 && i !== start) {
//       restGas += gas[i] - cost[i];
//       i = (i + 1) % len;
//     }
//     if (restGas >= 0 && i === start) return start;
//   }
//   return -1;
// };
var canCompleteCircuit = function(gas, cost) {
  let totalSum = 0;
  let curSum = 0;
  let start = 0 ;
  // 如果当前位置剩余油量<0 那么表明在[0,i]区间内，找不到结果，从下一个位置开始
  for (let i = 0; i < gas.length; i++) {
    const rest = gas[i] - cost[i];
    totalSum += rest;
    curSum += rest;
    if (curSum < 0) {
      start = i + 1;
      curSum = 0;
    }
  }
  if (totalSum < 0) return -1;
  return start;
};
// @lc code=end
const gas = [1,2,3,4,5], cost = [3,4,5,1,2];
// const gas = [2,3,4], cost = [3,4,3];
// const gas = [5,1,2,3,4], cost = [4,4,1,5,1];
const r = canCompleteCircuit(gas, cost);
console.log(r);

