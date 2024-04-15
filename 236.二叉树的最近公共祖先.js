/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  /**
   * 有几种情况考虑
   * p q 在两侧
   * q是p的子树
   * p是q的子树
   * 
   * 思路，如果深度搜索发现当前节点与p或者q一致，那么就返回
   * 如果这一侧没有节点会最终走到最后的叶子节点，返回null
   */
  if (!root) return null;
  if (root === p) return p;
  if (root === q) return q;
  // 这是如上三个条件的结合写法
  // if (!root || root === p || root === q) return root;
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (left && !right) return left;
  if (!left && right) return right;
  if (left && right) return root;
};
// @lc code=end

