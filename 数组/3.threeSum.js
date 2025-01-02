/*
15. 三数之和

给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请你返回所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

示例： 给定数组 nums = [-1, 0, 1, 2, -1, -4]， 满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]

https://leetcode.cn/problems/3sum/description/
*/

const nums1 = [-1, 0, 1, 2, -1, -4];
const nums2 = [0, 1, 1];
const nums3 = [0, 0, 0];
const nums4 = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4];

console.log(threeSum(nums1)); // [ [-1, 0, 1], [-1, -1, 2] ]
console.log(threeSum(nums2)); // []
console.log(threeSum(nums3)); // [[0, 0, 0]]
console.log(threeSum(nums4)); // [[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]

function threeSum(nums) {
  const res = [];

  nums.sort((a, b) => a - b);

  for (let i = 0, len = nums.length; i < len - 2; i++) {
    let j = i + 1,
      k = len - 1;

    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    while (j < k) {
      if (nums[i] + nums[j] + nums[k] < 0) {
        j++;
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        k--;
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      } else {
        res.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;

        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }

        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      }
    }
  }

  return res;
}

// 优化
function threeSum(nums) {
  nums.sort((a, b) => a - b);

  const res = [];

  for (let i = 0, len = nums.length; i < len; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1,
      right = len - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        res.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

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

function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const res = [];

  for (let i = 0, len = nums.length; i < len - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    if (nums[i] + nums[i + 1] + nums[i + 2] > 0) {
      break;
    }

    if (nums[i] + nums[-2] + nums[-1] < 0) {
      continue;
    }

    let j = i + 1;
    let k = len - 1;

    while (j < k) {
      const r = nums[i] + nums[j] + nums[k];

      if (r > 0) {
        k--;
      } else if (r < 0) {
        j++;
      } else {
        res.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;

        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      }
    }
  }

  return res;
}
