/*
 * @lc app=leetcode.cn id=909 lang=javascript
 *
 * [909] 蛇梯棋
 *
 * https://leetcode.cn/problems/snakes-and-ladders/description/
 *
 * algorithms
 * Medium (45.01%)
 * Likes:    136
 * Dislikes: 0
 * Total Accepted:    29K
 * Total Submissions: 65.8K
 * Testcase Example:  '[[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,35,-1,-1,13,-1],[-1,-1,-1,-1,-1,-1],[-1,15,-1,-1,-1,-1]]'
 *
 * 给你一个大小为 n x n 的整数矩阵 board ，方格按从 1 到 n^2 编号，编号遵循 转行交替方式 ，从左下角开始 （即，从 board[n
 * - 1][0] 开始）每一行交替方向。
 *
 * 玩家从棋盘上的方格 1 （总是在最后一行、第一列）开始出发。
 *
 * 每一回合，玩家需要从当前方格 curr 开始出发，按下述要求前进：
 *
 *
 * 选定目标方格 next ，目标方格的编号符合范围 [curr + 1, min(curr + 6, n^2)] 。
 *
 *
 * 该选择模拟了掷 六面体骰子 的情景，无论棋盘大小如何，玩家最多只能有 6 个目的地。
 *
 *
 * 传送玩家：如果目标方格 next 处存在蛇或梯子，那么玩家会传送到蛇或梯子的目的地。否则，玩家传送到目标方格 next 。
 * 当玩家到达编号 n^2 的方格时，游戏结束。
 *
 *
 * r 行 c 列的棋盘，按前述方法编号，棋盘格中可能存在 “蛇” 或 “梯子”；如果 board[r][c] != -1，那个蛇或梯子的目的地将会是
 * board[r][c]。编号为 1 和 n^2 的方格上没有蛇或梯子。
 *
 * 注意，玩家在每回合的前进过程中最多只能爬过蛇或梯子一次：就算目的地是另一条蛇或梯子的起点，玩家也 不能 继续移动。
 *
 *
 * 举个例子，假设棋盘是 [[-1,4],[-1,3]] ，第一次移动，玩家的目标方格是 2 。那么这个玩家将会顺着梯子到达方格 3 ，但 不能 顺着方格
 * 3 上的梯子前往方格 4 。
 *
 *
 * 返回达到编号为 n^2 的方格所需的最少移动次数，如果不可能，则返回 -1。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：board =
 * [[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,35,-1,-1,13,-1],[-1,-1,-1,-1,-1,-1],[-1,15,-1,-1,-1,-1]]
 * 输出：4
 * 解释：
 * 首先，从方格 1 [第 5 行，第 0 列] 开始。
 * 先决定移动到方格 2 ，并必须爬过梯子移动到到方格 15 。
 * 然后决定移动到方格 17 [第 3 行，第 4 列]，必须爬过蛇到方格 13 。
 * 接着决定移动到方格 14 ，且必须通过梯子移动到方格 35 。
 * 最后决定移动到方格 36 , 游戏结束。
 * 可以证明需要至少 4 次移动才能到达最后一个方格，所以答案是 4 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：board = [[-1,-1],[-1,3]]
 * 输出：1
 *
 *
 *
 *
 * 提示：
 *
 *
 * n == board.length == board[i].length
 * 2 <= n <= 20
 * grid[i][j] 的值是 -1 或在范围 [1, n^2] 内
 * 编号为 1 和 n^2 的方格上没有蛇或梯子
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
  // 先构建棋盘吧
  const n = board.length;
  // n * n的转行交替棋盘 右  左  右  左 
  // 从坐标是[n-1, 0] ~ [n-1, n-1] 开始构造
  // [n-2, n-1] ~ [n-2, 0]
  // [n-3, 0] ~ [n-3, n-1]
  // [n-4, n-1] ~ [n-4, 0]
  // ...
  // 起始方向 右
  let direction = 'right';
  let col = 0;
  let count = 1;
  // 构建棋盘，我们需要使用map记录一下方格对应的下标
  // 格式为 1: [x, y];
  const map = new Map();
  for (let row = n - 1; row >= 0; row--) {
    if (direction === 'right') {
      for (; col < n; col++) {
        map.set(count, [row, col]);
        count++;
      }
      // 转换方向，到了最后一列
      if (col === n) {
        col = n - 1;
        direction = 'left';
      }
    } else {
      for (; col >= 0; col--) {
        map.set(count, [row, col]);
        count++;
      }
      // 转换方向，到了第一列
      if (col === -1) {
        col = 0;
        direction = 'right';
      }
    }
  }

  // console.log(map)

  // 从编号是1的位置出发
  // 使用BFS的方式，为什么使用BFS的方式，如果寻找最少移动次数，那么BFS按层寻找即是最少
  // 我们需要使用一个set来记录一下点的访问情况，避免重复走，重复走必然不是最优解
  const visited = new Set();

  // 维护一个栈，记录每次出发的出发位置和走的步数
  const stack = [[1, 0]];
  
  // 开始BFS的方式查找
  while (stack.length) {
    const cur = stack.shift(); // [1, 0]
    // 模拟摇骰子
    for (let i = 1; i <= 6; i++) {
      let next = cur[0] + i;
      // 越界处理
      if (next > n * n || next < 0) continue;
      // 找一下next对应的坐标位置
      const [x, y] = map.get(next);
      if (board[x][y] !== -1) {
        next = board[x][y]
      }
      // 已经访问过
      if (visited.has(next)) continue;
      // 找到结果
      if (next === n * n) return cur[1]+1;
      visited.add(next);
      stack.push([next, cur[1] + 1]);
    }
  }

  return -1;
};
// @lc code=end

const board = [
  [-1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1],
  [-1, 35, -1, -1, 13, -1],
  [-1, -1, -1, -1, -1, -1],
  [-1, 15, -1, -1, -1, -1],
];

const r = snakesAndLadders(board);
console.log(r);

