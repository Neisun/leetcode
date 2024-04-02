/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 *
 * https://leetcode.cn/problems/rotate-list/description/
 *
 * algorithms
 * Medium (41.33%)
 * Likes:    1039
 * Dislikes: 0
 * Total Accepted:    370.4K
 * Total Submissions: 896.1K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,3,4,5], k = 2
 * 输出：[4,5,1,2,3]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [0,1,2], k = 4
 * 输出：[2,0,1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点的数目在范围 [0, 500] 内
 * -100 <= Node.val <= 100
 * 0 <= k <= 2 * 10^9
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  /**
   * 一个比较笨的方法
   */
  // 记录总数
  // let size = 0;
  // let cur = head;
  // const stack = [];
  // while (cur) {
  //   stack.push(cur.val);
  //   cur = cur.next;
  //   size++;
  // }

  // // 遍历
  // const n = k % size;
  // for (let i = 0; i < n; i++) {
  //   const tmp = stack.pop();
  //   stack.unshift(tmp);
  // }

  // const dummy_node = new ListNode();
  // cur = dummy_node;
  // let ans = dummy_node;
  // for (let i = 0; i < stack.length; i++) {
  //   const node = new ListNode();
  //   node.val = stack[i];
  //   cur.next = node;
  //   cur = cur.next;
  // }
  
  // return ans.next;

  /**
   * 另一种方式，找到要移动前节点的位置记为prev
   * 要移动的节点记为 move = prev.next;
   * 断开移动前节点的连接 prev.next = null
   * 将移动的节点加到头部 需要找到move的尾结点 tail 然后连接头结点
   * tail.next = head;
   * 至此完成
   */
  // if (!head || k === 0) return head;
  // let count = 0;
  // let cur = head;
  // // 第一次遍历，确定链表的长度
  // while (cur) {
  //   count++;
  //   cur = cur.next;
  // }

  // // 1 2 3 4 5
  // let size = count - (k % count)
  // // 找到移动前的节点
  // let prev = head;
  // for (let i = 0; i < size - 1; i++) {
  //   prev = prev.next;
  // }
  // // console.log(prev.val);

  // // 记录移动的节点
  // const move = prev.next;
  // let tail = move;
  // // 断开连接
  // prev.next = null;
  // // 找到move的尾结点
  // while (tail && tail.next) {
  //   tail = tail.next;
  // }
  // // 连接头结点
  // if (tail) {
  //   tail.next = head;
  // }
  // return move === null ? head : move;
  

  /**
   * 还有一种方式，把链表连成环，然后找到断开的点，即可完成
   */

  if (!head || k === 0) return head;

  // 第一次遍历确定链表的长度
  let cur = head;
  let count = 1;
  while (cur.next) {
    count++;
    cur = cur.next;
  }

  // 连成环
  cur.next = head;

  // 找到断开的点
  let size = count - (k % count);
  cur = head;
  for (let i = 0; i < size - 1; i++) {
    cur = cur.next;
  }

  // 记录答案
  const ans = cur.next;

  // 断开连接
  cur.next = null;

  return ans;
};
// @lc code=end

