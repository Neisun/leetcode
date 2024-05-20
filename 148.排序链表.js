/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
 *
 * https://leetcode.cn/problems/sort-list/description/
 *
 * algorithms
 * Medium (65.53%)
 * Likes:    2307
 * Dislikes: 0
 * Total Accepted:    512.8K
 * Total Submissions: 781.6K
 * Testcase Example:  '[4,2,1,3]'
 *
 * 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [4,2,1,3]
 * 输出：[1,2,3,4]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [-1,5,3,4,0]
 * 输出：[-1,0,3,4,5]
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
 * 链表中节点的数目在范围 [0, 5 * 10^4] 内
 * -10^5 <= Node.val <= 10^5
 * 
 * 
 * 
 * 
 * 进阶：你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？
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
var sortList = function(head) {
  /**
   * 第一种思路
   * 1. 将链表从头到尾遍历一遍，每个节点存储一下，存储值和当前节点
   * 2. 根据节点值排序，新建链表
   */
  // const list = [];
  // let cur = head;
  // // 遍历链表
  // while (cur) {
  //   list.push({
  //     val: cur.val,
  //     node: cur
  //   })
  //   cur = cur.next;
  // }

  // // 升序排列list
  // list.sort((a, b) => a.val - b.val);

  // // 重新构造链表
  // let result = new ListNode();
  // let root = result;
  
  // for (const item of list) {
  //   // 切断联系
  //   item.node.next = null;
  //   root.next = item.node;
  //   root = root.next;
  // }

  // return result.next;

  // -----------分割线------------

  /**
   * 新的解法？？？
   * 分治思想解决
   * 1. 将链表从中点一分为二
   * 2. 利用21题，合并两个有序链表思想 分别处理左右
   * 整个链表处理完毕
   */
};
// @lc code=end

