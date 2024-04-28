/*
 * @lc app=leetcode.cn id=433 lang=javascript
 *
 * [433] 最小基因变化
 *
 * https://leetcode.cn/problems/minimum-genetic-mutation/description/
 *
 * algorithms
 * Medium (54.66%)
 * Likes:    286
 * Dislikes: 0
 * Total Accepted:    65.1K
 * Total Submissions: 119.6K
 * Testcase Example:  '"AACCGGTT"\n"AACCGGTA"\n["AACCGGTA"]'
 *
 * 基因序列可以表示为一条由 8 个字符组成的字符串，其中每个字符都是 'A'、'C'、'G' 和 'T' 之一。
 * 
 * 假设我们需要调查从基因序列 start 变为 end 所发生的基因变化。一次基因变化就意味着这个基因序列中的一个字符发生了变化。
 * 
 * 
 * 例如，"AACCGGTT" --> "AACCGGTA" 就是一次基因变化。
 * 
 * 
 * 另有一个基因库 bank 记录了所有有效的基因变化，只有基因库中的基因才是有效的基因序列。（变化后的基因必须位于基因库 bank 中）
 * 
 * 给你两个基因序列 start 和 end ，以及一个基因库 bank ，请你找出并返回能够使 start 变化为 end
 * 所需的最少变化次数。如果无法完成此基因变化，返回 -1 。
 * 
 * 注意：起始基因序列 start 默认是有效的，但是它并不一定会出现在基因库中。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：start = "AACCGGTT", end = "AACCGGTA", bank = ["AACCGGTA"]
 * 输出：1
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：start = "AACCGGTT", end = "AAACGGTA", bank =
 * ["AACCGGTA","AACCGCTA","AAACGGTA"]
 * 输出：2
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：start = "AAAAACCC", end = "AACCCCCC", bank =
 * ["AAAACCCC","AAACCCCC","AACCCCCC"]
 * 输出：3
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * start.length == 8
 * end.length == 8
 * 0 <= bank.length <= 10
 * bank[i].length == 8
 * start、end 和 bank[i] 仅由字符 ['A', 'C', 'G', 'T'] 组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
  // // 判断endGene是否在bank中，如果不在bank中，必然不是有效转化
  // if (!bank.includes(endGene)) return -1;

  // const _startGene = Array.from(startGene);

  // let count = 0;

  // // 每次变化的基因必须存在于bank中
  // const stack = [_startGene];
  // while (stack.length) {
  //   const cur = stack.shift();
  //   if (cur.join('') === endGene) return count;
  //   // 与endGene做对比
  //   for (let i = 0; i < 8; i++) {
  //     if (cur[i] !== endGene[i]) {
  //       cur[i] = endGene[i];
  //       // 判断新组成的基因是不是在bank中
  //       const newStartGene = cur.join('');
  //       if (bank.includes(newStartGene)) {
  //         count++;
  //         stack.push(cur);
  //         break;
  //       } else {
  //         cur[i] = startGene[i];
  //       }
  //     }
  //   }
  // }
  // return -1;

  // 上述思路是错误的，我们重新捋一下
  // 先使用一个hash map记录一下bank中出现的基因
  const map = new Map();
  const visited = new Map();
  for (const gene of bank) {
    map.set(gene, true);
    visited.set(gene, false);
  }
  // 先判断endGene是不是在bank中，如果endGene不在，意味着无法变换
  if (!map.has(endGene)) return -1;

  // 其他的情况那就是在逐步去寻找
  // 8个位置的基因，每次每个都可以变成ACGT这四个字母中的一个
  const stack = [startGene];
  const chars = ['A', 'C', 'G', 'T'];
  let count = 0;
  while (stack.length) {
    const size = stack.length;
    for (let i = 0; i < size; i++) {
      let cur = stack.shift();
      if (cur === endGene) return count;
      for (let j = 0; j < 8; j++) {
        for (const char of chars) {
          if (cur[j] !== char) { // 要替换的字母跟当前字母不一致才替换，做一个剪枝处理
            const newGeneArray = Array.from(cur);
            newGeneArray[j] = char;
            const newGene = newGeneArray.join('');
            if (map.has(newGene) && !visited.get(newGene)) { // 只有出现在bank中，并且没有访问过（避免多次访问，造成死循环）
              stack.push(newGene);
              visited.set(newGene, true);
            }
          }
        }
      }
    }
    count++;
  }

  return -1;
};
// @lc code=end

