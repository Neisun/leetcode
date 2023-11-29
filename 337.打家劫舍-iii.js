/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
var rob = function(root) {
  /**
   * 二叉树的遍历
   */
  // 递归结束
  // if (!root) return 0;
  // // 如果没有子节点，那么返回自身
  // if (!root.left && !root.right) return root.val;
  // // 存储当前节点的节点值
  // let val0 = root.val;

  // // 如果偷父节点
  // // 那么左右子树都不能偷了，只能偷孙子节点
  // if (root.left) {
  //   val0 += rob(root.left.left) + rob(root.left.right);
  // }
  // if (root.right) {
  //   val0 += rob(root.right.left) + rob(root.right.right);
  // }

  // // 如果不偷父节点
  // // 左右子树的和
  // let val1 = 0;
  // val1 += rob(root.left) + rob(root.right);

  // return Math.max(val0, val1);

  /**
   * 二叉树与dp的结合
   * 二叉树的遍历，还是老样子，只不过，需要在返回值里做手脚
   * 返回的是一个length为2的数组
   * [0]表示不偷当前节点的最大值
   * [1]表示偷当前节点的最大值
   */

  const traverse = root => {
    if (!root) { // 相当于初始化了，空节点，没法偷
      return [0,0];
    }
  
    // 遍历左右孩子，最后处理当前节点，所以这是什么遍历？答：这是后序遍历，都会抢答了
    const left = traverse(root.left);
    const right = traverse(root.right);
  
    // 那么如何求最大值呢?这等同于进行状态推导，怎么推导呢
    // 偷父节点 那么孩子节点就不能被偷，所以取[0] 还需要加上父节点的值
    const val1 = root.val + left[0] + right[0];
    // 不偷父节点 那么就需要从两个孩子推导出来，但是不确定到底是取[0]还是[1]，所以取最大值相加
    const val2 = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
  
    return [val2, val1];
  };
  const result = traverse(root);
  return Math.max(result[0], result[1]);
};
// @lc code=end

