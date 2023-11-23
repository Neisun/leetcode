/*
 * @lc app=leetcode.cn id=377 lang=javascript
 *
 * [377] 组合总和 Ⅳ
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  /**
   * 回溯的方式，看看会不会超时
   * 很不幸，回溯超时了
   */
  // let count = 0;
  // const len = nums.length;
  // // 回溯算法
  // const backtracing = (sum, target) => {
  //   if (sum === target) {
  //     count++;
  //     return;
  //   }
  //   for (let i = 0; i < len; i++) {
  //     if (nums[i] + sum > target) {
  //       continue;
  //     } else {
  //       sum += nums[i];
  //       backtracing(sum, target);
  //       sum -= nums[i];
  //     }
  //   }
  // }
  
  // backtracing(0, target);

  // return count;

  /**
   * 由于回溯计算量比较大，所以超时了，我们就需要考虑动态规划的方式了
   * dp[j]表示背包容积为j时候的组合个数
   * 
   * 状态推导？
   * dp[j] += dp[j-w[i]] => dp[j] += dp[j-nums[i]];
   */
  const len = nums.length;
  // 构造dp数组
  const dp = new Array(target+1).fill(0);

  // 由于叠加，所以dp[0]需要初始化为1
  dp[0] = 1;

  // 遍历
  // 由于这是一种排列，因为 112与211是两种结果，所以先遍历背包，可以同时考虑到112与211的情况
  for (let j = 0; j <= target; j++) {
    for (const num of nums) {
        if (j >= num) {
          dp[j] += dp[j-num];
        }
    }
  }

  return dp[target];
};
// @lc code=end
const nums = [1,2,3], target = 4;
const r = combinationSum4(nums, target);
console.log(r);

