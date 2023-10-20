/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
  // 结果
  let result = Infinity;
  // 记录前一个节点值
  let pre = null;
  // 深度搜索
  const dfs = root => {
    if (!root) return;
    dfs(root.left);
    // 当前层逻辑，找到最小值
    if (pre) {
      result = Math.min(result, Math.abs(root.val - pre.val));
    }
    // 记录前一个遍历的节点
    pre = root;
    dfs(root.right);
    return;
  }
  dfs(root);
  return result;
};
// @lc code=end

