/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 *
 * https://leetcode.cn/problems/reverse-linked-list-ii/description/
 *
 * algorithms
 * Medium (55.83%)
 * Likes:    1753
 * Dislikes: 0
 * Total Accepted:    490K
 * Total Submissions: 874.3K
 * Testcase Example:  '[1,2,3,4,5]\n2\n4'
 *
 * 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left  。请你反转从位置 left 到位置 right 的链表节点，返回
 * 反转后的链表 。
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,3,4,5], left = 2, right = 4
 * 输出：[1,4,3,2,5]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [5], left = 1, right = 1
 * 输出：[5]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点数目为 n
 * 1 
 * -500 
 * 1 
 * 
 * 
 * 
 * 
 * 进阶： 你可以使用一趟扫描完成反转吗？
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  /**
   * 206是反转整个链表
   * 而这道题是反转部分，组团忽悠我来了？？
   * 
   * 先采用常规做法，也就是笨方法
   * 
   * 
   * 学会使用穿针引线的方式解决
   */

  // 常规方式
  const dummy_node = new ListNode(-1);
  dummy_node.next = head;
  
  // 1. 先找到反转前的节点 prev
  let prev = dummy_node;
  for (let i = 0; i < left - 1; i++) {
    prev = prev.next;
  }

  // 2. 找到反转最后的节点 right_node
  let right_node = prev;
  for (let i = 0; i <= right - left; i++) {
    right_node = right_node.next;
  }

  // 3. 记录反转后的第一个节点 after
  // 记录反转的左节点 left_node
  // 记录反转的右节点
  let after = right_node.next;
  let left_node = prev.next;

  // 4. 反转这个区间的节点
  let _cur = left_node;
  let pre = null;
  for (let i = 0; i <= right - left; i++) {
    const tmp = _cur.next;
    _cur.next = pre;
    pre = _cur;
    _cur = tmp;
  }

  // 5. prev.next = right_node
  // left_node.next = after
  prev.next = right_node;
  left_node.next = after;


  // 最终返回dummy_node.next
  return dummy_node.next;
};
// @lc code=end

