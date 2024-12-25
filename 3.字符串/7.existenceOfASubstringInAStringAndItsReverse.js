/*
3083. 字符串及其反转中是否存在同一子字符串

给你一个字符串 s ，请你判断字符串 s 是否存在一个长度为 2 的子字符串，在其反转后的字符串中也出现。

如果存在这样的子字符串，返回 true；如果不存在，返回 false 。

示例 1：

输入：s = "leetcode"

输出：true

解释：子字符串 "ee" 的长度为 2，它也出现在 reverse(s) == "edocteel" 中。

示例 2：

输入：s = "abcba"

输出：true

解释：所有长度为 2 的子字符串 "ab"、"bc"、"cb"、"ba" 也都出现在 reverse(s) == "abcba" 中。

示例 3：

输入：s = "abcd"

输出：false

解释：字符串 s 中不存在满足「在其反转后的字符串中也出现」且长度为 2 的子字符串。

提示：

    1 <= s.length <= 100
    字符串 s 仅由小写英文字母组成。

https://leetcode.cn/problems/existence-of-a-substring-in-a-string-and-its-reverse/description/
 */
console.log(isSubstringPresent("leetcode")); // true
// console.log(isSubstringPresent("abcba")); // true
// console.log(isSubstringPresent("abcd")); // false

function isSubstringPresent(s) {
  const arr = [];

  // 两两分割字符串
  for (let i = 0, len = s.length; i < len - 1; i++) {
    arr.push(s.substr(i, 2));
  }

  // 反转字符串
  const reverseStr = s.split("").reverse().join("");

  // 判断反转后的字符串是否包含两两分割字符串数组中的某一个，如果有，直接返回 true
  for (let i = 0, len = arr.length; i < len; i++) {
    if (reverseStr.indexOf(arr[i]) !== -1) {
      return true;
    }
  }

  return false;
}

function isSubstringPresent(s) {
  for (let i = 0, len = s.length - 1; i < len; i++) {
    let substr = s[i + 1] + s[i];

    if (s.includes(substr)) {
      return true;
    }
  }

  return false;
}
