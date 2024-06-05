/*
 * @lc app=leetcode.cn id=373 lang=javascript
 *
 * [373] 查找和最小的 K 对数字
 *
 * https://leetcode.cn/problems/find-k-pairs-with-smallest-sums/description/
 *
 * algorithms
 * Medium (40.78%)
 * Likes:    594
 * Dislikes: 0
 * Total Accepted:    77.6K
 * Total Submissions: 189.3K
 * Testcase Example:  '[1,7,11]\n[2,4,6]\n3'
 *
 * 给定两个以 非递减顺序排列 的整数数组 nums1 和 nums2 , 以及一个整数 k 。
 *
 * 定义一对值 (u,v)，其中第一个元素来自 nums1，第二个元素来自 nums2 。
 *
 * 请找到和最小的 k 个数对 (u1,v1),  (u2,v2)  ...  (uk,vk) 。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
 * 输出: [1,2],[1,4],[1,6]
 * 解释: 返回序列中的前 3 对数：
 * ⁠    [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
 *
 *
 * 示例 2:
 *
 *
 * 输入: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
 * 输出: [1,1],[1,1]
 * 解释: 返回序列中的前 2 对数：
 * [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
 *
 *
 *
 *
 * 提示:
 *
 *
 * 1 <= nums1.length, nums2.length <= 10^5
 * -10^9 <= nums1[i], nums2[i] <= 10^9
 * nums1 和 nums2 均为 升序排列
 * 1 <= k <= 10^4
 * k <= nums1.length * nums2.length
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  /**
   * 利用堆的性质，重新梳理逻辑
   */
  // 交换元素方法
  const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };

  // 比较方法
  const compare = (arr1, arr2) => {
    return (arr1[0] + arr1[1]) > (arr2[0] + arr2[1]);
  };

  // 大顶堆类
  class BigHeap {
    constructor(maxSize) {
      this.arr = [];
      this.size = 0;
      this.maxSize = maxSize;
    }

    // 入堆，入堆的元素需要维护大顶堆的性质
    push(item) {
      this.arr.push(item);
      this.size++;
      // 调整
      // 只有大于一个元素的情况才会维护堆化
      if (this.size > 1) {
        // 入堆节点的下标
        let curIdx = this.size - 1;
        // 其父节点的下标
        let parIdx = Math.floor((curIdx - 1) / 2);
        // this.heapify(curIdx);
        // 这是从底向上调整堆
        while (curIdx > 0 && compare(this.arr[curIdx], this.arr[parIdx])) {
          swap(this.arr, curIdx, parIdx);
          // 交换完之后需要继续维护堆的性质
          curIdx = parIdx;
          parIdx = Math.floor((curIdx - 1) / 2);
        }
      }
      // 如果插入后大于最大size了，需要剔除掉最大值
      if (this.size > this.maxSize) {
        this.pop();
      }
    }

    // 出堆 将堆中最大的元素踢出去
    pop() {
      // 堆头就是最大的
      // 将堆尾元素换到堆头
      this.arr[0] = this.arr.pop();
      this.size--;
      // 换之后需要维护堆得性质
      this.heapify(0);
    }

    // 堆化方法，写一个通用的方法
    // 这其实是自顶向下调整堆
    heapify(parIdx) {
      let largest = parIdx;
      let lson = parIdx * 2 + 1;
      let rson = parIdx * 2 + 2;

      while (lson < this.size && compare(this.arr[lson], this.arr[largest])) {
        largest = lson;
      }

      while (rson < this.size && compare(this.arr[rson], this.arr[largest])) {
        largest = rson;
      }

      if (largest !== parIdx) {
        // 交换
        swap(this.arr, largest, parIdx);
        // 父节点交换下来了，需要维护堆的性质
        this.heapify(largest);
      }
    }

    top() {
      return this.arr[0];
    }
  }

  const bigHeap = new BigHeap(k);

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      const item = [nums1[i], nums2[j]];
      if (bigHeap.size < k || compare(bigHeap.top(), item)) {
        bigHeap.push(item);
      } else {
        break;
      }
    }
  }

  return bigHeap.arr;
};
// @lc code=end
