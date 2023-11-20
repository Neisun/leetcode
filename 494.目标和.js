/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
  /**
   * 分析思路
   * 分两堆
   * 一堆是+
   * 一堆是-
   * 两堆的差 = target 
   * a + b = sum
   * a - b = target
   * 那么 a 就是 (sum + target) / 2
   * 
   * 于是问题就转换成了背包问题，背包的容量就是(sum+target)/2
   * 
   * 我们使用一维数组的方式
   * dp[j]表示背包容量为j的组合数
   * 
   * 状态转移
   * dp[j] += dp[j-nums[i]];
   * 
   * 初始化
   * dp[0] = 1
   * 为什么不能初始化为0，因为需要从0开始叠加，不然最终结果就是0
   */
  
  // const len = nums.length;
  // // 求和
  // const sum = nums.reduce((pre, cur) => pre + cur);
  // // 背包容积
  // const bagSize = (sum + target) / 2;
  // // 背包容积是小数没有结果
  // if (bagSize % 1 !== 0) return 0;
  // // target比sum大
  // if (bagSize < 0) return 0;
  // // 构造dp数组
  // const dp = new Array(bagSize + 1).fill(0);

  // // 初始化，已经在构造dp数组时候做了
  // dp[0] = 1;

  // // 遍历
  // for (let i = 0; i < len; i++) {
  //   for (let j = bagSize; j >= nums[i]; j--) {
  //     dp[j] += dp[j-nums[i]];
  //   }
  // }

  // return dp[bagSize];

  /**
   * 我们再使用二维数组的方式做一次推导
   * 根据推算，我们得出包的容积式 (sum+target)/2 我们记作bagSize
   * 排除掉几种情况
   * 1. bagSize不是整数即 bagSize%1不是0
   * 2. bagSize < 0的情况
   * 
   * 
   * dp数组的含义
   * dp[i][j]表示从下标0~i的数组中选数装包，并且包的容积是j的最多构造方式
   * 
   * 状态转移
   * dp[i][j] += max(dp[i-1][j], dp[i-1][j-nums[i]])
   * 
   * 
   * 初始化
   * dp[i][0] = 0
   * dp[0][i]，就需要看这个nums[0]是不是等于i了，如果等于就是1 否则就是0
   */


  // // 获取数组长度
  // const len = nums.length;
  // // 求和
  // const sum = nums.reduce((pre, cur) => pre + cur);
  // // 计算出包的大小
  // const bagSize = (sum + target) / 2;
  // // 排除掉 一些特殊情况
  // // 1. bagSize不是整数
  // if (bagSize % 1 !== 0) return 0;
  // // 2. 如果bagSize是负数
  // if (bagSize < 0) return 0;

  // // 构造dp数组
  // const dp = [];
  // for (let i = 0; i < len; i++) {
  //   dp[i] = [];
  //   for (let j = 0; j <= bagSize; j++) {
  //     dp[i][j] = 0;
  //   }
  // }

  // // 初始化
  // for (let j = 0; j <= bagSize; j++) {
  //   if (nums[0] === j) {
  //     dp[0][j] = 1;
  //   }
  // }


  // let zeroNums = 0;
  // for (let i = 0; i < len; i++) {
  //   if (nums[i] === 0) zeroNums++;
  //   dp[i][0] = Math.pow(2, zeroNums);
  // }


  // // console.log(dp)

  // // 开始遍历
  // for (let i = 1; i < len; i++) {
  //   for (let j = 1; j <= bagSize; j++) {
  //     if (j < nums[i]) {
  //       dp[i][j] = dp[i-1][j]
  //     } else {
  //       dp[i][j] = dp[i-1][j] + dp[i-1][j-nums[i]];
  //     }
  //   }
  // }

  // console.log(dp)

  // return dp[len-1][bagSize];

  /**
   * 用DFS回溯试一下，看看会不会超时
   * 1. 利用数学算出来，其实计算的是 (sum + target) / 2, 而且是叠加
   * 2. 每次更新起始下标 startIndex
   * 3. 如果结果是0，就找到答案了，结果+1
   */
  const len = nums.length;
  // 求和
  const sum = nums.reduce((pre, cur) => pre + cur);
  // 计算目标值
  const total = (sum + target) / 2;
  // 排除掉特殊的情况
  // 小数的情况
  if (total % 1 !== 0) return 0;
  // 小于0的情况
  if (total < 0) return 0;
  // 计数
  let count = 0;
  
  // 回溯方法
  const backtracing = (start, s, total) => {
    // console.log(s,'-----s-----');
    // console.log(total,' -----total----')
    if (s === total) {
      count++;
    }
    for (let i = start; i < len; i++) {
      if (s + nums[i] <= total) {
        s += nums[i];
        backtracing(i+1, s, total);
        s -= nums[i];
      }
    }
  }

  backtracing(0, 0, total);
  return count;
};
// @lc code=end

const r = findTargetSumWays([1,1,1,1,1], 3);
console.log(r)

