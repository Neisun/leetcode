/*
 * @lc app=leetcode.cn id=474 lang=javascript
 *
 * [474] 一和零
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
  /**
   * 状态压缩dp
   * 背包的容量由m和n共同决定
   * dp[m][n]表示组成背包的最多子集的长度
   * 
   * 状态转移如何推导?
   * 在下标为i的strs数组中，我们将0和1的个数，分别记作 zeroNum oneNum
   * 于是这个题的模型就转换为01背包问题嘞
   * 放 dp[m-zeroNum][n-oneNum] + 1
   * 不放 dp[m][n]
   * 状态转移方程为 dp[m][n] = max(dp[m][n], dp[m-zeroNum][n-oneNum] + 1)
   * 
   * 初始化？
   * 这个需要先写方程，再看怎么初始化
   * 
   * 由于直接写出来了，我们来逆推一下，看看我们需要怎么初始化？
   * 由于是状态压缩的数组，所以我们必须从后往前推到
   * 需要保证i-zeroNum >= 0 && j-oneNum >= 0，由于在构造dp数组的时候，我们已经将数组每一项初始化为0了
   * 这样可以保证在做运算的时候，不会出现NaN的情况
   */

  // // 先构造dp数组
  // const dp = new Array(m+1).fill(0).map(() => new Array(n+1).fill(0));

  // // 遍历
  // for (const str of strs) { // 等同于遍历物品
  //   let zeroNum = 0,
  //       oneNum = 0;
  //   for (let i = 0; i < str.length; i++) {
  //     if (str[i] == '0') {
  //       zeroNum++;
  //     } else {
  //       oneNum++;
  //     }
  //   }
  //   for (let i = m; i >= zeroNum; i--) { // 等同于遍历背包的重量
  //     for (let j = n; j >= oneNum; j--) {
  //       dp[i][j] = Math.max(dp[i][j], dp[i-zeroNum][j-oneNum]+1);
  //     }
  //   }
  // }
  
  // return dp[m][n];

  /**
   * 使用常规的dp数组方式，可能就需要三维数组了
   * dp[i][m][n]表示从前i个元素中取字符串，要保证最多有m个0，n个1的最多子集
   * 
   * 状态推导方程
   * dp[i][m][n] = max(dp[i-1][m][n], dp[i-1][m-zeroNum][n-oneNum]+1)
   * 
   * 初始化，需要先写出遍历以及状态推导过程
   */
  
  const len = strs.length;
  // 构造dp数组
  const dp = new Array(len).fill(0).map(() => new Array(m+1).fill(0).map(() => new Array(n+1).fill(0)));

  // 初始化
  // dp[0][m][n] 怎么初始化的问题？
  // 先计算出来strs[0]的zeroNum与oneNum
  let zeroNum  = 0,
      oneNum = 0;
  for (let i = 0; i < strs[0].length; i++) {
    if (strs[0][i] == '0') {
      zeroNum++;
    } else {
      oneNum++;
    }
  }

  for (let p = zeroNum; p <= m; p++) {
    for (let q = oneNum; q <= n; q++) {
      dp[0][p][q] = 1;
    }
  }

  // 遍历
  for (let i = 1; i < len; i++) { // 等同于先遍历物品
    const str = strs[i];
    let zeroNum = 0,
        oneNum = 0;
    for (let k = 0; k < str.length; k++) { // 得到0和1的个数
      if (str[k] == '0') {
        zeroNum++;
      } else {
        oneNum++;
      }
    }

    for (let p = 0; p <= m; p++) {
      for (let q = 0; q <= n; q++) {
        if (p >= zeroNum && q >= oneNum) {
          dp[i][p][q] = Math.max(dp[i-1][p][q], dp[i-1][p-zeroNum][q-oneNum]+1);
        } else {
          dp[i][p][q] = dp[i-1][p][q];
        }
        // if (p < zeroNum || q < oneNum) {
        //   dp[i][p][q] = dp[i-1][p][q]
        // } else {
        //   dp[i][p][q] = Math.max(dp[i-1][p][q], dp[i-1][p-zeroNum][q-oneNum]+1);
        // }
      }
    }
  }
  return dp[len-1][m][n]
};
// @lc code=end

