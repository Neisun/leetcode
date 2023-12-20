/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 *
 * https://leetcode.cn/problems/next-greater-element-i/description/
 *
 * algorithms
 * Easy (71.78%)
 * Likes:    1130
 * Dislikes: 0
 * Total Accepted:    294.9K
 * Total Submissions: 410.5K
 * Testcase Example:  '[4,1,2]\n[1,3,4,2]'
 *
 * nums1 中数字 x 的 下一个更大元素 是指 x 在 nums2 中对应位置 右侧 的 第一个 比 x 大的元素。
 * 
 * 给你两个 没有重复元素 的数组 nums1 和 nums2 ，下标从 0 开始计数，其中nums1 是 nums2 的子集。
 * 
 * 对于每个 0 <= i < nums1.length ，找出满足 nums1[i] == nums2[j] 的下标 j ，并且在 nums2 确定
 * nums2[j] 的 下一个更大元素 。如果不存在下一个更大元素，那么本次查询的答案是 -1 。
 * 
 * 返回一个长度为 nums1.length 的数组 ans 作为答案，满足 ans[i] 是如上所述的 下一个更大元素 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums1 = [4,1,2], nums2 = [1,3,4,2].
 * 输出：[-1,3,-1]
 * 解释：nums1 中每个值的下一个更大元素如下所述：
 * - 4 ，用加粗斜体标识，nums2 = [1,3,4,2]。不存在下一个更大元素，所以答案是 -1 。
 * - 1 ，用加粗斜体标识，nums2 = [1,3,4,2]。下一个更大元素是 3 。
 * - 2 ，用加粗斜体标识，nums2 = [1,3,4,2]。不存在下一个更大元素，所以答案是 -1 。
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums1 = [2,4], nums2 = [1,2,3,4].
 * 输出：[3,-1]
 * 解释：nums1 中每个值的下一个更大元素如下所述：
 * - 2 ，用加粗斜体标识，nums2 = [1,2,3,4]。下一个更大元素是 3 。
 * - 4 ，用加粗斜体标识，nums2 = [1,2,3,4]。不存在下一个更大元素，所以答案是 -1 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums1.length <= nums2.length <= 1000
 * 0 <= nums1[i], nums2[i] <= 10^4
 * nums1和nums2中所有整数 互不相同
 * nums1 中的所有整数同样出现在 nums2 中
 * 
 * 
 * 
 * 
 * 进阶：你可以设计一个时间复杂度为 O(nums1.length + nums2.length) 的解决方案吗？
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  /**
   * 暴力方式搜索
   * 暴力搜索方式通过了，时间复杂度上还过得去
   */
  // const n1l = nums1.length;
  // const n2l = nums2.length;
  // const result = new Array(n1l).fill(-1);
  
  // // 遍历nums1
  // for (let i = 0; i < nums1.length; i++) {
  //   const target = nums1[i];
  //   // 先在nums2中找到这个数的下标
  //   const n2Index = nums2.indexOf(target);
  //   // 开始找第一个比目标值大的元素
  //   let start = n2Index;
  //   while (start < n2l) {
  //     if (nums2[start] > target) {
  //       result[i] = nums2[start];
  //       break;
  //     }
  //     start++;
  //   }
  // }
  // return result;

  /**
   * 单调栈的方式解题
   * TODO: 待完成
   * 需要用语言模拟一下这个过程
   * 
   * stack内存的是下标
   * 这个过程是
   * 如果遇到比当前栈底元素小或者等于的，将元素下标push到栈底
   * 如果遇到比栈底元素大的元素，那么把栈底元素pop出来，然后处理逻辑，重复此操作，直到stack为空，或者当前元素比栈底元素小
   * 然后把这个元素的下标push到栈底
   */
  const n1l = nums1.length;
  const n2l = nums2.length;
  const stack = []; // 从栈顶到栈底是递增的,也就是说栈底始终保持最大
  const map = new Map();
  const result = new Array(n1l).fill(-1);

  // 遍历nums2，找到每个元素右边第一个比它大的元素
  for (let i = 0; i < n2l; i++) {
    // 还是三种情况考虑
    if (nums2[i] < nums2[stack[stack.length-1]]) { // 当前元素 < 栈底元素
      stack.push(i);
    } else if (nums2[i] === nums2[stack[stack.length-1]]) { // 当前元素 = 栈底元素
      stack.push(i);
    } else { // 当前元素 > 栈底元素
      while (stack.length && nums2[i] > nums2[stack[stack.length-1]]) {
        // 取出栈底元素下标
        const index = stack.pop();
        // 逻辑处理
        map.set(nums2[index], nums2[i]);
      }
      stack.push(i);
    }
  }

  // 遍历num1
  for (let i = 0; i < n1l; i++) {
    if (map.get(nums1[i])) {
      result[i] = map.get(nums1[i]);
    }
  }

  // console.log(result);

  return result;
};
// @lc code=end

const nums1 = [4,1,2], nums2 = [1,3,4,2];
// const nums1 = [2,4], nums2 = [1,2,3,4];
nextGreaterElement(nums1, nums2);

