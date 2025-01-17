/*
258. 各位相加

给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。返回这个结果。

示例 1:

输入: num = 38
输出: 2 
解释: 各位相加的过程为：
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2
由于 2 是一位数，所以返回 2。
示例 2:

输入: num = 0
输出: 0
 
提示：

0 <= num <= 231 - 1
 
进阶：你可以不使用循环或者递归，在 O(1) 时间复杂度内解决这个问题吗？

https://leetcode.cn/problems/add-digits/description/
*/

console.log(addDigits(38)); // 2
console.log(addDigits(0)); // 0

function addDigits(num) {
  const s = num.toString();
  let res = 0;

  for (let c of s) {
    res += parseInt(c);
  }

  if (res < 10) {
    return res;
  }

  addDigits(res);
}

function addDigits(num) {
  if (num > 9) {
    num %= 9;
    if (num === 0) {
      return 9;
    }
  }
  return num;
}

function addDigits(num) {
  if (num < 10) {
    return num;
  }

  return addDigits(Math.floor(num / 10) + (num % 10));
}
