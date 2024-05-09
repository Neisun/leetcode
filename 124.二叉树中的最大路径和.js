/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
 *
 * https://leetcode.cn/problems/binary-tree-maximum-path-sum/description/
 *
 * algorithms
 * Hard (45.33%)
 * Likes:    2203
 * Dislikes: 0
 * Total Accepted:    400.5K
 * Total Submissions: 880.9K
 * Testcase Example:  '[1,2,3]'
 *
 * 二叉树中的 路径 被定义为一条节点序列，序列中每对相邻节点之间都存在一条边。同一个节点在一条路径序列中 至多出现一次 。该路径 至少包含一个
 * 节点，且不一定经过根节点。
 * 
 * 路径和 是路径中各节点值的总和。
 * 
 * 给你一个二叉树的根节点 root ，返回其 最大路径和 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [1,2,3]
 * 输出：6
 * 解释：最优路径是 2 -> 1 -> 3 ，路径和为 2 + 1 + 3 = 6
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [-10,9,20,null,null,15,7]
 * 输出：42
 * 解释：最优路径是 15 -> 20 -> 7 ，路径和为 15 + 20 + 7 = 42
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点数目范围是 [1, 3 * 10^4]
 * -1000 <= Node.val <= 1000
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
var maxPathSum = function(root) {
  /**
   * what`s is path?
   * It doesn`t have to include the root node
   * So How can we solve it?
   */
  // // 按照哪种遍历方式？前 中 后序？
  // // 我个人倾向于 使用后序遍历，先找左，再找右
  // // 根据left 和 right是否大于0进行判断
  // // 如果left < 0 right > 0 max = right + root.val
  // // left < 0 right <= 0 max = root.val
  // // left >= 0 right > 0 max = left + right + root.val
  // // left >= 0 right <= 0 max = root.val + left
  // if (!root) return 0;
  // const left = maxPathSum(root.left);
  // const right = maxPathSum(root.right);

  // // 1. 左 = 0 右 = 0 max = root.val
  // // 2. 左 = 0 右 < 0 max = root.val
  // // 3. 左 = 0 右 > 0 max = root.val + right
  // // 4. 左 < 0 右 = 0 max = root.val
  // // 5. 左 < 0 右 < 0 max = root.val
  // // 6. 左 < 0 右 > 0 max = root.val + right
  // // 7. 左 > 0 右 = 0 max = root.val + left
  // // 8. 左 > 0 右 < 0 max = root.val + left
  // // 9. 左 > 0 右 > 0 max = root.val + left + right
  
  // // 我们把上述情况做一个简化
  // // 好像不对，还需要考虑 root.val的情况
  // if (root.val >= 0) {
  //   if (left <= 0 && right > 0) {
  //     return root.val + right;
  //   } else if (left > 0 && right <= 0) {
  //     return root.val + left;
  //   } else if (left > 0 && right > 0) {
  //     return root.val + left + right;
  //   } else {
  //     return root.val;
  //   }
  // } else {
  //   if (left <= 0 && right > 0) {
  //     return right;
  //   } else if (left > 0 && right <= 0) {
  //     return left;
  //   } else if (left > 0 && right > 0) {
  //     return left + right;
  //   } else {
  //     return root.val;
  //   }
  // }

  // 重做，思路不对
  let maxSum = -Infinity;
  
  const maxVal = root => {
    if (!root) return 0;

    // 利用后续遍历
    // 找出left与right，需要注意的时候，需要跟0做对比
    const left = Math.max(maxVal(root.left), 0);
    const right = Math.max(maxVal(root.right), 0);
    // 新的最大路径之和
    const newPathSum = root.val + left + right;
    // 打擂台比较
    maxSum = Math.max(maxSum, newPathSum);
    // 最终返回，当前节点+左右孩子最大的那个
    return root.val + Math.max(left, right);
  }
  maxVal(root);
  return maxSum;
};
// @lc code=end

