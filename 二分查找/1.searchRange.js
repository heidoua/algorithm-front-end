/*
34. 在排序数组中查找元素的第一个和最后一个位置

给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 [-1, -1]。

你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。

示例 1：

输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
示例 2：

输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]
示例 3：

输入：nums = [], target = 0
输出：[-1,-1]

提示：

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums 是一个非递减数组
-109 <= target <= 109
https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/description/
*/

const nums1 = [5, 7, 7, 8, 8, 10],
  target1 = 8;
const nums2 = [5, 7, 7, 8, 8, 10],
  target2 = 6;
const nums3 = [],
  target3 = 0;
const nums4 = [1],
  target4 = 1;

console.log(searchRange(nums1, target1)); // [3,4]
console.log(searchRange(nums2, target2)); // [-1,-1]
console.log(searchRange(nums3, target3)); // [-1,-1]
console.log(searchRange(nums4, target4)); // [0,0]

// 方法一
function searchRange(nums, target) {
  let i = 0,
    j = nums.length - 1;
  const res = [];
  while (i <= j) {
    if (nums[i] < target) {
      i++;
    } else if (nums[j] > target) {
      j--;
    } else {
      return [i, j];
    }
  }

  return [-1, -1];
}

// 方法二
function searchRange(nums, target) {
  return [nums.indexOf(target), nums.lastIndexOf(target)];
}

// 方法三
function searchRange(nums, target) {
  const res = [-1, -1];
  res[0] = binarySearch(nums, target, true);
  res[1] = binarySearch(nums, target, false);
  return res;
}

function binarySearch(nums, target, leftOrRight) {
  let res = -1;
  let left = 0,
    right = nums.length - 1,
    mid;

  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    if (target < nums[mid]) {
      right = mid - 1;
    } else if (target > nums[mid]) {
      left = mid + 1;
    } else {
      res = mid;
      if (leftOrRight) right = mid - 1;
      else left = mid + 1;
    }
  }
  return res;
}
