/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
// 我们看一下怎么删除一个节点
// 先找到这个节点
// 1. 这个节点没有子节点 直接删除 即 返回null即可
// 2. 这个节点有左子树 或者 右子树 返回子树即可
// 3. 这个节点有左右子树 那么将左子树放在右子树的节点左边 返回右节点【这块儿有问题，得找到右节点里边最小的，挂到这个节点的左边】
var deleteNode = function(root, key) {
  // 没找到
  if (!root) return null;
  
  if (root.val === key) {
    // 没有子节点
    if (!root.left && !root.right) return null;
    // 有左子树
    if (root.left && !root.right) return root.left;
    // 有右子树
    if (!root.left && root.right) return root.right;
    // 左右子树都存在
    if (root.left && root.right) {
      // 得找到右子树中最左边的
      let minNode = root.right;
      while (minNode.left) {
        minNode = minNode.left;
      }
      minNode.left = root.left;
      return root.right;
    }
  }
  
  if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else {
    root.right = deleteNode(root.right, key);
  }

  return root;
};
// @lc code=end

