/*
16. 最接近的三数之和

给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。

返回这三个数的和。

假定每组输入只存在恰好一个解。

示例 1：

输入：nums = [-1,2,1,-4], target = 1
输出：2
解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2)。

示例 2：

输入：nums = [0,0,0], target = 1
输出：0
解释：与 target 最接近的和是 0（0 + 0 + 0 = 0）。

提示：

    3 <= nums.length <= 1000
    -1000 <= nums[i] <= 1000
    -104 <= target <= 104

https://leetcode.cn/problems/3sum-closest/description/
*/

console.log(threeSumClosest([-1, 2, 1, -4], 1)); // 2
console.log(threeSumClosest([0, 0, 0], 1)); // 0
console.log(threeSumClosest([4, 0, 5, -5, 3, 3, 0, -4, -5], -2)); // -2

function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b);

  let res = nums[0] + nums[1] + nums[2];

  for (let i = 0, len = nums.length; i < len - 2; i++) {
    let left = i + 1,
      right = len - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (Math.abs(target - sum) < Math.abs(target - res)) {
        res = sum;
      }

      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        return res;
      }
    }
  }

  return res;
}
