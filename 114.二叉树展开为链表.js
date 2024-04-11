/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
 *
 * https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/description/
 *
 * algorithms
 * Medium (73.20%)
 * Likes:    1655
 * Dislikes: 0
 * Total Accepted:    454.1K
 * Total Submissions: 617.3K
 * Testcase Example:  '[1,2,5,3,4,null,6]'
 *
 * 给你二叉树的根结点 root ，请你将它展开为一个单链表：
 * 
 * 
 * 展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
 * 展开后的单链表应该与二叉树 先序遍历 顺序相同。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [1,2,5,3,4,null,6]
 * 输出：[1,null,2,null,3,null,4,null,5,null,6]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：root = [0]
 * 输出：[0]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中结点数在范围 [0, 2000] 内
 * -100 
 * 
 * 
 * 
 * 
 * 进阶：你可以使用原地算法（O(1) 额外空间）展开这棵树吗？
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  /**
   * 先用笨方法做一下
   * 通过倒是通过了，但是效率略低
   */
  // // 利用数组存储前序遍历节点
  // const preorderList = [];
  // // 前序遍历函数
  // const preorder = (root) => {
  //   if (!root) return null;
  //   preorderList.push(root);
  //   preorder(root.left);
  //   preorder(root.right);
  // }
  // preorder(root);
  // // 从前向后遍历前序遍历数组
  // const len = preorderList.length;
  // for (let i = 0; i < len; i++) {
  //   if (i !== len - 1) {
  //     preorderList[i].left = null;
  //     preorderList[i].right = preorderList[i+1];
  //   }
  // }

  /**
   * 我们换一种方式
   * 观察结果，以2节点为例
   * 我们发现是吧3放在2的右边，然后把2原来的右边接到了3最深层右边元素的后边
   */
  if (!root) return root;
  flatten(root.left);
  flatten(root.right);
  
  if (root.left) {
    const temp = root.right;
    root.right = root.left;
    root.left = null;
    let cur = root.right;
    while (cur.right) {
      cur = cur.right
    }
    cur.right = temp;
  }
};
// @lc code=end

