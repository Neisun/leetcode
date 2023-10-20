/*
 * @lc app=leetcode.cn id=669 lang=javascript
 *
 * [669] 修剪二叉搜索树
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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function(root, low, high) {
  if (!root) return null;
  // 单层逻辑
  // 根据二叉搜索树的特点来看，如果一个节点在小于low，那么这个节点及其左子树都不用考虑了（左子树更小），只需要裁剪这个节点的右子树
  // 同理的如果这个节点在hight之外，那么这个节点以及右子树都不用考虑了(右子树更大)，只需要裁剪这个节点的左子树
  // 对于在区间内的节点，如果裁剪左右子树，并用当前节点承接一下

  // 于是我们的伪代码大致如下

  // 比low小
  if (root.val < low) {
    // 裁剪右子树
    return trimBST(root.right, low, high);
  }

  // 比hight大
  if (root.val > high) {
    // 裁剪左子树
    return trimBST(root.left, low, high);
  }

  // 如果在区间内
  root.left = trimBST(root.left, low, high);
  root.right = trimBST(root.right, low, high);
  return root;
};
// @lc code=end

