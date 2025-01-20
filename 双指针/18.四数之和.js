/*
18. 四数之和

给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：

    0 <= a, b, c, d < n
    a、b、c 和 d 互不相同
    nums[a] + nums[b] + nums[c] + nums[d] == target

你可以按 任意顺序 返回答案 。

示例 1：

输入：nums = [1,0,-1,0,-2,2], target = 0
输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

示例 2：

输入：nums = [2,2,2,2,2], target = 8
输出：[[2,2,2,2]]

提示：

    1 <= nums.length <= 200
    -109 <= nums[i] <= 109
    -109 <= target <= 109

https://leetcode.cn/problems/4sum/
*/
function fourSum(nums, target) {
  // 对数组进行排序，以便使用双指针法
  nums.sort((a, b) => a - b);

  // 数组的长度
  const n = nums.length;

  // 存储结果的数组
  const ans = [];

  // 第一个元素的指针 a 从 0 开始遍历，留出三个元素的位置
  for (let a = 0; a < n - 3; a++) {
    // 获取当前元素的值
    const x = nums[a];

    // 避免重复元素
    if (a > 0 && x === nums[a - 1]) continue;

    // 如果最小的四个数相加都大于目标值，后续无法找到满足条件的组合，直接退出
    if (x + nums[a + 1] + nums[a + 2] + nums[a + 3] > target) break;

    // 如果当前元素与最大的三个元素相加小于目标值，继续找下一个元素
    if (x + nums[n - 3] + nums[n - 2] + nums[n - 1] < target) continue;

    // 第二个元素的指针 b 从 a + 1 开始遍历，留出两个元素的位置
    for (let b = a + 1; b < n - 2; b++) {
      // 获取当前元素的值
      const y = nums[b];

      // 避免重复元素
      if (b > a + 1 && y === nums[b - 1]) continue;

      // 如果最小的四个数相加都大于目标值，后续无法找到满足条件的组合，直接退出
      if (x + y + nums[b + 1] + nums[b + 2] > target) break;

      // 如果当前元素与最大的两个元素相加小于目标值，继续找下一个元素
      if (x + y + nums[n - 2] + nums[n - 1] < target) continue;

      // 第三个元素的指针 c 从 b + 1 开始，第四个元素的指针 d 从最后一个元素开始
      let c = b + 1,
        d = n - 1;

      // 双指针法查找满足条件的元素组合
      while (c < d) {
        // 计算四个元素的和
        const s = x + y + nums[c] + nums[d];
        // 如果和大于目标值，右指针 d 左移
        if (s > target) d--;
        // 如果和小于目标值，左指针 c 右移
        else if (s < target) c++;
        else {
          // 将满足条件的四个元素添加到结果数组中
          ans.push([x, y, nums[c], nums[d]]);
          // 跳过重复元素
          for (c++; c < d && nums[c] === nums[c - 1]; c++);
          for (d--; d > c && nums[d] === nums[d + 1]; d--);
        }
      }
    }
  }

  // 返回结果数组
  return ans;
}
