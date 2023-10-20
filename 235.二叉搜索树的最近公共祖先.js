/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
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
// 之前做过普通二叉树的公共祖先问题，那么对于二叉搜索树，有什么规律呢？
var lowestCommonAncestor = function(root, p, q) {
    // 答案是分边找，因为二叉搜索树是一颗有序的二叉树
    if (!root || root === p || root === q) return root;
    // 都在当前节点左边
    if (p.val < root.val && q.val < root.val) return lowestCommonAncestor(root.left, p, q);
    // 都在当前节点右边
    if (p.val > root.val && q.val > root.val) return lowestCommonAncestor(root.right, p, q);
    // 在当前节点左右两边
    return root;
};
// @lc code=end

