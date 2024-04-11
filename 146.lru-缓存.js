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
 * 说一下这个题的思路吧，这题理解起来不是很难，但是并不是很好写的一个题
 * 我个人觉得这更算是一个hard级别的题目，可能在于比较好理解或者是现在比较卷
 * 这个题变成了medium级别的了
 * 
 * 这个题目挺像是从一摞书中放书和取书
 * 取书，就是把书从这摞书中取出一本，放在最上边
 * 放书，分两种情况了，书如果有，就把书拿出来，放上边；如果没有，就把新书放上边
 */


// 创建双向链表解决此类问题
class LinkNode {
  constructor(prev, next, val, key) {
    this.prev = prev;
    this.next = next;
    this.val = val;
    this.key = key;
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  // 创建一个map，用来存key-val
  this.nodeMap = new Map();
  // 创建头尾节点，用来记录书堆中头尾书
  this.head = new LinkNode();
  this.tail = new LinkNode();
  this.head.prev = this.tail;
  this.head.next = this.tail;
  this.tail.prev = this.head;
  this.tail.next = this.head;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (!this.nodeMap.has(key)) return -1;
  // 把节点移动到头部
  const node = this.nodeMap.get(key);
  this.moveNodeToHead(node);
  return node.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  // 如果节点存在
  if (this.nodeMap.has(key)) {
    const node = this.nodeMap.get(key);
    node.val = value;
    this.nodeMap.set(key, node);
    // 移动到头部
    this.moveNodeToHead(node);
  } else {
    const node = new LinkNode(null, null, value, key);
    this.nodeMap.set(key, node);
    // 添加到头部
    this.addNodeToHead(node);
    // 如果size超过capacity
    if (this.nodeMap.size > this.capacity) {
      // 取出尾元素
      const node = this.tail.prev;
      // 删除尾元素
      this.removeTail(node);
      // 从map中删除
      this.nodeMap.delete(node.key);
    }
  }
};

// 细分一下操作
// 1. 添加一本新书，就是把书放到头部，addNodeToHead
// 2. 抽出一本书，等于把这本书拿出来，然后放头部，即 先 removeNode 然后 addNodeToHead
// 3. 超出capacity了，就意味着需要找到尾部书，然后去掉，即 找尾 然后 removeNode
// 总结一下：1. 添加新书 2. 抽出一本书放头部 3. 删除一本书

LRUCache.prototype.addNodeToHead = function (node) {
  // head node x ... tail 在其中添加新的节点到头部
  // 处理新节点的前后连接
  node.prev = this.head;
  node.next = this.head.next;
  // 处理新节点与头结点的连接
  node.prev.next = node;
  // 处理新节点与新节点后边的连接
  node.next.prev = node;
}

LRUCache.prototype.removeNode = function (node) {
  // ... x1 x2 x3 ...
  // 假如删除的是x2
  node.prev.next = node.next;
  node.next.prev = node.prev;
  node.prev = null;
  node.next = null;
  return node;
}

LRUCache.prototype.moveNodeToHead = function (node) {
  // 取出这个节点，等于删除
  // 然后把这个节点加到头部
  const _node = this.removeNode(node);
  this.addNodeToHead(_node);
}

LRUCache.prototype.removeTail = function (node) {
  this.removeNode(node);
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

