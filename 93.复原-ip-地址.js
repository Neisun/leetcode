/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  // 结果集
  const result = [];
  // 回溯求解函数
  const backtracing = (s, startIndex, path) => {
    if (startIndex > s.length || path.length > 4) {
      return;
    }

    if (path.length === 4 && startIndex === s.length) {
      result.push(path.join('.'));
      return;
    }

    for (let i = startIndex; i < s.length; i++) {
      // 如果满足条件
      if (isValidIp(s, startIndex, i)) {
        path.push(s.substring(startIndex, i + 1));
      } else {
        continue;
      }
      backtracing(s, i + 1, path);
      path.pop();
    }
  }

  const isValidIp = (s, start, end) => {
    const str = s.substring(start, end + 1);
    // 在0~255之外，不合格
    if (+str > 255 || +str < 0) return false;
    // 有前导0不合格
    if (str.length > 1 && +str[0] === 0) return false;
    return true;
  }

  backtracing(s, 0, []);
  return result;
};
// @lc code=end

