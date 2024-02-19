/*
 * @lc app=leetcode.cn id=68 lang=javascript
 *
 * [68] 文本左右对齐
 *
 * https://leetcode.cn/problems/text-justification/description/
 *
 * algorithms
 * Hard (52.91%)
 * Likes:    405
 * Dislikes: 0
 * Total Accepted:    68.6K
 * Total Submissions: 128.4K
 * Testcase Example:  '["This", "is", "an", "example", "of", "text", "justification."]\n16'
 *
 * 给定一个单词数组 words 和一个长度 maxWidth ，重新排版单词，使其成为每行恰好有 maxWidth 个字符，且左右两端对齐的文本。
 * 
 * 你应该使用 “贪心算法” 来放置给定的单词；也就是说，尽可能多地往每行中放置单词。必要时可用空格 ' ' 填充，使得每行恰好有 maxWidth
 * 个字符。
 * 
 * 要求尽可能均匀分配单词间的空格数量。如果某一行单词间的空格不能均匀分配，则左侧放置的空格数要多于右侧的空格数。
 * 
 * 文本的最后一行应为左对齐，且单词之间不插入额外的空格。
 * 
 * 注意:
 * 
 * 
 * 单词是指由非空格字符组成的字符序列。
 * 每个单词的长度大于 0，小于等于 maxWidth。
 * 输入单词数组 words 至少包含一个单词。
 * 
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: words = ["This", "is", "an", "example", "of", "text", "justification."],
 * maxWidth = 16
 * 输出:
 * [
 * "This    is    an",
 * "example  of text",
 * "justification.  "
 * ]
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入:words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
 * 输出:
 * [
 * "What   must   be",
 * "acknowledgment  ",
 * "shall be        "
 * ]
 * 解释: 注意最后一行的格式应为 "shall be    " 而不是 "shall     be",
 * 因为最后一行应为左对齐，而不是左右两端对齐。       
 * ⁠    第二行同样为左对齐，这是因为这行只包含一个单词。
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入:words =
 * ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"]，maxWidth
 * = 20
 * 输出:
 * [
 * "Science  is  what we",
 * ⁠ "understand      well",
 * "enough to explain to",
 * "a  computer.  Art is",
 * "everything  else  we",
 * "do                  "
 * ]
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 <= words.length <= 300
 * 1 <= words[i].length <= 20
 * words[i] 由小写英文字母和符号组成
 * 1 <= maxWidth <= 100
 * words[i].length <= maxWidth
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  /**
   * 这个题有点恶心需要考虑的情况比较多
   * 1. 一行只有一个单词 "acknowledgment  " 空格放在后边
   * 2. 一行有两个以上的单词，需要从前向后等分空格
   * 3. 最后一行需要左对齐
   * 
   * ...崩溃了，情况太多了
   */
  // 使用二维数组存放吧
  const list = [];
  // 行数
  let row = 0;
  // 每一行单词的总长
  let totalLen = 0;
  // 每一行单词的个数
  let totalNum = 0;
  // 遍历words
  for (const word of words) {
    if (!list[row]) {
      list[row] = [];
    }
    totalLen += word.length;
    totalNum += 1;
    list[row].push(word);
    if (totalLen + totalNum - 1 > maxWidth) {
      list[row].pop();
      // 把需要添加的空格数，放在后边
      list[row].push(maxWidth - totalLen + word.length);
      totalLen = word.length;
      totalNum = 1;
      row++;
      list[row] = [word];
    }
  }

  // 把最后的长度放进去
  list[row].push(maxWidth - totalLen);

  // console.log(list);
  const result = [];

  // 遍历list
  for (let i = 0; i < list.length; i++) {
    let str = '';
    // 当前行
    const wordList = list[i];
    // 需要添加的空格数量
    const spaceNum = wordList.pop();
    // 每一行的单词个数
    const wordNum = wordList.length;
    // 最后一行的处理
    if (i === list.length - 1) {
      // 可以统一成这样的写法
      let count = 0;
      for (const word of wordList) {
        str += word + ' ';
        count++;
      }
      for (let n = 0; n < spaceNum - count; n++) {
        str += ' ';
      }
      result[i] = str;
      // // 如果最后一行只有一个单词 那么就是 单词 + 需要空格数
      // if (wordList.length === 1) {
      //   str += wordList[0];
      //   for (let n = 0; n < spaceNum; n++) {
      //     str += ' ';
      //   }
      //   result[i] = str;
      // } else { // 如果最后一行有多个单词，那么就是 单词 + 一个空格 + 单词 + 一个空格 + 。。。
      //   let count = 0;
      //   for (const word of wordList) {
      //     str += word + ' ';
      //     count++;
      //   }
      //   for (let n = 0; n < spaceNum - count; n++) {
      //     str += ' ';
      //   }
      //   result[i] = str;
      // }
    } else {
      // 是否只有一个单词
      if (wordNum === 1) {
        str += wordList[0];
        for (let k = 0; k < spaceNum; k++) {
          str += ' ';
        }
        result[i] = str;
      } else {
        // 可否等分
        const canJustify = spaceNum % (wordNum-1) === 0;
        // 如果能等分
        if (canJustify) {
          for (let j = 0; j < wordList.length; j++) {
            if (j !== wordList.length - 1) {
              str += wordList[j];
              for (let k = 0; k < spaceNum/(wordNum-1); k++) {
                str += ' ';
              }
            } else {
              str += wordList[j];
            }
          }
          result[i] = str;
        } else { // 不能等分
          const maxSpaceNum = Math.ceil(spaceNum / (wordNum-1));
          for (let j = 0; j < wordList.length; j++) {
            if (j !== wordList.length - 1) {
              str += wordList[j];
              const _spaceNum = spaceNum - (j+1) * maxSpaceNum >= 0 ? maxSpaceNum : spaceNum - j * maxSpaceNum;
              for (let k = 0; k < _spaceNum; k++) {
                str += ' ';
              }
            } else {
              str += wordList[j];
            }
          }
          result[i] = str;
        }
      }
    }
  }


  console.log(result);

  return result;
  
};
// @lc code=end

// const words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
// const words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
const words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
fullJustify(words, maxWidth);

// 1+9+3+2=15
// 20-15 = 5
// 5/3 = 1.66666

// 如何拆分空格呢？？
// 剩余的空格，尽量等分

