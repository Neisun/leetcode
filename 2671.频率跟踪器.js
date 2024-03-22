/*
 * @lc app=leetcode.cn id=2671 lang=javascript
 *
 * [2671] 频率跟踪器
 *
 * https://leetcode.cn/problems/frequency-tracker/description/
 *
 * algorithms
 * Medium (32.94%)
 * Likes:    31
 * Dislikes: 0
 * Total Accepted:    12.7K
 * Total Submissions: 32.1K
 * Testcase Example:  '["FrequencyTracker","add","add","hasFrequency"]\n[[],[3],[3],[2]]'
 *
 * 请你设计并实现一个能够对其中的值进行跟踪的数据结构，并支持对频率相关查询进行应答。
 * 
 * 实现 FrequencyTracker 类：
 * 
 * 
 * FrequencyTracker()：使用一个空数组初始化 FrequencyTracker 对象。
 * void add(int number)：添加一个 number 到数据结构中。
 * void deleteOne(int number)：从数据结构中删除一个 number 。数据结构 可能不包含 number
 * ，在这种情况下不删除任何内容。
 * bool hasFrequency(int frequency): 如果数据结构中存在出现 frequency 次的数字，则返回 true，否则返回
 * false。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入
 * ["FrequencyTracker", "add", "add", "hasFrequency"]
 * [[], [3], [3], [2]]
 * 输出
 * [null, null, null, true]
 * 
 * 解释
 * FrequencyTracker frequencyTracker = new FrequencyTracker();
 * frequencyTracker.add(3); // 数据结构现在包含 [3]
 * frequencyTracker.add(3); // 数据结构现在包含 [3, 3]
 * frequencyTracker.hasFrequency(2); // 返回 true ，因为 3 出现 2 次
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入
 * ["FrequencyTracker", "add", "deleteOne", "hasFrequency"]
 * [[], [1], [1], [1]]
 * 输出
 * [null, null, null, false]
 * 
 * 解释
 * FrequencyTracker frequencyTracker = new FrequencyTracker();
 * frequencyTracker.add(1); // 数据结构现在包含 [1]
 * frequencyTracker.deleteOne(1); // 数据结构现在为空 []
 * frequencyTracker.hasFrequency(1); // 返回 false ，因为数据结构为空
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入
 * ["FrequencyTracker", "hasFrequency", "add", "hasFrequency"]
 * [[], [2], [3], [1]]
 * 输出
 * [null, false, null, true]
 * 
 * 解释
 * FrequencyTracker frequencyTracker = new FrequencyTracker();
 * frequencyTracker.hasFrequency(2); // 返回 false ，因为数据结构为空
 * frequencyTracker.add(3); // 数据结构现在包含 [3]
 * frequencyTracker.hasFrequency(1); // 返回 true ，因为 3 出现 1 次
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= number <= 10^5
 * 1 <= frequency <= 10^5
 * 最多调用 add、deleteOne 和 hasFrequency 共计 2 * 10^5 次
 * 
 * 
 */

// @lc code=start

/**
 * 这个题有点赖皮，并不需要真的列表来记录数据
 * 而是统计数字出现的频率，并且为了方便快速查找出现的频率，需要将频率也记录起来
 */

var FrequencyTracker = function() {
  // 统计数字，以及数字的频率 结构 num -> 10
  this.frequency = new Map();
  // 统计频率 结构 freqency -> 10
  this.frequency_cnt = new Map();
};

/** 
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.add = function(number) {
  if (this.frequency.has(number)) { // 如果这个数字已存在
    const prevFrequency = this.frequency.get(number) || 0;
    this.frequency.set(number, prevFrequency+1);
    // 之前频率的个数已经减少了一个
    this.frequency_cnt.set(prevFrequency, (this.frequency_cnt.get(prevFrequency) || 0) - 1);
    // 添加新的频率的个数
    this.frequency_cnt.set(prevFrequency+1, (this.frequency_cnt.get(prevFrequency+1) || 0) + 1);
  } else { // 如果这个数字不存在
    this.frequency.set(number, 1);
    this.frequency_cnt.set(1, (this.frequency_cnt.get(1) || 0) + 1);
  }
  
};

/** 
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.deleteOne = function(number) {
  if (!this.frequency.has(number) || this.frequency.get(number) === 0) return;
  const prevFrequency = this.frequency.get(number) || 0;
  this.frequency.set(number, prevFrequency - 1);
  this.frequency_cnt.set(prevFrequency, (this.frequency_cnt.get(prevFrequency) || 0) - 1);
  this.frequency_cnt.set(prevFrequency-1, (this.frequency_cnt.get(prevFrequency - 1) || 0) + 1);
};

/** 
 * @param {number} frequency
 * @return {boolean}
 */
FrequencyTracker.prototype.hasFrequency = function(frequency) {
  return this.frequency_cnt.get(frequency) > 0;
};

/**
 * Your FrequencyTracker object will be instantiated and called as such:
 * var obj = new FrequencyTracker()
 * obj.add(number)
 * obj.deleteOne(number)
 * var param_3 = obj.hasFrequency(frequency)
 */
// @lc code=end

// const frequencyTracker = new FrequencyTracker();
// frequencyTracker.add(1);
// frequencyTracker.add(1);
// frequencyTracker.deleteOne(1);
// frequencyTracker.add(2);
// frequencyTracker.add(2);
// frequencyTracker.add(2);
// const r = frequencyTracker.hasFrequency(3);
// console.log(r);
// console.log(frequencyTracker)

