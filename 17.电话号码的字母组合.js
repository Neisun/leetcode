/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
// 这道题的难点在于不知道如何找到数字对应的下一轮循环
// 求解过程可以看做一棵树
var letterCombinations = function(digits) {
  if (!digits) return [];
  // 数字映射表
  const numMaps = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }
  // 结果集
  const result = [];

  const backtracing = (digits, index, path) => {
    // 找到答案
    if (path.length === digits.length) {
      result.push(path.join(''));
      return;
    }

    // 这个递归怎么写呢
    // 1. 我们要获取到数字对应的字母表
    const currentNum = digits[index];
    const letters = numMaps[currentNum];
    // 2. 遍历当前字母表
    for (let i = 0; i < letters.length; i++) {
      path.push(letters[i]);
      // 关键点来了，递归的逻辑
      // 这里的困惑在于，index一直递增，比如digits是23，那么index如果等于3了
      // 那么就得不到对应的数字，也就得不到字母表了啊
      // 关键在于，递归的结束条件，如果path.length === digits.length那就退出循环了
      backtracing(digits, index + 1, path);
      path.pop();
    }
  }
  backtracing(digits, 0, []);
  return result;
};
// @lc code=end

