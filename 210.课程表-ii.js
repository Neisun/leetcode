/*
 * @lc app=leetcode.cn id=210 lang=javascript
 *
 * [210] 课程表 II
 *
 * https://leetcode.cn/problems/course-schedule-ii/description/
 *
 * algorithms
 * Medium (57.73%)
 * Likes:    939
 * Dislikes: 0
 * Total Accepted:    229.5K
 * Total Submissions: 395.8K
 * Testcase Example:  '2\n[[1,0]]'
 *
 * 现在你总共有 numCourses 门课需要选，记为 0 到 numCourses - 1。给你一个数组 prerequisites ，其中
 * prerequisites[i] = [ai, bi] ，表示在选修课程 ai 前 必须 先选修 bi 。
 * 
 * 
 * 例如，想要学习课程 0 ，你需要先完成课程 1 ，我们用一个匹配来表示：[0,1] 。
 * 
 * 
 * 返回你为了学完所有课程所安排的学习顺序。可能会有多个正确的顺序，你只要返回 任意一种 就可以了。如果不可能完成所有课程，返回 一个空数组 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：numCourses = 2, prerequisites = [[1,0]]
 * 输出：[0,1]
 * 解释：总共有 2 门课程。要学习课程 1，你需要先完成课程 0。因此，正确的课程顺序为 [0,1] 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
 * 输出：[0,2,1,3]
 * 解释：总共有 4 门课程。要学习课程 3，你应该先完成课程 1 和课程 2。并且课程 1 和课程 2 都应该排在课程 0 之后。
 * 因此，一个正确的课程顺序是 [0,1,2,3] 。另一个正确的排序是 [0,2,1,3] 。
 * 
 * 示例 3：
 * 
 * 
 * 输入：numCourses = 1, prerequisites = []
 * 输出：[0]
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= numCourses <= 2000
 * 0 <= prerequisites.length <= numCourses * (numCourses - 1)
 * prerequisites[i].length == 2
 * 0 <= ai, bi < numCourses
 * ai != bi
 * 所有[ai, bi] 互不相同
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  // 统计入度
  const rudu = new Array(numCourses).fill(0);
  for (const [next, prev] of prerequisites) {
    rudu[next]++;
  }
  // 利用hash map记录 映射关系 课: [依赖其的课1, ...]
  const map = new Map();
  for (const [next, prev] of prerequisites) {
    if (!map.has(prev)) {
      map.set(prev, [next]);
    } else {
      map.get(prev).push(next);
    }
  }

  // 记录结果
  const result = [];
  // 统计已修科目计数
  let count = 0;
  
  // 采用bfs方式去逐层寻找
  // 入栈: 入度为0的课，入度为0表示当前课没有依赖
  // 出栈：表示当前课已被修，那么其所有依赖这门课的入度-1
  const stack = [];

  // 寻找入度为0的课，初始化入栈操作
  for (let i = 0; i < numCourses; i++) {
    if (rudu[i] === 0) stack.push(i);
  }

  // 开始BFS方式逐层寻找
  while (stack.length) {
    const cur = stack.shift();
    count++;
    result.push(cur);
    if (count === numCourses) return result;
    if (map.has(cur)) {
      for (const course of map.get(cur)) {
        rudu[course] -= 1;
        if (rudu[course] === 0) stack.push(course);
      }
    }
  }

  return [];
};
// @lc code=end

