/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
 *
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-list-ii/description/
 *
 * algorithms
 * Medium (53.59%)
 * Likes:    1280
 * Dislikes: 0
 * Total Accepted:    425K
 * Total Submissions: 783.6K
 * Testcase Example:  '[1,2,3,3,4,4,5]'
 *
 * 给定一个已排序的链表的头 head ， 删除原始链表中所有重复数字的节点，只留下不同的数字 。返回 已排序的链表 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,3,3,4,4,5]
 * 输出：[1,2,5]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [1,1,1,2,3]
 * 输出：[2,3]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点数目在范围 [0, 300] 内
 * -100 <= Node.val <= 100
 * 题目数据保证链表已经按升序 排列
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
var deleteDuplicates = function(head) {
  /**
   * 这个题，方法挺多的
   * 第一种方式使用hash方式统计次数
   */
  // 统计次数
  const map = new Map();
  let cur = head;
  while (cur) {
    map.set(cur.val, (map.get(cur.val) || 0) + 1);
    cur = cur.next;
  }

  // 再次遍历
  let dummy_node = new ListNode();
  let ans = dummy_node;
  cur = head;
  while (cur) {
    if (map.get(cur.val) === 1) {
      const node = new ListNode();
      node.val = cur.val;
      dummy_node.next = node;
      dummy_node = dummy_node.next;
    }
    cur = cur.next;
  }

  return ans.next;

  /**
   * 可以使用指针的方式
   * 思考一下怎么做比较好
   */
};
// @lc code=end

