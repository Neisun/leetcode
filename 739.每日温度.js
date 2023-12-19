/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 *
 * https://leetcode.cn/problems/daily-temperatures/description/
 *
 * algorithms
 * Medium (68.74%)
 * Likes:    1665
 * Dislikes: 0
 * Total Accepted:    491.9K
 * Total Submissions: 715.4K
 * Testcase Example:  '[73,74,75,71,69,72,76,73]'
 *
 * 给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，其中 answer[i] 是指对于第 i
 * 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 0 来代替。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: temperatures = [73,74,75,71,69,72,76,73]
 * 输出: [1,1,4,2,1,1,0,0]
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: temperatures = [30,40,50,60]
 * 输出: [1,1,1,0]
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: temperatures = [30,60,90]
 * 输出: [1,1,0]
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= temperatures.length <= 10^5
 * 30 <= temperatures[i] <= 100
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  /**
   * 暴力解法，倒是很好写
   * 但是超时了，不给过，怎么办呢？
   */
  // const tl = temperatures.length;
  // const result = new Array(tl).fill(0);
  // for (let i = 0; i < tl; i++) {
  //   for (let j = i+1; j < tl; j++) {
  //     if (temperatures[j] > temperatures[i]) {
  //       result[i] = j-i;
  //       break;
  //     }
  //   }
  // };

  // // console.log(result);
  // return result;
  
  /**
   * 单调栈？
   * 对这个单调栈还是有点迷糊
   * 单调栈这个算法用来解决什么问题？
   * 为了找比当前元素第一个大或者小的
   * 对于这个栈，维护的元素是什么?
   * 栈内放置的是元素的下标，并且拿栈尾元素与当前元素比较，如果当前元素大就要栈之前的元素出栈，所以栈从栈头到栈尾是递增的，这是一个单调递增的栈
   * 这就是单调栈名称的由来
   * 
   * 这种题该怎么解，我个人觉得需要使用模拟的方式
   */
  const tl = temperatures.length;
  const result = new Array(tl).fill(0);
  // 用一个栈存放下标
  const stack = [0];

  // 从前向后遍历元素
  for (let i = 1; i < tl; i++) {
    // 我们要找的是第一个比当前元素大的值
    // 那么就有三种情况
    if (temperatures[i] < temperatures[stack[stack.length-1]]) { // 1. 当前元素 < 栈顶元素
      stack.push(i);
    } else if (temperatures[i] === temperatures[stack[stack.length-1]]) {  // 2. 当前元素 = 栈顶元素
      stack.push(i);
    } else { // 3. 当前元素 > 栈顶元素
      while (stack.length && temperatures[i] > temperatures[stack[stack.length-1]]) {
        const index = stack.pop();
        result[index] = i - index;
      }
      stack.push(i);
    }
  }

  // console.log(result);

  return result;
};
// @lc code=end

const temperatures = [73,74,75,71,69,72,76,73];
// const temperatures = [30,40,50,60];

dailyTemperatures(temperatures);
