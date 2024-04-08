/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 *
 * https://leetcode.cn/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (59.33%)
 * Likes:    2693
 * Dislikes: 0
 * Total Accepted:    1M
 * Total Submissions: 1.7M
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * 给你一个二叉树的根节点 root ， 检查它是否轴对称。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [1,2,2,3,4,4,3]
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [1,2,2,null,3,null,3]
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点数目在范围 [1, 1000] 内
 * -100 <= Node.val <= 100
 * 
 * 
 * 
 * 
 * 进阶：你可以运用递归和迭代两种方法解决这个问题吗？
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  /**
   * 与比较两个二叉树是否相同基本保持一致的思路，只不过两颗二叉树 p q
   * 比较的是同一边，而这个比较的是对侧
   * isSame(p.left, q.right)
   * isSame(p.right, q.left)
   */
  const isSame = (p, q) => {
    if ((p && !q) || (!p && q) || (p && q && p.val !== q.val)) return false;
    if (!p && !q) return true;
    
    const leftIsSame = isSame(p.left, q.right);
    const rightIsSame = isSame(p.right, q.left);

    return leftIsSame && rightIsSame;
  }

  return isSame(root, root);
};
// @lc code=end

