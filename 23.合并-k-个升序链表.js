/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并 K 个升序链表
 *
 * https://leetcode.cn/problems/merge-k-sorted-lists/description/
 *
 * algorithms
 * Hard (58.64%)
 * Likes:    2818
 * Dislikes: 0
 * Total Accepted:    809.5K
 * Total Submissions: 1.4M
 * Testcase Example:  '[[1,4,5],[1,3,4],[2,6]]'
 *
 * 给你一个链表数组，每个链表都已经按升序排列。
 * 
 * 请你将所有链表合并到一个升序链表中，返回合并后的链表。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：lists = [[1,4,5],[1,3,4],[2,6]]
 * 输出：[1,1,2,3,4,4,5,6]
 * 解释：链表数组如下：
 * [
 * ⁠ 1->4->5,
 * ⁠ 1->3->4,
 * ⁠ 2->6
 * ]
 * 将它们合并到一个有序链表中得到。
 * 1->1->2->3->4->4->5->6
 * 
 * 
 * 示例 2：
 * 
 * 输入：lists = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 输入：lists = [[]]
 * 输出：[]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * k == lists.length
 * 0 <= k <= 10^4
 * 0 <= lists[i].length <= 500
 * -10^4 <= lists[i][j] <= 10^4
 * lists[i] 按 升序 排列
 * lists[i].length 的总和不超过 10^4
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  /**
   * 作弊法
   * 不知道时间复杂度上允不允许
   * 作弊法时间复杂度上通过了 嘻嘻
   */
  // const sortList = [];
  // lists.forEach(list => {
  //   let cur = list;
  //   while (cur) {
  //     sortList.push(cur.val);
  //     cur = cur.next;
  //   }
  // })

  // // 对sortList排序
  // sortList.sort((a, b) => a - b);

  // // 创建新链表
  // const dummyNode = new ListNode();
  // let head = dummyNode;
  // for (const val of sortList) {
  //   const newNode = new ListNode();
  //   newNode.val = val;
  //   head.next = newNode;
  //   head = head.next;
  // }

  // return dummyNode.next;


  /**
   * 注意题设，每个链表都已经被升序排好
   */

  // const merge = (list1, list2) => {
  //   if (!list1) return list2;
  //   if (!list2) return list1;
  //   let dummyNode = new ListNode();
  //   let head = dummyNode;
  //   let head1 = list1;
  //   let head2 = list2;
  //   while (head1 && head2) {
  //     if (head1.val <= head2.val) {
  //       head.next = head1;
  //       head1 = head1.next;
  //     } else {
  //       head.next = head2;
  //       head2 = head2.next;
  //     }
  //     head = head.next;
  //   }

  //   if (head1) {
  //     head.next = head1
  //   } else if (head2) {
  //     head.next = head2;
  //   }

  //   return dummyNode.next;
  // }


  // let result = null;
  // for (const list of lists) {
  //   result = merge(result, list);
  // }

  // return result;


  /**
   * 第三种方式
   * 分治
   */
  
  const mergeList = (list1, list2) => {
    if (!list1) return list2;
    if (!list2) return list1;
    let dummyNode = new ListNode();
    let head = dummyNode;
    let head1 = list1;
    let head2 = list2;
    while (head1 && head2) {
      if (head1.val <= head2.val) {
        head.next = head1;
        head1 = head1.next
      } else {
        head.next = head2;
        head2 = head2.next;
      }
      head = head.next;
    }
    // if (head1) {
    //   head.next = head1;
    // } else if (head2) {
    //   head.next = head2;
    // }
    head.next = head1 ? head1 : head2;
    return dummyNode.next;
  }

  const merge = (lists, l, r) => {
    if (l === r) return lists[l];
    if (l > r) return null;
    const mid = Math.floor((l+r)/2);
    const list1 = merge(lists, l, mid);
    const list2 = merge(lists, mid+1, r);
    return mergeList(list1, list2);
  }

  return merge(lists, 0, lists.length - 1);
};
// @lc code=end

