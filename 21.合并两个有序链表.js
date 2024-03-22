/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode.cn/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (66.18%)
 * Likes:    3471
 * Dislikes: 0
 * Total Accepted:    1.6M
 * Total Submissions: 2.5M
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：l1 = [1,2,4], l2 = [1,3,4]
 * 输出：[1,1,2,3,4,4]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：l1 = [], l2 = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：l1 = [], l2 = [0]
 * 输出：[0]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 两个链表的节点数目范围是 [0, 50]
 * -100 
 * l1 和 l2 均按 非递减顺序 排列
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  /**
   * 有点类似于归并排序的方式
   */
  const node = new ListNode();
  let head = node;
  // list1和list2同时遍历，比较大小填充到新的链表中
  while (list1 && list2) {
    const nextNode = new ListNode();
    if (list1.val < list2.val) {
      nextNode.val = list1.val;
      list1 = list1.next;
    } else {
      nextNode.val = list2.val;
      list2 = list2.next;
    }
    head.next = nextNode;
    head = head.next;
  }
  // list1没遍历完
  while (list1) {
    const nextNode = new ListNode();
    nextNode.val = list1.val;
    head.next = nextNode;
    head = head.next;
    list1 = list1.next;
  }
  // list2没遍历完
  while (list2) {
    const nextNode = new ListNode();
    nextNode.val = list2.val;
    head.next = nextNode;
    head = head.next;
    list2 = list2.next;
  }
  
  return node.next;
};
// @lc code=end

