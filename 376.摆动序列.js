/*
 * @lc app=leetcode.cn id=376 lang=javascript
 *
 * [376] 摆动序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var wiggleMaxLength = function(nums) {
//   // 简单来说就是找峰、谷
//   // 不大于1个元素的时候
//   if (nums.length <= 1) return nums.length;
//   // 如果只有两个元素时候 nums[1] !== nums[0] 也算一个解
//   // 我们从三个元素开始考虑 
//   // [1,2,1] 中间为波峰
//   // [1,0,1] 中间为波谷
//   // [1,1,2] 前平 向上
//   // [1,1,0] 前平 向下
//   // [1,2,2] 后平 向上
//   // [2,1,1] 后平 向下

//   // 我们找到一个波峰或者波谷就计数，我们来看看怎么计算
//   // 对于 [1,2,1]
//   // 对于 [3,3,3,2,5]
//   let preDif = nums[1] - nums[0]; // 1
//   let count = 0;
//   count = preDif === 0 ? 1 : 2;
//   for (let i = 2; i < nums.length; i++) {
//     // 找波峰和波谷
//     const sufDif = nums[i] - nums[i - 1];
//     if (preDif >= 0 && sufDif < 0 || preDif <= 0 && sufDif > 0) {
//       count++;
//       preDif = sufDif;
//     }
//   }
//   return count;
// };

// 动态规划解法
// 我们通过此题来重新进入动态规划的大门吧
// var wiggleMaxLength = function(nums) {
//   // 对于此题目，我们可以不使用dp数组
//   const len = nums.length;
//   // 对于 up 和 down的定义
//   // up表示 波峰 即 [1, 2]
//   // down  波谷 即 [2, 1]

//   // 对于一个数来说及时波峰也是波谷， 所以初始值
//   let up = 1, donw = 1;

//   // 从第二个数开始
//   for (let i = 1; i < len; i++) {
//     if (nums[i] - nums[i - 1] > 0) {
//       up = donw + 1;
//     } else if (nums[i] - nums[i - 1] < 0) {
//       donw = up + 1;
//     }
//   }

//   return Math.max(up, donw);
// };


// 使用dp数组形式的动态规划
// var wiggleMaxLength = function(nums) {
//   const len = nums.length;
//   const dp = [];
//   // 构造dp数组
//   // dp[i][0] 表示当前数即走到第i个数，山峰个数
//   // dp[i][1] 表示当前数即走到第i个数，山谷个数
//   for (let i = 0; i < len; i++) {
//     const col = [0, 0];
//     dp[i] = col;
//   }

//   // 初始值 对于一个数，既是山峰也是山谷
//   dp[0][0] = 1;
//   dp[0][1] = 1;

//   // 开始遍历
//   for (let i = 1; i < len; i++) {
//     dp[i][0] = 1;
//     dp[i][1] = 1;
//     for (let j = 0; j < i; j++) {
//       if (nums[i] > nums[j]) { // 把nums[i]接到num[j]后边当做山峰
//         dp[i][0] = Math.max(dp[i][0], dp[j][1] + 1);
//       } else if (nums[i] < nums[j]) { // 当做山谷
//         dp[i][1] = Math.max(dp[i][1], dp[j][0] + 1);
//       }
//     }
//   }
  
//   return Math.max(dp[len - 1][0], dp[len - 1][1]);
// };
// 之前的动态规划不知道是怎么写出来的，明显是没有理解dp数组的定义就乱写
var wiggleMaxLength = function(nums) {
  // dp[i][0] 表示走到第i个元素时候摆动序列的最大长度，并且当前是山峰
  // dp[i][1] 表示走到第i个元素时候摆动序列的最大长度，并且当前是山谷

  // 第二步，我们需要推导出状态转移方程
  // 对于 0 < j < i的元素中
  // 如果 nums[i] > nums[j] 说明要把nums[i]放在nums[j]的山谷后边当做山峰
  // 状态转移为 dp[i][0] = max(dp[i][0], dp[j][1] + 1)
  // 对于 nums[i] < nums[j] 说明把nums[i]放nums[j]的山峰后边当山谷
  // 状态转移为 dp[i][1] = max(dp[i][1], dp[j][0] + 1)
  

  // 初始化？对于一个元素，既是山峰也是山谷 dp[0][0] = dp[0][1] = 1;
  
  // 动态规划逻辑开始
  // 先构成dp数组
  const len = nums.length;
  const dp = [];
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(2);
  }
  // 初始化
  dp[0][0] = 1;
  dp[0][1] = 1;
  
  // 状态转移方程
  for (let i = 1; i < len; i++) {
    dp[i][0] = 1;
    dp[i][1] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) { // nums[i]放在nums[j]这个山谷后边当做山峰
        dp[i][0] = Math.max(dp[i][0], dp[j][1] + 1);
      } else if (nums[i] < nums[j]) { // nums[i]放在nums[j]这个山峰后边当山谷
        dp[i][1] = Math.max(dp[i][1], dp[j][0] + 1);
      }
    }
  }

  return Math.max(dp[len-1][0], dp[len-1][1]);
};
// @lc code=end

// 测试
// const nums = [1,7,4,9,2,5];
// const nums = [1, 4, 7, 2, 5];
// const nums = [1, 7, 4, 5, 5];
// const nums = [1, 17, 10, 13, 10, 16, 8];
// const result = isWiggle(nums);
// console.log(result);
const len = wiggleMaxLength(nums);
console.log(len);

