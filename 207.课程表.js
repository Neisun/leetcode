/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 *
 * https://leetcode.cn/problems/course-schedule/description/
 *
 * algorithms
 * Medium (53.88%)
 * Likes:    1931
 * Dislikes: 0
 * Total Accepted:    400.2K
 * Total Submissions: 741.8K
 * Testcase Example:  '2\n[[1,0]]'
 *
 * 你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。
 *
 * 在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi]
 * ，表示如果要学习课程 ai 则 必须 先学习课程  bi 。
 *
 *
 * 例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
 *
 *
 * 请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：numCourses = 2, prerequisites = [[1,0]]
 * 输出：true
 * 解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。
 *
 * 示例 2：
 *
 *
 * 输入：numCourses = 2, prerequisites = [[1,0],[0,1]]
 * 输出：false
 * 解释：总共有 2 门课程。学习课程 1 之前，你需要先完成​课程 0 ；并且学习课程 0 之前，你还应先完成课程 1 。这是不可能的。
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= numCourses <= 2000
 * 0 <= prerequisites.length <= 5000
 * prerequisites[i].length == 2
 * 0 <= ai, bi < numCourses
 * prerequisites[i] 中的所有课程对 互不相同
 *
 *
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  /**
   * 1: [0]
   *
   * 1: [0]
   * 0: [1, 0]
   *
   * 3
   * [[1,2], [0,1], [2,1]]
   * 1: [2]
   * 0: [1,2]
   * 2: [1]
   * 拓扑排序
   */

  // 初始化每门课的入度为0
  const rudu = new Array(numCourses).fill(0);

  // 统计每门课的入度
  for (const [next, prev] of prerequisites) {
    rudu[next]++;
  }

  // 设置数据结构，课: [依赖其的课1，依赖其的课2...]
  // 使用map记录
  const courses = new Map();
  for (const [next, prev] of prerequisites) {
    if (!courses.has(prev)) {
      courses.set(prev, [next]);
    } else {
      courses.get(prev).push(next);
    }
  }

  // console.log(rudu);
  // console.log(courses);

  // 初始化栈 入度为零的先入栈
  const stack = [];
  
  for (let i = 0; i < rudu.length; i++) {
    if (rudu[i] === 0) {
      stack.push(i);
    }
  }


  // bfs
  // 出栈：将依赖其的项目入度-1
  // 入栈：入度为零的点
  // 不断反复这个过程
  let count = 0;
  while (stack.length) {
    // 出栈
    const cur = stack.shift();
    count++;
    if (count === numCourses) return true;
    // 遍历依赖其的课
    if (courses.has(cur)) {
      for (const course of courses.get(cur)) {
        // 所有依赖其的课，入度都-1
        rudu[course]--;
        if (rudu[course] === 0) {
          stack.push(course);
        }
      }
    }
  }

  return false
};
// @lc code=end

// const numCourses = 6;
// const prerequisites = [
//   [3, 0],
//   [3, 1],
//   [4, 1],
//   [4, 2],
//   [5, 3],
//   [5, 4],
// ];


const numCourses = 2, prerequisites = [[1,0]]


canFinish(numCourses, prerequisites);
