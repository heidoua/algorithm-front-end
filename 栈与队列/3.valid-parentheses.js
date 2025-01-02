/*
20. 有效的括号

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

    左括号必须用相同类型的右括号闭合。
    左括号必须以正确的顺序闭合。
    每个右括号都有一个对应的相同类型的左括号。

示例 1：

输入：s = "()"

输出：true

示例 2：

输入：s = "()[]{}"

输出：true

示例 3：

输入：s = "(]"

输出：false

示例 4：

输入：s = "([])"

输出：true

提示：

    1 <= s.length <= 104
    s 仅由括号 '()[]{}' 组成

https://leetcode.cn/problems/valid-parentheses/description/
*/
const s1 = "()";
const s2 = "()[]{}";
const s3 = "(]";
const s4 = "([])";
const s5 = "[";

console.log(isValid(s1)); // true
console.log(isValid(s2)); // true
console.log(isValid(s3)); // false
console.log(isValid(s4)); // true
console.log(isValid(s5)); // false

function isValid(s) {
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const stack = [];

  for (const c of s) {
    if (c === "(" || c === "[" || c === "{") {
      stack.push(map[c]);
    } else if (stack.pop() !== c) {
      return false;
    }
  }

  return stack.length === 0;
}
