/*
 * @lc app=leetcode.cn id=515 lang=typescript
 *
 * [515] 在每个树行中找最大值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// 可以用DFS解决
/**
 * 我们做一个总结，如果DFS的方式进行层序遍历，需要知道当前层即level
 * 每次往下走，即遍left，right时候，level+1
 * 需要一个数组去记录即res，如果数组的长度 < level即到了新的一层，需要res.push操作
 */
function largestValues(root: TreeNode | null): number[] {
  const res:number[] = [];
  const dfs = (root:TreeNode, level:number) => {
    if (!root) return;
    if (level >= res.length) {
      res.push(root.val);
    } else {
      res[level] = Math.max(res[level], root.val);
    }

    dfs(root.left, level + 1);
    dfs(root.right, level + 1);
  }
  dfs(root, 0);
  return res;
};
// @lc code=end

