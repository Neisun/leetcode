/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
 *
 * https://leetcode.cn/problems/partition-list/description/
 *
 * algorithms
 * Medium (64.36%)
 * Likes:    827
 * Dislikes: 0
 * Total Accepted:    271.6K
 * Total Submissions: 420.6K
 * Testcase Example:  '[1,4,3,2,5,2]\n3'
 *
 * 给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。
 * 
 * 你应当 保留 两个分区中每个节点的初始相对位置。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,4,3,2,5,2], x = 3
 * 输出：[1,2,2,4,3,5]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [2,1], x = 2
 * 输出：[1,2]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点的数目在范围 [0, 200] 内
 * -100 
 * -200 
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  /**
   * 遍历+栈的方式
   * 利用栈储存好顺序，然后遍历栈，创建节点，连接节点，最后返回节点
   * 有点分治算法的意思
   */
  // if (!head) return head;
  // const leftStack = [];
  // const rightStack = [];
  // let cur = head;
  // while (cur) {
  //   if (cur.val < x) {
  //     leftStack.push(cur.val);
  //   } else {
  //     rightStack.push(cur.val);
  //   }
  //   cur = cur.next;
  // }

  // // 开始连接链表
  // const dummy_node = new ListNode();
  // cur = dummy_node;
  
  // for (let i = 0; i < leftStack.length; i++) {
  //   const node = new ListNode(leftStack[i]);
  //   cur.next = node;
  //   cur = cur.next;
  // }

  // for (let i = 0; i < rightStack.length; i++) {
  //   const node = new ListNode(rightStack[i]);
  //   cur.next = node;
  //   cur = cur.next;
  // }

  // return dummy_node.next;

  /**
   * 两次遍历的方式
   */
  if (!head) return head;
  const dummy_node = new ListNode();
  let cur = dummy_node;
  let pointer = head;

  // 第一次遍历找比x小的值，并连接
  while (pointer) {
    if (pointer.val < x) {
      const node = new ListNode(pointer.val);
      cur.next = node;
      cur = cur.next;
    }
    pointer = pointer.next;
  }

  // 第二次遍历找>=x的值，并连接
  pointer = head;
  while (pointer) {
    if (pointer.val >= x) {
      const node = new ListNode(pointer.val);
      cur.next = node;
      cur = cur.next;
    }
    pointer = pointer.next;
  }

  return dummy_node.next;
};
// @lc code=end

