/*
 * @lc app=leetcode.cn id=617 lang=typescript
 *
 * [617] 合并二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
  // 两个都为空
  if (!root1 && !root2) return null;
  // 左不为空，右为空
  if (root1 && !root2) return root1;
  // 左为空，右不为空
  if (!root1 && root2) return root2;
  // 左右都不空
  if (root1 && root2) {
    root1.val = root1.val + root2.val;
  };

  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);

  return root1;
};
// @lc code=end

