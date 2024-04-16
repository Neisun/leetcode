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
  let result = Infinity;
  let pre = -1;
  // 中序遍历
  const inorder = (root) => {
    if (!root) return;
    inorder(root.left);
    if (pre === -1) {
      pre = root.val;
    } else {
      result = Math.min(result, root.val - pre);
      pre = root.val;
    }
    inorder(root.right);
  }
  inorder(root);
  return result;
};
// @lc code=end

