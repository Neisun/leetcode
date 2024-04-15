/*
 * @lc app=leetcode.cn id=173 lang=javascript
 *
 * [173] 二叉搜索树迭代器
 *
 * https://leetcode.cn/problems/binary-search-tree-iterator/description/
 *
 * algorithms
 * Medium (81.67%)
 * Likes:    751
 * Dislikes: 0
 * Total Accepted:    134.3K
 * Total Submissions: 163.8K
 * Testcase Example:  '["BSTIterator","next","next","hasNext","next","hasNext","next","hasNext","next","hasNext"]\n' +
  '[[[7,3,15,null,null,9,20]],[],[],[],[],[],[],[],[],[]]'
 *
 * 实现一个二叉搜索树迭代器类BSTIterator ，表示一个按中序遍历二叉搜索树（BST）的迭代器：
 * 
 * 
 * 
 * BSTIterator(TreeNode root) 初始化 BSTIterator 类的一个对象。BST 的根节点 root
 * 会作为构造函数的一部分给出。指针应初始化为一个不存在于 BST 中的数字，且该数字小于 BST 中的任何元素。
 * boolean hasNext() 如果向指针右侧遍历存在数字，则返回 true ；否则返回 false 。
 * int next()将指针向右移动，然后返回指针处的数字。
 * 
 * 
 * 注意，指针初始化为一个不存在于 BST 中的数字，所以对 next() 的首次调用将返回 BST 中的最小元素。
 * 
 * 
 * 
 * 你可以假设 next() 调用总是有效的，也就是说，当调用 next() 时，BST 的中序遍历中至少存在一个下一个数字。
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 输入
 * ["BSTIterator", "next", "next", "hasNext", "next", "hasNext", "next",
 * "hasNext", "next", "hasNext"]
 * [[[7, 3, 15, null, null, 9, 20]], [], [], [], [], [], [], [], [], []]
 * 输出
 * [null, 3, 7, true, 9, true, 15, true, 20, false]
 * 
 * 解释
 * BSTIterator bSTIterator = new BSTIterator([7, 3, 15, null, null, 9, 20]);
 * bSTIterator.next();    // 返回 3
 * bSTIterator.next();    // 返回 7
 * bSTIterator.hasNext(); // 返回 True
 * bSTIterator.next();    // 返回 9
 * bSTIterator.hasNext(); // 返回 True
 * bSTIterator.next();    // 返回 15
 * bSTIterator.hasNext(); // 返回 True
 * bSTIterator.next();    // 返回 20
 * bSTIterator.hasNext(); // 返回 False
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点的数目在范围 [1, 10^5] 内
 * 0 
 * 最多调用 10^5 次 hasNext 和 next 操作
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 
 * 你可以设计一个满足下述条件的解决方案吗？next() 和 hasNext() 操作均摊时间复杂度为 O(1) ，并使用 O(h) 内存。其中 h
 * 是树的高度。
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
// 使用单向链表记录中序遍历
// 我们创建一个链表类
// class LinkNode {
//   constructor(val, next) {
//     this.val = val || null;
//     this.next = next || null;
//   }
// }
// /**
//  * @param {TreeNode} root
//  */
// var BSTIterator = function(root) {
//   this.head = new LinkNode();
//   this.current = this.head;
//   // 中旬遍历二叉树
//   const inorder = (root) => {
//     if (!root) return null;
//     inorder(root.left);
//     const node = new LinkNode(root.val);
//     this.current.next = node;
//     this.current = this.current.next;
//     inorder(root.right);
//   }
//   inorder(root);
//   this.current = this.head;
// };

// /**
//  * @return {number}
//  */
// BSTIterator.prototype.next = function() {
//   if (this.hasNext()) {
//     const next = this.current.next;
//     this.current = next;
//     return next.val;
//   }
// };

// /**
//  * @return {boolean}
//  */
// BSTIterator.prototype.hasNext = function() {
//   return this.current.next !== null;
// };

/****分割线***********/
// 上述方式使用单向链表的方式，下边我们使用数组的方式

/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
  this.stack = [];
  this.pointer = -1;
  
  const inorder = (root) => {
    if (!root) return null;
    inorder(root.left);
    this.stack.push(root.val);
    inorder(root.right);
  }

  inorder(root);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  this.pointer++;
  return this.stack[this.pointer];
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.pointer < this.stack.length - 1
};


/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end

