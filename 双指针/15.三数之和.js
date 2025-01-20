/*
15. 三数之和

给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请你返回所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

示例 1：

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
解释：
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
注意，输出的顺序和三元组的顺序并不重要。

示例 2：

输入：nums = [0,1,1]
输出：[]
解释：唯一可能的三元组和不为 0 。

示例 3：

输入：nums = [0,0,0]
输出：[[0,0,0]]
解释：唯一可能的三元组和为 0 。

提示：

    3 <= nums.length <= 3000
    -105 <= nums[i] <= 105

https://leetcode.cn/problems/3sum/description/
*/
const nums1 = [-1, 0, 1, 2, -1, -4];
const nums2 = [-2, 0, 0, 2, 2];

console.log(threeSum(nums1)); // [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
console.log(threeSum(nums2)); // [[-2,0,2]]

// 时间复杂度 O(n) 空间复杂度O(1)
function threeSum(nums) {
  // 存储结果的数组
  const res = [];
  // 对数组进行排序，以便使用双指针法
  nums.sort((a, b) => a - b);

  for (let i = 0, len = nums.length; i < len - 2; i++) {
    // 跳过重复元素
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    // 如果最小的三个数相加都大于 0，则后续无法找到满足条件的组合，直接退出
    if (nums[i] + nums[i + 1] + nums[i + 2] > 0) {
      break;
    }
    // 如果当前元素与最大的两个元素相加小于 0，继续找下一个元素
    if (nums[i] + nums[len - 1] + nums[len - 2] < 0) {
      continue;
    }

    // 左右指针
    let left = i + 1,
      right = len - 1;

    while (left < right) {
      // 计算三数之和
      const sum = nums[i] + nums[left] + nums[right];

      if (sum < 0) {
        // 三数之和小于 0，左指针右移
        left++;
      } else if (sum > 0) {
        // 三数之和大于 0，右指针左移
        right--;
      } else {
        // 三数之和等于 0，添加到结果数组
        res.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        // 跳过重复元素
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      }
    }
  }

  return res;
}
