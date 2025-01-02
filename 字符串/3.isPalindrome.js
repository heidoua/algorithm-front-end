/*
125.验证回文字符串

如果在将所有大写字符转换为小写字符、并移除所有非字母数字字符之后，短语正着读和反着读都一样。则可以认为该短语是一个 回文串 。

字母和数字都属于字母数字字符。

给你一个字符串 s，如果它是 回文串 ，返回 true ；否则，返回 false 。


示例 1：

输入: s = "A man, a plan, a canal: Panama"
输出：true
解释："amanaplanacanalpanama" 是回文串。
示例 2：

输入：s = "race a car"
输出：false
解释："raceacar" 不是回文串。
示例 3：

输入：s = " "
输出：true
解释：在移除非字母数字字符之后，s 是一个空字符串 "" 。
由于空字符串正着反着读都一样，所以是回文串。
 
提示：

1 <= s.length <= 2 * 105
s 仅由可打印的 ASCII 字符组成

https://leetcode.cn/problems/valid-palindrome/description/
*/
const s1 = "A man, a plan, a canal: Panama" // true
const s2 = "race a car" // false
const s3 = " " // true

console.log(isPalindrome(s1))

function isPalindrome(s) {
  s = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
  return s === [...s].reverse().join("");
};

function isPalindrome(str) {
  // 预处理：去除非字母数字字符并转换为小写
  str = str.replace(/[^a-z0-9]/gi, '').toLowerCase();

  // 定义递归函数
  function checkPalindrome(left, right) {
      // 基本情况：如果左指针大于或等于右指针，说明是回文
      if (left >= right) {
          return true;
      }
      // 如果左右字符不相等，返回 false
      if (str[left] !== str[right]) {
          return false;
      }
      // 递归调用，移动指针
      return checkPalindrome(left + 1, right - 1);
  }

  // 调用递归函数，初始指针位置
  return checkPalindrome(0, str.length - 1);
}

var isPalindrome = function (s) {
  s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
  
  for(let i = 0, len = s.length; i < len / 2; i++) {
      if (s[i] !== s[len - i - 1]) {
          return false
      }
  }

  return true
};