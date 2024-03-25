/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 随机链表的复制
 *
 * https://leetcode.cn/problems/copy-list-with-random-pointer/description/
 *
 * algorithms
 * Medium (66.01%)
 * Likes:    1346
 * Dislikes: 0
 * Total Accepted:    266.5K
 * Total Submissions: 399.8K
 * Testcase Example:  '[[7,null],[13,0],[11,4],[10,2],[1,0]]'
 *
 * 给你一个长度为 n 的链表，每个节点包含一个额外增加的随机指针 random ，该指针可以指向链表中的任何节点或空节点。
 * 
 * 构造这个链表的 深拷贝。 深拷贝应该正好由 n 个 全新 节点组成，其中每个新节点的值都设为其对应的原节点的值。新节点的 next 指针和 random
 * 指针也都应指向复制链表中的新节点，并使原链表和复制链表中的这些指针能够表示相同的链表状态。复制链表中的指针都不应指向原链表中的节点 。
 * 
 * 例如，如果原链表中有 X 和 Y 两个节点，其中 X.random --> Y 。那么在复制链表中对应的两个节点 x 和 y ，同样有 x.random
 * --> y 。
 * 
 * 返回复制链表的头节点。
 * 
 * 用一个由 n 个节点组成的链表来表示输入/输出中的链表。每个节点用一个 [val, random_index] 表示：
 * 
 * 
 * val：一个表示 Node.val 的整数。
 * random_index：随机指针指向的节点索引（范围从 0 到 n-1）；如果不指向任何节点，则为  null 。
 * 
 * 
 * 你的代码 只 接受原链表的头节点 head 作为传入参数。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
 * 输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 
 * 
 * 输入：head = [[1,1],[2,1]]
 * 输出：[[1,1],[2,1]]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 
 * 
 * 输入：head = [[3,null],[3,0],[3,null]]
 * 输出：[[3,null],[3,0],[3,null]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= n <= 1000
 * -10^4 <= Node.val <= 10^4
 * Node.random 为 null 或指向链表中的节点。
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  /**
   * 复制一个next，简单
   * 如何复制这个random？？
   * 
   * 使用哈希表的方式
   * 哈希表的格式？
   * node -> newNode
   * 然后再建立联系
   * map.get(node).next = map.get(node.next)
   * map.get(node).random = map.get(node.random)
   * 
   * 重新捋一下逻辑，思维混乱
   */
  // if (!head) return null;
  // let cur = head;
  // const map = new Map();
  // while (cur) {
  //   const newNode = new Node(cur.val);
  //   map.set(cur, newNode);
  //   cur = cur.next;
  // }

  // // 建立联系
  // cur = head;
  // while (cur) {
  //   map.get(cur).next = map.get(cur.next) || null;
  //   map.get(cur).random = map.get(cur.random) || null;
  //   cur = cur.next;
  // }

  // return map.get(head);

  /**
   * 另一种思路
   * 1. 构建节点
   * node1 -> newNode1 -> node2 -> newNode2 -> node3 -> newNode3...
   * 2. 
   * newNode.next = node.next.next
   * newNode.random = node.next.next.random
   * 3. 去掉新旧节点的联系
   * node.next = node.next.next
   * newNode.next = newNode.next.next
   * 
   * 重新捋一下逻辑，写的很有问题，思维混乱
   */
  if (!head) return null;
  // 1. 构建节点
  let cur = head;
  while (cur) {
    const newNode = new Node(cur.val);
    newNode.next = cur.next;
    cur.next = newNode;
    cur = newNode.next;
  }


  // 2. random建立联系
  cur = head;
  while (cur) {
    if (cur.random) {
      cur.next.random = cur.random.next;
    }
    cur = cur.next.next;
  }

  // 3. 删除新旧链表的联系
  let pre = head;
  let res = head.next;
  cur = head.next;
  while (cur && cur.next) {
    pre.next = cur.next;
    pre = pre.next;
    cur.next = pre.next;
    cur = cur.next;
  }
  pre.next = null;
  return res;
};
// @lc code=end

