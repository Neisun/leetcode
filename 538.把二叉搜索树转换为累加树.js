/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
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
 * @return {TreeNode}
 */
// 这道题原先是不太会的，但是转念一想，二叉树其实中序遍历是一个有序数组
// 比如 [1,2,3,4,5] => 累加那就是从后往前依次累加 [15,14,12,9,5]
// 也就是说我们的思路，遍历顺序是右中左，逆中序遍历，利用一个变量sum存储叠加的和，然后遍历到一个节点，那么节点.val+=sum
var convertBST = function(root) {
  let sum = 0;
  const dfs = root => {
    if (!root) return;
    dfs(root.right);
    root.val += sum;
    sum = root.val;
    dfs(root.left);
    return;
  }
  dfs(root);
  return root;
};
// @lc code=end

