/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
// 思路
var partition = function(s) {
  // 结果集
  const result = [];
  // 求解回溯函数
  const backtracing = (s, startIndex, path) => {
    // 收集结果
    if (startIndex >= s.length) {
      result.push([...path]);
      return;
    }
    for (let i = startIndex; i < s.length; i++) {
      // 判断截取的子串是不是回文串
      if (isPalindrome(s, startIndex, i)) {
        // 把回文串加入到结果集中
        const palindromeStr = s.substring(startIndex, i + 1);
        path.push(palindromeStr);
      } else {
        // 当前的切割点不是回文子串，跳过
        continue;
      }
      // 继续递归往下找，传入下一个位置
      backtracing(s, i + 1, path);
      // 回溯
      path.pop();
    }
  }

  // 判断是否是回文串
  const isPalindrome = (s, start, end) => {
    while (start < end) {
      if (s[start] !== s[end]) return false;
      start++;
      end--;
    }
    return true;
  }

  backtracing(s, 0, []);
  return result;
};
// @lc code=end

