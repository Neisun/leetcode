/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 *
 * https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
 *
 * algorithms
 * Medium (71.17%)
 * Likes:    2273
 * Dislikes: 0
 * Total Accepted:    630.2K
 * Total Submissions: 880.6K
 * Testcase Example:  '[3,9,20,15,7]\n[9,3,15,20,7]'
 *
 * 给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder
 * 是同一棵树的中序遍历，请构造二叉树并返回其根节点。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
 * 输出: [3,9,20,null,null,15,7]
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: preorder = [-1], inorder = [-1]
 * 输出: [-1]
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 <= preorder.length <= 3000
 * inorder.length == preorder.length
 * -3000 <= preorder[i], inorder[i] <= 3000
 * preorder 和 inorder 均 无重复 元素
 * inorder 均出现在 preorder
 * preorder 保证 为二叉树的前序遍历序列
 * inorder 保证 为二叉树的中序遍历序列
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  /**
   * 可以通过，但是空间与时间复杂度上都有点高
   * 应该考虑使用数组下标作为切片的方式
   */
  // 每次从前序遍历中取出第一个作为根节点
  // const rootVal = preorder.shift();
  // const root = new TreeNode(rootVal);

  // // 递归构造
  // const index = inorder.indexOf(rootVal);
  // const inorderLeft = inorder.slice(0, index);
  // const inorderRight = inorder.slice(index+1);
  // const preorderLeft = preorder.slice(0, index);
  // const preorderRight = preorder.slice(index);

  // const left = buildTree(preorderLeft, inorderLeft);
  // const right = buildTree(preorderRight, inorderRight);

  // root.left = left;
  // root.right = right;

  // return root;

  /**
   * 考虑使用下标的方式作为数组切片起止点
   */
  // 构造一个map，用来记录中序遍历元素的下标
  const map = new Map();
  const n = preorder.length;
  for (let i = 0; i < n; i++) {
    map.set(inorder[i], i);
  }


  const build = (preorder, inorder, preorder_left, preorder_right, inorder_left, inorder_right) => {
    if (preorder_left > preorder_right || inorder_left > inorder_right) return null;
    // 以前序遍历的开始作为根节点
    const rootVal = preorder[preorder_left];
    const root = new TreeNode(rootVal);

    // 找到前序遍历在中序遍历中的下标
    const idx = map.get(rootVal);
    // 计算得出左子树的个数
    // 这块需要举例子看一下，怎么计算
    /**
     *      1
     *   2     3
     * 4  5  6   7
     * 前序顺序是 1 2 4 5 3 6 7
     * 中序顺序是 4 2 5 1 6 3 7
     * 找到1在中序遍历中的下标idx=3
     * 左子树是 4 2 5 即 idx - inorder_left
     */
    const left_size = idx - inorder_left;

    // 于是可以构造左右子树
    const root_left = build(preorder, inorder, preorder_left+1, preorder_left+left_size, inorder_left, inorder_left+left_size);
    const root_rifgt = build(preorder, inorder, preorder_left+left_size+1, preorder_right, inorder_left+left_size+1, inorder_right);
    
    root.left = root_left;
    root.right = root_rifgt;

    return root;
  }
  

  return build(preorder, inorder, 0, n-1, 0, n-1);
};
// @lc code=end

