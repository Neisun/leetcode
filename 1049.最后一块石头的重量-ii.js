/*
 * @lc app=leetcode.cn id=1049 lang=javascript
 *
 * [1049] 最后一块石头的重量 II
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
  /**
   * 这是一道阅读理解题？
   * 题目的描述，倒是看的很清楚，
   * 选两块石头，如果两块石头重量相等，那么都粉碎
   * 如果两块是否不等，那么就是 stone[a] - stone[b] 放数组里
   * 然后循环往复这个过程，最终要得到的一块石头的重量最小
   * 
   * 我是真没看出来该使用动态规划的方式去求解
   * 转化成动态规划的模型求解就是
   * 石头分两堆
   * 然后让两堆的重量尽量一致
   * 模型就转换成背包重量是sum/2(我们假设所有石头的重量和是sum)
   * 然后我们往sum/2的包里放石头，尽量让石头最重
   */


  /**
   * 二维数组方式的动态规划，更利于理解，只不过添加了一个价值维度
   * 在这个题里边，价值就是重量
   * 于是我们定义dp数组
   * dp[i][j] 表示 从0~i的下标中选石头向重量为j的包里装的最大价值
   * 
   * 状态转移
   * dp[i][j]
   * 对于下标为i的石头
   * 放 dp[i-1][j-w[i]] + value[i] => dp[i-1][j-stones[i]] + stones[i]
   * 不放 dp[i-1][j]
   * dp[i][j] = max(dp[i-1][j], dp[i-1][j-stones[i]] + stones[i])
   * 
   * 初始化
   * dp[0][j]取下标为0的石头放包里，不是随便放的哦，必须满足stones[0]重量比包小才行
   * 即 j = stones[0]开始
   * 
   * 对于dp[i][0] 包的大小为0，那么必然是dp[i][0] = 0;
   */

  // const len = stones.length;
  // // 求和
  // const sum = stones.reduce((pre, cur) => pre + cur);
  // // 分堆
  // const bagSize = Math.floor(sum/2);
  // // 构造dp数组
  // const dp = [];
  // for (let i = 0; i < len; i++) {
  //   dp[i] = [];
  //   for (let j = 0; j <= bagSize; j++) {
  //     dp[i][j] = 0;
  //   }
  // }

  // // 初始化
  // // dp[i][0]的情况已经在构造dp数组的情况中完成了初始化
  // // 初始化dp[0][i]的情况就好
  // for (let i = stones[0]; i <= bagSize; i++) {
  //   dp[0][i] = stones[0];
  // }

  // // 开始遍历进行状态转移
  // for (let i = 1; i < len; i++) { // 遍历石头
  //   for (let j = 1; j <= bagSize; j++) { // 遍历背包大小
  //     if (j < stones[i]) {
  //       dp[i][j] = dp[i-1][j];
  //     } else {
  //       dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-stones[i]] + stones[i]);
  //     }
  //   }
  // }

  // return (sum - dp[len-1][bagSize]) - dp[len-1][bagSize];

  /**
   * 使用一维数组的方式
   * 在二维数组的方式中，dp[i][j] = dp[i-1][j]，我们可以节省掉这一步
   * 一维数组的方式可能更简洁，但是略微难以理解
   * 
   * dp数组的定义
   * dp[j]表示容积为j的背包装石头的最大价值为dp[j]
   * 
   * 状态转移
   * 从二维数组直接迁移过来
   * dp[j] = max(dp[j], dp[j-stone[i]] + stones[i])
   * 
   * 初始化
   * dp[0]背包的容积是0，那么必然是0
   */

  const len = stones.length;
  // 求和
  const sum = stones.reduce((pre, cur) => pre + cur);
  // 分堆
  const bagSize = Math.floor(sum/2);

  // 构造dp数组
  const dp = new Array(bagSize + 1).fill(0);

  // 初始化 好像不用初始化了，在构造过程中已经完成了初始化
  
  // 遍历
  for (let i = 0; i < len; i++) { // 遍历石头
    // for (let j = bagSize; j >= 0; j--) { // 遍历背包，需要从后向前哦 从后向前可以避免石头使用两次
    //   if (j >= stones[i]) {
    //     dp[j] = Math.max(dp[j], dp[j-stones[i]] + stones[i]);
    //   }
    // }
    for (let j = bagSize; j >= stones[i]; j--) { // 遍历背包，需要从后向前哦 从后向前可以避免石头使用两次
      dp[j] = Math.max(dp[j], dp[j-stones[i]] + stones[i]);
    }
  }

  return (sum-dp[bagSize]) - dp[bagSize];
};
// @lc code=end

