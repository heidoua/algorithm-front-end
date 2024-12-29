/*
739. 每日温度

给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，其中 answer[i] 是指对于第 i 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 0 来代替。

示例 1:

输入: temperatures = [73,74,75,71,69,72,76,73]
输出: [1,1,4,2,1,1,0,0]

示例 2:

输入: temperatures = [30,40,50,60]
输出: [1,1,1,0]

示例 3:

输入: temperatures = [30,60,90]
输出: [1,1,0]

提示：

    1 <= temperatures.length <= 105
    30 <= temperatures[i] <= 100

https://leetcode.cn/problems/daily-temperatures/description/
*/
const temperatures1 = [73, 74, 75, 71, 69, 72, 76, 73];
const temperatures2 = [30, 40, 50, 60];
const temperatures3 = [30, 60, 90];

console.log(dailyTemperatures(temperatures1)); // [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures(temperatures2)); // [1,1,1,0]
console.log(dailyTemperatures(temperatures3)); // [1,1,0]

// 暴力解法
function dailyTemperatures(temperatures) {
  const len = temperatures.length;
  const res = new Array(len).fill(0);

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (temperatures[j] > temperatures[i]) {
        res[i] = j - i;
        break;
      }
    }
  }

  return res;
}
// ‌单调栈是一种特殊的数据结构，它保持栈内元素的单调性（递增或递减），主要用于解决一些特定的问题，如寻找数组中每个元素的下一个更大元素等。

// 空间复杂度 O(n)
// 时间复杂度 O(n)：for 循环循环的次数是 temperatures 的长度，即 n 次。for循环内的 while 循环在最坏的情况下，每个元素都可能会导致栈中之前的元素全部出栈。考虑到整个算法的执行过程，对于每个元素，它最多只会进栈一次，出栈一次。因为元素进栈和出栈操作是与 for 循环内的元素处理相关联的，且每个元素只可能被处理一次。对于 for 循环内的 while 循环，总的操作次数不会超过 n 次，因为进栈和出栈操作的总数是有限的，不会超过元素的总数量。

function dailyTemperatures(temperatures) {
  const len = temperatures.length;
  const res = new Array(len).fill(0);
  const stack = [];

  for (let i = len - 1; i >= 0; i--) {
    const t = temperatures[i];
    while (stack.length && t >= temperatures[stack[stack.length - 1]]) {
      stack.pop();
    }
    if (stack.length) {
      res[i] = stack[stack.length - 1] - i;
    }
    stack.push(i);
  }

  return res;
}

function dailyTemperatures(temperatures) {
  const len = temperatures.length;
  const res = new Array(len).fill(0);
  const stack = [];

  for (let i = 0; i < len; i++) {
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const j = stack.pop();
      res[j] = i - j;
    }

    stack.push(i);
  }

  return res;
}
