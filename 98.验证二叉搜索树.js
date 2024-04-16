/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
// 不能这么写，而是得利用二叉搜索树的中序遍历是依次递增的原理
// var isValidBST = function(root) {
//   if (!root) return true;
//   if (root.left && root.left.val >= root.val) return false;
//   if (root.right && root.right.val <= root.val) return false;
//   return isValidBST(root.left) && isValidBST(root.right);
// };

// 第一种方式，中序遍历，并且记录前个节点
// 记录前个节点的方式会非常常用在后续的学习中
var isValidBST = function(root) {
  // let pre = null;
  // const dfs = root => {
  //   if (!root) return true;
  //   const left = dfs(root.left);
  //   if (pre && pre.val >= root.val) {
  //     return false;
  //   }
  //   pre = root;
  //   const right = dfs(root.right);
  //   return left && right;
  // }
  // return dfs(root);











  // 使用中序遍历，比较 前一个节点与后一个节点
  // 如果出现 前一个节点 >= 后一个节点 直接return false
  let pre = null;
  const inorder = (root) => {
    if (!root) return true;
    const left = inorder(root.left);
    // 是否继续往下走，取决于left的是否为true
    if (left && pre !== null && pre >= root.val) return false;
    pre = root.val;
    const right = inorder(root.right);
    return left && right;
  }

  return inorder(root);
};

// 第二种方式，先进行一次中序遍历，将节点值存储到数组，再遍历数组，看是否依次递增
// 这种方式不赘述了
// @lc code=end

