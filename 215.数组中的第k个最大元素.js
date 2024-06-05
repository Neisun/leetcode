/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 *
 * https://leetcode.cn/problems/kth-largest-element-in-an-array/description/
 *
 * algorithms
 * Medium (62.55%)
 * Likes:    2476
 * Dislikes: 0
 * Total Accepted:    1.1M
 * Total Submissions: 1.8M
 * Testcase Example:  '[3,2,1,5,6,4]\n2'
 *
 * 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
 * 
 * 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 * 
 * 你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: [3,2,1,5,6,4], k = 2
 * 输出: 5
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: [3,2,3,1,2,4,5,5,6], k = 4
 * 输出: 4
 * 
 * 
 * 
 * 提示： 
 * 
 * 
 * 1 <= k <= nums.length <= 10^5
 * -10^4 <= nums[i] <= 10^4
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  /**
   * 思路
   * 为了求第k个最大的元素，我们需要排序，然后返回排序后的下标为k-1的元素即是解
   * 那采用哪种方式排序 采用堆排序可以通过构造小顶堆的方式
   */

  // // 交换函数
  // const swap = (nums, i, j) => {
  //   [nums[i], nums[j]] = [nums[j], nums[i]];
  // }

  // // 堆化函数，小顶堆
  // const heapify = (nums, n, i) => {
  //   let smallest = i;
  //   let lson = 2*i+1;
  //   let rson = 2*i+2;

  //   // 分别从左右孩子中寻找最小的元素
  //   while (lson < n && nums[lson] < nums[smallest]) {
  //     smallest = lson;
  //   }
  //   while (rson < n && nums[rson] < nums[smallest]) {
  //     smallest = rson;
  //   }

  //   if (smallest !== i) {
  //     // 父节点i跟最小的孩子交换
  //     swap(nums, smallest, i);
  //     // 由于将最小节点交换到父节点，父节点落下来了，需要维护堆的性质
  //     heapify(nums, n, smallest);
  //   }
  // }

  // // 堆排序
  // const heap_sort = (nums) => {
  //   const n = nums.length;
  //   // 构建小顶堆
  //   for (let i = Math.floor(n/2-1); i >= 0; i--) {
  //     heapify(nums, n, i);
  //   }
  //   // 排序
  //   for (let i = n - 1; i >= 0; i--) {
  //     // 最后一个节点与第一个节点交换
  //     swap(nums, i, 0);
  //     // 最后一个元素换上去之后，需要维护堆得性质
  //     heapify(nums, i, 0);
  //   }
  // }

  // heap_sort(nums);

  // return nums[k-1];

  /* 分割线 */
  
  /**
   * 如果通过构造大顶堆的方式，可以减少排序的次数，只需要排k个元素就可以找到第k个最大值
   */
  // 交换函数
  const swap = (nums, i, j) => {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  // 堆化，构建大顶堆
  const heapify = (nums, n, i) => {
    let largest = i;
    let lson = 2*i+1;
    let rson = 2*i+2;

    // 分别从左右孩子中找比父节点大的点
    while (lson < n && nums[lson] > nums[largest]) {
      largest = lson;
    }
    while (rson < n && nums[rson] > nums[largest]) {
      largest = rson;
    }

    if (largest !== i) {
      // 将大的孩子与父节点交换
      swap(nums, largest, i);
      // 维护堆得性质
      heapify(nums, n, largest);
    }
  }

  // 堆排序
  const heap_sort = (nums) => {
    const n = nums.length;
    // 建堆
    for (let i = Math.floor(n/2-1); i >= 0; i--) {
      heapify(nums, n, i);
    }
    // 排序
    let _k = k;
    for (let i = n-1; i >= 0 && _k > 0; i--, _k--) {
      // 交换头尾
      swap(nums, i, 0);
      // 维护堆的性质
      heapify(nums, i, 0);
    }
  }

  heap_sort(nums);
  return nums[nums.length-k];
};
// @lc code=end

