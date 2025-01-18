/*
167. 两数之和 II - 输入有序数组

给你一个下标从 1 开始的整数数组 numbers ，该数组已按 非递减顺序排列  ，请你从数组中找出满足相加之和等于目标数 target 的两个数。如果设这两个数分别是 numbers[index1] 和 numbers[index2] ，则 1 <= index1 < index2 <= numbers.length 。

以长度为 2 的整数数组 [index1, index2] 的形式返回这两个整数的下标 index1 和 index2。

你可以假设每个输入 只对应唯一的答案 ，而且你 不可以 重复使用相同的元素。

你所设计的解决方案必须只使用常量级的额外空间。
 
示例 1：

输入：numbers = [2,7,11,15], target = 9
输出：[1,2]
解释：2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。返回 [1, 2] 。

示例 2：

输入：numbers = [2,3,4], target = 6
输出：[1,3]
解释：2 与 4 之和等于目标数 6 。因此 index1 = 1, index2 = 3 。返回 [1, 3] 。

示例 3：

输入：numbers = [-1,0], target = -1
输出：[1,2]
解释：-1 与 0 之和等于目标数 -1 。因此 index1 = 1, index2 = 2 。返回 [1, 2] 。

提示：

    2 <= numbers.length <= 3 * 104
    -1000 <= numbers[i] <= 1000
    numbers 按 非递减顺序 排列
    -1000 <= target <= 1000
    仅存在一个有效答案

https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/description/
*/

// 时间复杂度 O(n) 空间复杂度 O(1)
function twoSum(numbers, target) {
  // 左指针，初始指向数组第一个元素
  let left = 0;
  // 右指针，初始指向数组最后一个元素
  let right = numbers.length - 1;

  // 当左指针小于右指针时，继续查找
  while (left < right) {
    // 计算左右指针指向元素的和
    const sum = numbers[left] + numbers[right];
    // 如果和小于目标值，左指针右移，使和增大
    if (sum < target) {
      left++;
    }
    // 如果和大于目标值，右指针左移，使和减小
    else if (sum > target) {
      right--;
    }
    // 如果和等于目标值，返回两个元素的索引（加 1，因为题目可能要求的是从 1 开始的索引）
    else {
      return [left + 1, right + 1];
    }
  }

  // 未找到满足条件的元素对，返回 [-1, -1]
  return [-1, -1];
}
