/*
42. 接雨水

给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

示例 1：

输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
输出：6
解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 
示例 2：

输入：height = [4,2,0,3,2,5]
输出：9
 
提示：

n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105

https://leetcode.cn/problems/trapping-rain-water/description/
*/

const s = "1234";
console.log(s.substr(0));
console.log(s.split("").reverse().join(""));

// console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
// console.log(trap([4, 2, 0, 3, 2, 5])); // 9

function trap(height) {
  let res = 0;
  const len = height.length;
  const pre_max = new Array(len);
  const suf_max = new Array(len);

  pre_max[0] = height[0];

  for (let i = 1; i < len; i++) {
    pre_max[i] = Math.max(pre_max[i - 1], height[i]);
  }

  suf_max[len - 1] = height[len - 1];

  for (let i = len - 2; i >= 0; i--) {
    suf_max[i] = Math.max(suf_max[i + 1], height[i]);
  }

  console.log(pre_max, suf_max);

  for (let i = 0; i < len; i++) {
    res += Math.min(pre_max[i], suf_max[i]) - height[i];
  }

  return res;
}
