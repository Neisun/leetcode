/*
 * @lc app=leetcode.cn id=380 lang=javascript
 *
 * [380] O(1) 时间插入、删除和获取随机元素
 *
 * https://leetcode.cn/problems/insert-delete-getrandom-o1/description/
 *
 * algorithms
 * Medium (52.40%)
 * Likes:    773
 * Dislikes: 0
 * Total Accepted:    138.9K
 * Total Submissions: 265.1K
 * Testcase Example:  '["RandomizedSet","insert","remove","insert","getRandom","remove","insert","getRandom"]\n' +
  '[[],[1],[2],[2],[],[1],[2],[]]'
 *
 * 实现RandomizedSet 类：
 * 
 * 
 * 
 * 
 * RandomizedSet() 初始化 RandomizedSet 对象
 * bool insert(int val) 当元素 val 不存在时，向集合中插入该项，并返回 true ；否则，返回 false 。
 * bool remove(int val) 当元素 val 存在时，从集合中移除该项，并返回 true ；否则，返回 false 。
 * int getRandom() 随机返回现有集合中的一项（测试用例保证调用此方法时集合中至少存在一个元素）。每个元素应该有 相同的概率 被返回。
 * 
 * 
 * 你必须实现类的所有函数，并满足每个函数的 平均 时间复杂度为 O(1) 。
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 输入
 * ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove",
 * "insert", "getRandom"]
 * [[], [1], [2], [2], [], [1], [2], []]
 * 输出
 * [null, true, false, true, 2, true, false, 2]
 * 
 * 解释
 * RandomizedSet randomizedSet = new RandomizedSet();
 * randomizedSet.insert(1); // 向集合中插入 1 。返回 true 表示 1 被成功地插入。
 * randomizedSet.remove(2); // 返回 false ，表示集合中不存在 2 。
 * randomizedSet.insert(2); // 向集合中插入 2 。返回 true 。集合现在包含 [1,2] 。
 * randomizedSet.getRandom(); // getRandom 应随机返回 1 或 2 。
 * randomizedSet.remove(1); // 从集合中移除 1 ，返回 true 。集合现在包含 [2] 。
 * randomizedSet.insert(2); // 2 已在集合中，所以返回 false 。
 * randomizedSet.getRandom(); // 由于 2 是集合中唯一的数字，getRandom 总是返回 2 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * -2^31 <= val <= 2^31 - 1
 * 最多调用 insert、remove 和 getRandom 函数 2 * 10^5 次
 * 在调用 getRandom 方法时，数据结构中 至少存在一个 元素。
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * 因为是O(1)的时间复杂度，所以我们想到了必然是使用map或者对象
 * 又因为随机，所以想到使用数组
 */

var RandomizedSet = function() {
  this.map = new Map();
  this.list = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  // 对于插入，我们把这个元素插入到list中，并且利用map存储下标
  if (this.map.has(val)) {
    return false;
  }
  this.list.push(val);
  const idx = this.list.length - 1;
  this.map.set(val, idx);
  return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (!this.map.has(val)) {
    return false;
  }
  /**
   * 这时候就些小技巧了
   * 我们先模拟一下过程
   * insert(1)
   * list: [1] map: {1:0}
   * insert(2)
   * list: [1,2] map: {1:0,2:1}
   * remove(1)
   * list: [2] map: {2:0}
   * 也就说需要将 [1,2] => [2]
   * 将 {1:0,2:1} => {2:0}
   */
  // 拿到要删除元素的下标
  const idx = this.map.get(val);
  // 由于是O(1)的操作，所以只能pop，
  // 那么为了删掉idx下标的元素，就等于把最后的元素放在idx的位置
  // 然后再pop掉
  this.list[idx] = this.list[this.list.length - 1];
  // 由于变了位置，所以需要更新一下map
  this.map.set(this.list[idx], idx);
  this.list.pop();
  this.map.delete(val);
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  // 这个好办，从list拿元素就好
  const randomIdx = Math.floor(Math.random() * this.list.length);
  return this.list[randomIdx];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end

