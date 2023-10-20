/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
// 有序数组转成二叉搜索树，但是是高度差<=1的二叉搜索树
// 转成二叉搜索树容易，取一个节点，只要比他小放左节点，比他大放右节点，递归进行
// 那么高度差<=1的怎么做呢?
// 去中间的那个数，将二叉树分成左右两部分，递归解决左边，递归解决右边
var sortedArrayToBST = function(nums) {
  // 处理数组为空的情况
  if (!nums.length) return null;
  // 取中间下标
  const mid = Math.floor(nums.length / 2);
  // 截取左右数组
  const leftNums = nums.slice(0, mid);
  const rightNums = nums.slice(mid + 1);
  // 以中间数为根节点
  const node = new TreeNode(nums[mid]);
  // 递归处理左右部分
  node.left = sortedArrayToBST(leftNums);
  node.right = sortedArrayToBST(rightNums);
  return node;
};
// @lc code=end

