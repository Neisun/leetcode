/*
 * @lc app=leetcode.cn id=332 lang=javascript
 *
 * [332] 重新安排行程
 */

// @lc code=start
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
// var findItinerary = function(tickets) {
//   // 先排序
//   tickets.sort((a, b) => a[1].charCodeAt(0) - b[1].charCodeAt(0));
//   // 结果集
//   const result = [];
//   // 路径使用记录
//   const used = [];
//   /**
//    * 深度优先搜索寻找路径
//    * @param {string[][]} tickets 
//    * @param {string} pattern 
//    * @param {string[]} path 
//    */
//   const dfs = (tickets, pattern, path) => {
//     // 加入到结果集，并且结束递归
//     if (path.length === tickets.length) {
//       result.push(...[...path]);
//       result.push(pattern);
//       return;
//     }
//     // 遍历找机场
//     for (let i = 0; i < tickets.length; i++) {
//       const currentTicket = tickets[i];
//       // 机票被用过啦
//       if (used[i]) continue;
//       // 不是匹配的机场
//       if (currentTicket[0] !== pattern) continue;
//       // 找到了匹配的机场，但是怎么处理 ["JFK","SFO"] ["JFK","ATL"] 这种情况呢
//       // 看看提前排序能不能解决这个问题
//       if (currentTicket[0] === pattern && !used[i]) {
//         path.push(pattern);
//         used[i] = true;
//         dfs(tickets, currentTicket[1], path);
//         path.pop();
//         // used[i] = false;
//       }
//     }
//   }

//   dfs(tickets, 'JFK', []);
//   return result;
// };
// 之前的解法有问题，会出现走到某个机场走不下去的问题

// var findItinerary = function(tickets) {
//   // 结果集
//   const result = [];
//   // 先按到达机场的字母表排序 注意字母表排序的时候，不单单只考虑第一个字母
//   // 对于非数字的比较，不能使用 a - b这种，需要按大小比较
//   tickets.sort((p1, p2) => p1[1] < p2[1] ? -1 : 1);
//   const map = {};
//   // 使用一种新的数据结构来做映射
//   // 已出发节点为key，设计出如下 {JFK : { SFO: 1, ATL: 1 }}
//   for (let i = 0; i < tickets.length; i++) {
//     const currentTicket = tickets[i];
//     const [from, to] = currentTicket;
//     if (!map[from]) {
//       map[from] = {};
//     }
//     if (!map[from][to]) {
//       map[from][to] = 1;
//     } else {
//       const count = map[from][to];
//       map[from][to] = count + 1;
//     }
//   }
//   // 每次从到达机场的的映射中找可以到达的机场
//   /**
//    * 深度优先搜索寻找机场
//    * @param {number} ticketNum 票总张数
//    * @param {string} pattern 匹配的机场
//    * @param {string[]} path 路径
//    */
//   const dfs = (ticketNum, pattern, path) => {
//     // 递归终止条件
//     if (path.length === ticketNum + 1) {
//       result.push(...[...path]);
//       return true;
//     }
//     // 找到可以到达的机场
//     const toAirPorts = map[pattern];
//     if (toAirPorts) {
//       for (const airPort in toAirPorts) {
//         if (toAirPorts[airPort] > 0) {
//           const count = toAirPorts[airPort]
//           path.push(airPort);
//           toAirPorts[airPort] = count - 1;
//           if (dfs(ticketNum, airPort, path)) return true;
//           path.pop();
//           toAirPorts[airPort] = count;
//         }
//       }
//     }
//     return false;
//   }
//   dfs(tickets.length, 'JFK', ['JFK']);
//   return result;
// };


// 重构一下之前的逻辑，之前的逻辑有点冗余
var findItinerary = function(tickets) {
  const path = ['JFK'];
  // 首先根据到达机场按照字母表排序
  tickets.sort((a, b) => a[1] > b[1] ? 1 : -1);
  // 根据出发机场->到达机场组装数据为 {JFK: {ATL: 1, SFO: 1}} 表示从出发机场->到达机场的机票数量
  const ticketMap = {};
  tickets.forEach(ticket => {
    const [from, to] = ticket;
    if (!ticketMap[from]) {
      ticketMap[from] = {};
    }
    if (!ticketMap[from][to]) {
      ticketMap[from][to] = 1;
    } else {
      ticketMap[from][to] = ticketMap[from][to] + 1;
    }
  });

  // 深度优先搜索寻找结果
  /**
   * 遍历生成的路径寻找结果
   * @param {number} totalTicketNum 
   * @param {string[]} path 
   */
  const dfs = (totalTicketNum, path) => {
    if (path.length === totalTicketNum + 1) {
      return true;
    }
    const currentMap = ticketMap[path[path.length - 1]];
    if (currentMap) {
      for (const airPort in currentMap) {
        if (currentMap[airPort] > 0) {
          const count = currentMap[airPort];
          path.push(airPort);
          currentMap[airPort] = count - 1;
          if(dfs(totalTicketNum, path)) return true;
          path.pop();
          currentMap[airPort] = count;
        }
      }
    }
    return false;
  }
  dfs(tickets.length, path);
  return path;
};

// @lc code=end

// 梳理一下逻辑吧
// 一开始需要从 JFK机场出发 那么就需要我们第一次从列表中找出义JFK开头的
// 接着 需要以落地机场为出发点，再从列表中找出落地机场为开头的机场
// 。。。递归这个过程
// 优先选择的问题 比如 ["JFK","SFO"],["JFK","ATL"] 这种情况
// 我们选择哪个呢，以SFO ATL 机场为例，按照字母表排序，即A B C D。。。所以选择 ATL
// 怎么结束递归？

// 排序好试一下呢
// ["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]

// // ['JFK', 'ATL'] 
// // ['SFO', 'ATL']
// // ['ATL', 'JFK']
// // ['JFK', 'SFO']
// ['ATL', 'SFO']

// 结果集
// ['JFK', 'ATL', 'JFK', 'SFO', 'ATL', 'SFO']

// [["JFK","KUL"],["JFK","NRT"],["NRT","JFK"]]
// [["JFK","KUL"], ["NRT","JFK"], ["JFK","NRT"]];

// 测试
// const tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]];
const tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]];
const result = findItinerary(tickets);
console.log(result);
