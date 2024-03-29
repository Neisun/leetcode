/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 *
 * https://leetcode.cn/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (46.56%)
 * Likes:    2837
 * Dislikes: 0
 * Total Accepted:    1.4M
 * Total Submissions: 2.9M
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,3,4,5], n = 2
 * 输出：[1,2,3,5]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [1], n = 1
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：head = [1,2], n = 1
 * 输出：[1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中结点的数目为 sz
 * 1 <= sz <= 30
 * 0 <= Node.val <= 100
 * 1 <= n <= sz
 * 
 * 
 * 
 * 
 * 进阶：你能尝试使用一趟扫描实现吗？
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  /**
   * 比较笨的方式
   * 多次扫描的方式
   */
  // const dummy_node = new ListNode();
  // dummy_node.next = head;
  // // 第一次遍历统计总数
  // let cur = dummy_node;
  // let count = 0;
  // while (cur) {
  //   cur = cur.next;
  //   count++;
  // }

  // // console.log(count)

  // // 第二次遍历找到要删除节点的前序节点
  // let pre = dummy_node;
  // for (let i = 0; i < count - n - 1; i++) {
  //   pre = pre.next;
  // }
  
  // // console.log(pre)

  // // 找到要删除节点的后序节点
  // let after = pre.next.next || null;

  // // 前序节点 连接 后序节点，等于删除了要删除的节点
  // pre.next = after;

  // return dummy_node.next;


  /**
   * 聪明的方式，使用栈的方式
   */
  const dummy_node = new ListNode(-1);
  dummy_node.next = head;
  const stack = [];
  let cur = dummy_node;
  while (cur) {
    stack.push(cur);
    cur = cur.next;
  }

  // 找出删除节点的前一个
  let pre = null;
  for (let i = 0; i <= n; i++) {
    pre = stack.pop();
  }

  pre.next = pre.next.next;

  return dummy_node.next;

};
// @lc code=end

