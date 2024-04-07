/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 *
 * https://leetcode.cn/problems/lru-cache/description/
 *
 * algorithms
 * Medium (53.75%)
 * Likes:    3134
 * Dislikes: 0
 * Total Accepted:    616.6K
 * Total Submissions: 1.2M
 * Testcase Example:  '["LRUCache","put","put","get","put","get","put","get","get","get"]\n' +
  '[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]'
 *
 * 请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
 * 
 * 实现 LRUCache 类：
 * 
 * 
 * 
 * 
 * LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
 * int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
 * void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组
 * key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
 * 
 * 
 * 函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。
 * 
 * 
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 输入
 * ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
 * [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
 * 输出
 * [null, null, null, 1, null, -1, null, -1, 3, 4]
 * 
 * 解释
 * LRUCache lRUCache = new LRUCache(2);
 * lRUCache.put(1, 1); // 缓存是 {1=1}
 * lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
 * lRUCache.get(1);    // 返回 1
 * lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
 * lRUCache.get(2);    // 返回 -1 (未找到)
 * lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
 * lRUCache.get(1);    // 返回 -1 (未找到)
 * lRUCache.get(3);    // 返回 3
 * lRUCache.get(4);    // 返回 4
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= capacity <= 3000
 * 0 <= key <= 10000
 * 0 <= value <= 10^5
 * 最多调用 2 * 10^5 次 get 和 put
 * 
 * 
 */

// @lc code=start
/**
 * 整体思路
 * 双向链表
 * 头结点 head
 * 尾节点 tail
 * 1. 首尾节点相联 
 * head.prev = tail
 * head.next = tail
 * tail.prev = head
 * tail.next = head
 * 
 * 2. 添加节点到头部 假设该节点是x
 * head <-> x <-> x1
 * x.prev = head
 * x.next = head.next
 * x.prev.next = x
 * x.next.prev = x
 * 
 * 3. 删除尾节点 假设删除的节点是x
 * x1 <-> x <-> tail
 * x.prev.next = tail
 * tail.prev = x.prev
 */

class LinkNode {
  constructor(val, prev, next) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.nodeMap = new Map();
  this.head = new LinkNode();
  this.tail = new LinkNode();
  this.head.next = this.tail;
  this.head.prev = this.tail;
  this.tail.next = this.head;
  this.tail.prev = this.head;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  // 节点不存在
  if (!this.nodeMap.has(key)) return -1;
  // 节点存在
  // 需要把节点移动到头部
  const node = this.nodeMap.get(key);
  this.moveToHead(node);
  return node.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  let node = null;
  // 节点不存在
  if (!this.nodeMap.has(key)) {
    // 创建节点
    node = new LinkNode(value);
  } else {
    // 得到旧节点
    node = this.nodeMap.get(key);
    // 更新节点值
    node.val = value;
  }
  // 节点移动到头部
  this.moveToHead(node);
  // 更新节点
  this.nodeMap.set(key, node);
  // 判断是否超过容积
  if (this.nodeMap.size > this.capacity) {
    // 删除节点
    this.nodeMap.delete(this.tail.prev.val);
    this.removeTail(this.tail.prev);
  }
};

LRUCache.prototype.moveToHead = function (x) {
  x.prev = this.head;
  x.next = this.head.next;
  x.next.prev = x;
  x.prev.next = x;
}

LRUCache.prototype.removeTail = function (x) {
  x.prev.next = this.tail;
  this.tail.prev = x.prev;
}


/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

