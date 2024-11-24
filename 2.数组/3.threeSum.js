/*
15. 三数之和

真题描述：给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
注意：答案中不可以包含重复的三元组。

示例： 给定数组 nums = [-1, 0, 1, 2, -1, -4]， 满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]

https://leetcode.cn/problems/3sum/description/
*/

// const nums = [-1, 0, 1, 2, -1, -4]
// const nums = [0,1,1]
// const nums = [0,0,0]
const nums = [-1, 0, 1, 2, -1, -4]
console.log(threeSum(nums))

function threeSum(nums) {
  const res = []

  nums.sort((a, b) => (a - b))

  for (let i = 0, len = nums.length; i < len - 2; i++) {
    let j = i + 1, k = len - 1

    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }

    while (j < k) {
      if (nums[i] + nums[j] + nums[k] < 0) {
        j++
        while (j < k && nums[j] === nums[j - 1]) {
          j++
        }
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        k--
        while (j < k && nums[k] === nums[k + 1]) {
          k--
        }
      } else {
        res.push([nums[i], nums[j], nums[k]])
        j++
        k--

        while (j < k && nums[j] === nums[j - 1]) {
          j++
        }

        while (j < k && nums[k] === nums[k + 1]) {
          k--
        }
      }
    }
  }

  return res
}

// 优化
function threeSum(nums) {
  nums.sort((a, b) => (a - b))

  const res = []

  for (let i = 0, len = nums.length; i < len; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }

    let left = i + 1, right = len - 1

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]

      if (sum < 0) {
        left++
      } else if (sum > 0) {
        right--
      } else {
        res.push([nums[i], nums[left], nums[right]])
        left++
        right--

        while (left < right && nums[left] === nums[left - 1]) {
          left++
        }

        while (left < right && nums[right] === nums[right + 1]) {
          right--
        }
      }
    }
  }

  return res
}
