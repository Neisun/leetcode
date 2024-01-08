/*
 * @lc app=leetcode.cn id=841 lang=javascript
 *
 * [841] 钥匙和房间
 *
 * https://leetcode.cn/problems/keys-and-rooms/description/
 *
 * algorithms
 * Medium (68.67%)
 * Likes:    356
 * Dislikes: 0
 * Total Accepted:    104K
 * Total Submissions: 150.9K
 * Testcase Example:  '[[1],[2],[3],[]]'
 *
 * 有 n 个房间，房间按从 0 到 n - 1 编号。最初，除 0
 * 号房间外的其余所有房间都被锁住。你的目标是进入所有的房间。然而，你不能在没有获得钥匙的时候进入锁住的房间。
 * 
 * 当你进入一个房间，你可能会在里面找到一套不同的钥匙，每把钥匙上都有对应的房间号，即表示钥匙可以打开的房间。你可以拿上所有钥匙去解锁其他房间。
 * 
 * 给你一个数组 rooms 其中 rooms[i] 是你进入 i 号房间可以获得的钥匙集合。如果能进入 所有 房间返回 true，否则返回
 * false。
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：rooms = [[1],[2],[3],[]]
 * 输出：true
 * 解释：
 * 我们从 0 号房间开始，拿到钥匙 1。
 * 之后我们去 1 号房间，拿到钥匙 2。
 * 然后我们去 2 号房间，拿到钥匙 3。
 * 最后我们去了 3 号房间。
 * 由于我们能够进入每个房间，我们返回 true。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：rooms = [[1,3],[3,0,1],[2],[0]]
 * 输出：false
 * 解释：我们不能进入 2 号房间。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == rooms.length
 * 2 <= n <= 1000
 * 0 <= rooms[i].length <= 1000
 * 1 <= sum(rooms[i].length) <= 3000
 * 0 <= rooms[i][j] < n
 * 所有 rooms[i] 的值 互不相同
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
  /**
   * 一个误区，一开始只能从0号房间出发，因为其他放假都被锁了
   * 所以，不能遍历每个房间
   */

  /**
   * BFS的方式求解
   */

  // // 获取房间数量
  // const n = rooms.length;
  // // 记录房间是否访问过
  // const visited = new Array(n).fill(false);

  // // 我们先使用bfs的方式求解
  // const queue = [0];
  // visited[0] = true;
  // while (queue.length) {
  //   const curIndex = queue.shift();
  //   const list = rooms[curIndex];
  //   for (const nextIndex of list) {
  //     // 被访问过
  //     if (visited[nextIndex]) continue;
  //     // 加入到队列中
  //     queue.push(nextIndex);
  //     visited[nextIndex] = true;
  //   }
  // }

  // // 看是否所有的房间都被访问过
  // for (let i = 0; i < n; i++) {
  //   if (!visited[i]) return false;
  // }
  // return true;

  /**
   * DFS方式求解
   */
  // 获取房间数量
  const n = rooms.length;
  // 记录房间是否访问过
  const visited = new Array(n).fill(false);
  // DFS方式
  const dfs = (curIndex) => {
    // if (visited[curIndex]) return;
    // visited[curIndex] = true;
    const list = rooms[curIndex];
    for (const nextIndex of list) {
      // dfs(nextIndex)
      if (!visited[nextIndex]) {
        visited[nextIndex] = true;
        dfs(nextIndex);
      }
    }
  }
  // 第一件房间有钥匙
  visited[0] = true;
  dfs(0);

  // 看所有的房间是否被访问过
  for (let i = 0; i < n; i++) {
    if (!visited[i]) return false;
  }
  return true;
};
// @lc code=end

// const rooms = [[1],[2],[3],[]];
const rooms = [[1,3],[3,0,1],[2],[0]];
const r = canVisitAllRooms(rooms);
console.log(r);
