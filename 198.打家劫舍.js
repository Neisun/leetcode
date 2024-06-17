/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  /**
   * dp[j]表示在前j个房间里偷取的最大金额
   *
   * 递推公式？
   * dp[j] = dp[j-w[i]] + w[i];
   * 上述递推公式，就已经错了
   * 只有两种情况
   * 对于下表为j的这一家，我是打劫还是不打劫
   * 打劫：那么就需要从j-2那一家推算出结果并且+nums[j]这一家
   * 不打劫：需要从j-1那一家推算
   * 比较哪两个更大
   * dp[j] = max(dp[j-2]+nums[j], dp[j-1])
   */

  // const len = nums.length;
  // const dp = new Array(len).fill(0);

  // // 初始化
  // dp[0] = nums[0]; // 当下标为0只能取nums[0]
  // dp[1] = Math.max(nums[0], nums[1]); // 当下标为1，取二者0和1二者最大的值

  // for (let i = 2; i < len; i++) {
  //   // 从递推公式里来看，我们需要的i需要从2开始，即初始化0 1
  //   dp[i] = Math.max(dp[i-2]+nums[i], dp[i-1])
  // }

  // return dp[len-1];

  /**
   * 二维数组
   * dp[i][0]不打劫房间i的最大金额
   * dp[i][1]打劫房间i的最大金额
   *
   * 状态转移？
   * 对于房间i来说有两种状态
   * 打劫
   * 不打劫
   * 打劫的情况: 由于相邻房间不能被打劫，所以如果是打劫的情况那么 dp[i][1] = dp[i-1][0] + nums[i];
   * 不打劫的情况： dp[i][0] = max(dp[i-1][0], dp[i-1][1])
   *
   * 一些新的想法对么？
   * 不打劫: 那么就是说明i-1一定打劫了 dp[i][0] = dp[i-1][1];
   * 这个说法对么，不打劫难道就说明i-1一定打劫了么，因为不确定所以只能取max(dp[i-1][0], dp[i-1][1])
   *
   * 打劫: 那么说明i-1一定没打劫 dp[i][1] = dp[i-1][0] + nums[i]
   * 这个说法是对的，因为相邻的不能同时被打劫
   */

  // const len = nums.length;

  // // 构造dp数组
  // const dp = [];
  // for (let i = 0; i < len; i++) {
  //   dp[i] = [];
  //   dp[i][0] = 0;
  //   dp[i][1] = 0;
  // }

  // // 由状态转移可以推导出i需要从1开始，那么就要初始化0的情况
  // dp[0][0] = 0
  // dp[0][1] = nums[0];

  // // 遍历
  // for (let i = 1; i < len; i++) {
  //   dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1]);
  //   dp[i][1] = dp[i-1][0] + nums[i];
  // }

  // return Math.max(dp[len-1][0], dp[len-1][1]);

  /**
    算法解读：
    一排房子，只能要求偷得金额最大，但是不能偷相邻的房子

    算法分析：
    动态规划的方式求最大值
    dp[i]表示从从0~i房子的偷得最大金额
    那么对于dp[i]来说，有如下推导
    对于下标为i的房子，有两种情况
    偷：dp[i] = dp[i-2]+nums[i]
    不偷: dp[i] = dp[i-1]
    二者最大值即为当前dp[i]的最值 dp[i] = max(dp[i-2]+nums[i], dp[i-1])

    初始化：
    因为需要i-2的值，所以得初始化到i-2
    dp[0] = nums[0]
    dp[1] = nums[1] > nums[0] ? nums[1] : nums[0];
  */

  const n = nums.length;
  const dp = new Array(n).fill(0);

  // 初始化
  dp[0] = nums[0];
  dp[1] = nums[1] > nums[0] ? nums[1] : nums[0];

  // 状态转移
  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }
  console.log(dp);
  return dp[n - 1];
};
// @lc code=end
