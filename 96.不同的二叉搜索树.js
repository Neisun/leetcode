/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  /**
   * 这道题，用动态规划说实话，是真的很难想到的啊
   * 如果要使用动态规划，那我们就得从1个节点 2个节点 到3个几点一点点推理出来看看
   * 这个找规律的过程，其实是很难想到的
   * 从n为3的情况来看
   * dp[3] = 1为根节点的二叉搜索树个数+2为根节点的二叉搜索树个数+3为根节点二叉搜索树个数
   * 1为根节点的二叉搜索树的个数 = 左边0个节点的二叉搜索树个数 * 右边2个节点的二叉搜索树个数 =》dp[0] * dp[2]
   * 2为根节点的二叉搜索树的个数 = 左边1个节点的二叉搜索树个数 * 右边1个节点的二叉搜索树个数 =》dp[1] * dp[1]
   * 3为根节点的二叉搜索树的个数 = 左边2个节点的二叉搜索树个数 * 右边0个节点的二叉搜索树个数 =》dp[2] * dp[0]
   */

  // 构建dp数组
  const dp = new Array(n+1).fill(0);
  
  // 初始化
  dp[0] = 1;

  // 状态转移方程
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      // 怎么推导？i = 3 dp[0] + dp[2]
      dp[i] += dp[i-j] * dp[j-1]
    }
  }

  console.log(dp);

  return dp[n];

};
// @lc code=end

numTrees(3);
