/*
 * @lc app=leetcode.cn id=701 lang=javascript
 *
 * [701] 二叉搜索树中的插入操作
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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
  // 说明找到最后了，返回一个以val为值的节点
  if (!root) return new TreeNode(val);
  // 在左边
  if (root.val > val) {
    root.left = insertIntoBST(root.left, val);
  }
  // 在右边
  if (root.val < val) {
    root.right = insertIntoBST(root.right, val);
  }
  return root;
};
// @lc code=end

