/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  // 1. 排序练习，使用冒泡
  // ** 这是一个错误的冒泡排序！！！！
  // 可以看出时间上通过不了，时间复杂度是O(n^2);
  // const bubbleSort = nums => {
  //   for (let i = 0; i < nums.length - 1; i++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //       if (nums[i] > nums[j]) {
  //         [nums[i], nums[j]] = [nums[j], nums[i]];
  //       }
  //     }
  //   }
  // }
  // bubbleSort(nums);

  // ! 1. 冒泡排序
  // 冒泡排序的思路
  // 从第一个元素开始，依次两两比较
  // 再从第二个元素开始，依次两两比较
  // 这是一个O(n^2)的操作
  const bubbleSort = arr => {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
  }
  bubbleSort(nums);

  // ! 2. 排序练习，快速排序
  // 快排的思想是找一个基准点
  // 在左边找比基准点大的数，右边找比基准点小的数，找到后交换
  // 然后以基准点分开左右两边递归这个过程
  // 可以看到
  // 时间复杂度来说是 O(logN);
  // const quickSort = (nums, left, right) => {
  //   if (left > right) return;
  //   const pivotIndex = Math.floor((left + right) / 2);
  //   const pivot = nums[pivotIndex];
  //   let l = left;
  //   let r = right;

  //   while (l <= r) {
  //     while (nums[l] < pivot && l <= r) {
  //       l++;
  //     }
  //     while (nums[r] > pivot && l <= r) {
  //       r--;
  //     }
  //     if (l <= r) {
  //       [nums[l], nums[r]] = [nums[r], nums[l]];
  //       l++;
  //       r--;
  //     }
  //   }
  //   quickSort(nums, left, r);
  //   quickSort(nums, l, right);
  // }
  // quickSort(nums, 0, nums.length - 1);

  // ! 3. 插入排序
  // 思路
  // 把左边当做排好序的元素，遍历的下一个数就是要插入的数字，从右向左遍历比较
  // 遇到比要插入的数大，就右移一位，直到找不到，那个位置就是要插入的位置
  // const insertSort = nums => {
  //   for (let i = 0; i < nums.length - 1; i++) {
  //     const insertNum = nums[i + 1];
  //     let j = i;
  //     while (j >= 0 && nums[j] > insertNum) {
  //       nums[j + 1] = nums[j];
  //       j--;
  //     }
  //     // 找到了插入的位置
  //     nums[j + 1] = insertNum;
  //   }
  // }
  // insertSort(nums);

  // ! 4. 堆排序
  // 堆排序是一个适合数据量较大时候的排序，其时间复杂度为O(NlogN);
  // 其思路是第一步构建最大堆
  // 第二步 将堆的首尾节点交换，并继续堆化

  // 堆化函数 heapify
  /**
   * 
   * @param {*} arr 堆化的数组
   * @param {*} n 堆的节点个数
   * @param {*} i 堆化的节点下标
   */
  // const heapify = (arr, n, i) => {
  //   // 递归出口
  //   if (i >= n) return;

  //   // 假设最大值下标就是传入的i
  //   let largest = i;
  //   // 对于一个完全二叉树有如下规律
  //   // 左子树下标为 2i + 1;
  //   // 右子树下标为 2i + 2;
  //   // 父节点下标为 (i - 1) / 2 取整

  //   // 左子树
  //   let lson = 2 * i + 1;
  //   // 右子树
  //   let rson = 2 * i + 2;

  //   // 找最大
  //   if (lson < n && arr[lson] > arr[largest]) {
  //     largest = lson;
  //   }
  //   if (rson < n && arr[rson] > arr[largest]) {
  //     largest = rson;
  //   }

  //   // 如果最大值发生了变化
  //   if (largest !== i) {
  //     // 交换节点
  //     [arr[i], arr[largest]] = [arr[largest], arr[i]];
  //     // 由于交换了，可能破坏了最大堆结构，所以需要递归继续堆化
  //     heapify(arr, n, largest);
  //   }
  // }

  // const heapSort = (arr, n) => {
  //   // 构建最大堆
  //   // 需要从底部向上构建，怎么确定底部起始的下标呢？
  //   // 我们知道最后一个元素的下标是 n - 1 其父节点的下标就是 (n - 1 - 1) / 2取整
  //   let start = Math.floor((n - 1 - 1) / 2);
  //   // 开始构建最大堆
  //   for (let i = start; i >= 0; i--) {
  //     heapify(arr, n, i);
  //   }

  //   // 堆排序
  //   for (let j = n - 1; j >= 0; j--) {
  //     // 首尾交换
  //     [arr[0], arr[j]] = [arr[j], arr[0]];
  //     // 继续堆化，由于首尾交换每次都会确定最大值，所以每次都需要将最后一个元素截断
  //     // 那么怎么截断呢，可以利用j变量，传入的节点个数递减就可以
  //     heapify(arr, j, 0);
  //   }
  // }

  // heapSort(nums, nums.length);


  // ! 5. 选择排序
  // 思路
  // 第一次找出数组中最小值，和第一个元素交换
  // 第二次找出剩余元素的最小值，和第二个元素交换
  // ...一直进行下去
  // 时间复杂度 O(n^2)
  
  /**
   * 根据传入的数组和起始位置找出最小值下标
   * @param {*} arr 当前数组
   * @param {*} start 起始位置
   */
  // const findMin = (arr, start) => {
  //   let min = start;
  //   for (let i = start; i < arr.length; i++) {
  //     if (arr[i] < arr[min]) {
  //       min = i;
  //     }
  //   }
  //   return min;
  // }
  
  // const selectSort = (arr, start) => {
  //   // 递归出口
  //   if (start >= arr.length) return;
  //   // 找到最小值
  //   const min = findMin(arr, start);
  //   // 交换
  //   [arr[start], arr[min]] = [arr[min], arr[start]];
  //   // 递归向下找
  //   selectSort(arr, start + 1);
  // }

  // selectSort(nums, 0);


  // ! 6 归并排序
  // 时间复杂度 o(nlogn)
  // 思路
  // 1. 合并两个已经排好序的数组
  // 2. 怎么生成两个排好序的数组
  
  // 先看看怎么合并已经排好序的数组
  /**
   * 
   * @param {*} arr 目标数组
   * @param {*} l 左边数组开始的下标
   * @param {*} m 左右两个数组的分割点
   * @param {*} r 右边数组结束的下标
   */
  // const merge = (arr, l, m, r) => {
  //   // 构建左右数组
  //   const leftArr = [];
  //   const rightArr = [];

  //   // 填充左数组
  //   for (let i = l; i < m; i++) {
  //     leftArr.push(arr[i]);
  //   }

  //   // 填充右数组
  //   for (let j = m; j <= r; j++) {
  //     rightArr.push(arr[j]);
  //   }

  //   // 对比左右数组，更改原数组
  //   let i = 0;
  //   let j = 0;
  //   let k = l;
  //   while (i < leftArr.length && j < rightArr.length) {
  //     if (leftArr[i] < rightArr[j]) {
  //       arr[k] = leftArr[i];
  //       i++;
  //       k++;
  //     } else {
  //       arr[k] = rightArr[j];
  //       j++;
  //       k++;
  //     }
  //   }

  //   // 处理剩余元素
  //   while (i < leftArr.length) {
  //     arr[k] = leftArr[i];
  //     i++;
  //     k++;
  //   }
  //   while (j < rightArr.length) {
  //     arr[k] = rightArr[j];
  //     j++;
  //     k++;
  //   }
  // }

  // const mergeSort = (arr, l, r) => {
  //   // 递归出口
  //   if (l >= r) return;
  //   // 不断通过二分法，分割数组
  //   const middle = Math.floor((l + r) / 2);
  //   // 不断递归左右两边
  //   mergeSort(arr, l, middle);
  //   mergeSort(arr, middle + 1, r);

  //   // 合并
  //   merge(arr, l, middle, r);
  // }

  // merge(nums, 0, nums.length - 1);

  // ! 归并排序 切割数组的方式
  // const merge = (leftArr = [], rightArr = []) => {
  //   const result = [];
  //   let i = 0;
  //   let j = 0;
  //   while (i < leftArr.length && j < rightArr.length) {
  //     if (leftArr[i] < rightArr[j]) {
  //       result.push(leftArr[i])
  //       i++;
  //     } else {
  //       result.push(rightArr[j])
  //       j++;
  //     }
  //   }

  //   // 处理剩余元素
  //   while (i < leftArr.length) {
  //     result.push(leftArr[i])
  //     i++;
  //   }
  //   while (j < rightArr.length) {
  //     result.push(rightArr[j])
  //     j++;
  //   }

  //   return result;
  // }

  // const mergeSort = arr => {
  //   if (arr.length <= 1) return arr;
  //   const middle = Math.floor(arr.length / 2);
  //   const leftArr = arr.slice(0, middle);
  //   const rightArr = arr.slice(middle);
  //   const left = mergeSort(leftArr);
  //   const right = mergeSort(rightArr);
  //   return merge(left, right);
  // }

  // mergeSort(nums);

  return nums;
};
// @lc code=end

