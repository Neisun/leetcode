/*
 * @lc app=leetcode.cn id=968 lang=javascript
 *
 * [968] 监控二叉树
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
var minCameraCover = function(root) {
  /**
   * 好家伙，这道题是将二叉树与贪心结合来看的一道题
   * 从贪心的角度来看，叶子结点的父级放摄像头
   * 也就是说需要从底向上遍历，那么就需要使用二叉树的后序遍历方式了
   * 对于一个节点，我们需要用3种状态表示，题目中已经给出了数字0，所以我们可以利用这个数字
   * 0：没有被摄像头覆盖
   * 1：有摄像头
   * 2：被摄像头覆盖
   * 判断当前节点状态是由左右孩子节点判断的
   * 情况看上去就稍微有点多了
   * 可以大体上将这些情况拆分一下
   * 左右孩子都被覆盖
   * left=2 right=2
   * 左右孩子有一个没被覆盖 
   * left = 0 || right = 0
   * 左右孩子有一个有摄像头
   * left = 1 || right = 1
   */
  // 那么我们开始遍历吧
  /**
   * 
   * @param {TreeNode} root 
   * @returns 
   */

  let result = 0;

  function traverse(root) {
    // 叶子结点
    if (!root) return 2;
    // 后序遍历
    const left = traverse(root.left);
    const right = traverse(root.right);

    // 根据上述情况做出判断
    if (left === 2 && right === 2) {
      return 0;
    } else if (left === 0 || right === 0) {
      result++;
      return 1;
    } else if (left === 1 || right === 1) {
      return 2;
    } else {
      return -1;
    }
  }

  // 最终需要看一下根节点
  if (traverse(root) === 0) {
    result++;
  }

  return result;
};
// @lc code=end

