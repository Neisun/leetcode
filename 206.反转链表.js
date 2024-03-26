/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 *
 * https://leetcode.cn/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (73.71%)
 * Likes:    3539
 * Dislikes: 0
 * Total Accepted:    1.8M
 * Total Submissions: 2.5M
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,3,4,5]
 * 输出：[5,4,3,2,1]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [1,2]
 * 输出：[2,1]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：head = []
 * 输出：[]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点的数目范围是 [0, 5000]
 * -5000 
 * 
 * 
 * 
 * 
 * 进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？
 * 
 * 
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
 * @return {ListNode}
 */
var reverseList = function(head) {
  /**
   * 双指针方案
   * 一个pre指针指向第一个节点
   * 一个cur指针指向第二个节点
   * 先存储一下cur.next tmp = cur.next
   * cur.next = pre
   * pre = cur
   * cur = tmp
   * 这个方案的效率是最高的，没有使用额外的空间，遍历一次
   */
  let pre = null;
  let cur = head;
  let tmp = null;
  while (cur) {
    // 存储cur的下一个节点
    tmp = cur.next;
    // 改变指向，反转
    cur.next = pre;
    // pre前进一步
    pre = cur;
    // cur前进一步
    cur = tmp;
  }
  return pre;

  /**
   * 一个比较笨的方法
   * 先遍历，以队列的方式存储节点，即没遍历一个节点，将节点放在队头
   * 然后遍历队列重组节点即可
   */
  // let cur = head;
  // const list = [];
  // while (cur) {
  //   list.unshift(cur);
  //   cur = cur.next;
  // }

  // // 遍历list
  // const newNode = new ListNode();
  // cur = newNode;
  // for (const node of list) {
  //   const _node = new ListNode(node.val);
  //   cur.next = _node;
  //   cur = cur.next;
  // }
  // cur.next = null;
  
  // return newNode.next;
};
// @lc code=end

