/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 *
 * https://leetcode.cn/problems/maximum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (77.21%)
 * Likes:    1811
 * Dislikes: 0
 * Total Accepted:    1.3M
 * Total Submissions: 1.6M
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树 root ，返回其最大深度。
 * 
 * 二叉树的 最大深度 是指从根节点到最远叶子节点的最长路径上的节点数。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 
 * 
 * 输入：root = [3,9,20,null,null,15,7]
 * 输出：3
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [1,null,2]
 * 输出：2
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点的数量在 [0, 10^4] 区间内。
 * -100 <= Node.val <= 100
 * 
 * 
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
var maxDepth = function(root) {
  /**
   * 可以后续遍历求解
   * dfs的方式求解
   */
  // if (!root) return 0;
  
  // // 左边深度
  // const l_depth = maxDepth(root.left);
  // // 右边深度
  // const r_depth = maxDepth(root.right);
  // // 当前节点深度
  // const cur_depth = Math.max(l_depth, r_depth) + 1;

  // return cur_depth;

  /**
   * 按层求解，
   * 广度有限搜索的方式求解
   */
  // 需要一个栈存放节点
  if (!root) return 0;
  const stack = [];
  stack.push(root);
  let depth = 0;
  while (stack.length) {
    const size = stack.length;
    for (let i = 0; i < size; i++) {
      // 取出当前层的节点
      const cur = stack.shift();
      if (cur.left) {
        stack.push(cur.left);
      }
      if (cur.right) {
        stack.push(cur.right);
      }
    }
    depth++;
  }
  return depth;
};
// @lc code=end

