/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
 *
 * https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/
 *
 * algorithms
 * Medium (71.77%)
 * Likes:    1211
 * Dislikes: 0
 * Total Accepted:    372.8K
 * Total Submissions: 516.2K
 * Testcase Example:  '[9,3,15,20,7]\n[9,15,7,20,3]'
 *
 * 给定两个整数数组 inorder 和 postorder ，其中 inorder 是二叉树的中序遍历， postorder
 * 是同一棵树的后序遍历，请你构造并返回这颗 二叉树 。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入：inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
 * 输出：[3,9,20,null,null,15,7]
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入：inorder = [-1], postorder = [-1]
 * 输出：[-1]
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 <= inorder.length <= 3000
 * postorder.length == inorder.length
 * -3000 <= inorder[i], postorder[i] <= 3000
 * inorder 和 postorder 都由 不同 的值组成
 * postorder 中每一个值都在 inorder 中
 * inorder 保证是树的中序遍历
 * postorder 保证是树的后序遍历
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  /**
   * 原理与105基本是如出一辙
   */
  // map做数值以下标的映射，方便查找
  const map = new Map();
  const n = inorder.length;
  for (let i = 0; i < n; i++) {
    map.set(inorder[i], i);
  }

  // 递归进行
  /**
   * 
   * @param {number} il 中序遍历数组起点
   * @param {number} ir 中序遍历数组终点
   * @param {number} pl 后序遍历数组起点
   * @param {number} pr 后序遍历数组终点
   * @returns {TreeNode}
   */
  const build = (il, ir, pl, pr) => {
    if (il > ir || pl > pr) return null;
    // 首先取出后序遍历的尾巴，当做根节点的值
    const rootVal = postorder[pr];
    // 构造二叉树
    const root = new TreeNode(rootVal);

    // 查找该节点在中序遍历中的位置
    // 该节点将中序遍历分割厂左右子树两部分，可以确定左右子树的长度
    // 进而就可以确定左右子树在数组中的范围
    const idx = map.get(rootVal);
    // 计算出左子树的长度
    const left_size = idx - il;

    // 接下来，就可以递归的进行下去
    // 左子树 对于中序遍历的范围是 il, il+left_size-1, 后序遍历的范围 pl pl+left_size-1
    const root_left = build(il, il+left_size-1, pl, pl+left_size-1);
    // 右子树 对于中序遍历的范围是 il+left_size+1, ir, 后序遍历的范围是 pl+left_size+1, pr-1
    const root_right = build(il+left_size+1, ir, pl+left_size, pr-1);

    root.left = root_left;
    root.right = root_right;


    return root;
  };

  return build(0, n-1, 0, n-1);
};
// @lc code=end

