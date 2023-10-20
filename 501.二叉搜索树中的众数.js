/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
 * @return {number[]}
 */
// 如果使用递归，还是有点难想的，不过倒是很好的设计思想
var findMode = function(root) {
  let maxCount = 1;
  let count = 0;
  let pre = null;
  let res = [];
  const dfs = root => {
    if (!root) return;
    // 中序遍历
    // 先走左边
    dfs(root.left);
    // 本层逻辑
    if (!pre) { // 说明是第一个节点
      count = 1 // 第一个节点出现的个数计为1
    } else if (pre.val === root.val) { // 相同节点
      count++;
    } else { // 新的不同节点
      count = 1;
    }
    
    // 当节点数个最大节点数一直的时候，就插入
    if (count === maxCount) {
      res.push(root.val);
    }

    // 当节点数 > 最大节点数，说明找到了新的节点，需要清除掉之前的结果，在插入新的结果
    if (maxCount < count) {
      res = [];
      maxCount = count;
      res.push(root.val);
    }
    // 记录前一个节点
    pre = root;
    // 再走右边
    dfs(root.right);
    return;
  }
  dfs(root);
  return res;
};
// @lc code=end

