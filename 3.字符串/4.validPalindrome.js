/*
680. 验证回文字符串 II
LCR 019. 验证回文串 II

给你一个字符串 s，最多 可以从中删除一个字符。

请你判断 s 是否能成为回文字符串：如果能，返回 true ；否则，返回 false 。

示例 1：

输入：s = "aba"
输出：true
示例 2：

输入：s = "abca"
输出：true
解释：你可以删除字符 'c' 。
示例 3：

输入：s = "abc"
输出：false
 
提示：

1 <= s.length <= 105
s 由小写英文字母组成

https://leetcode.cn/problems/valid-palindrome-ii/description/
*/
const s1 = 'aba'
const s2 = 'abca'
const s3 = 'abc'
const s4 = 'cbbcc'

console.log(validPalindrome(s1)) // true
console.log(validPalindrome(s2)) // true
console.log(validPalindrome(s3)) // false
console.log(validPalindrome(s4)) // true


function validPalindrome(s) {

  let len = s.length, i = 0, j = len - 1

  while (i < j && s[i] === s[j]) {
    i++
    j--
  }

  // i === j 用来判断字符串为奇数位，此时遍历到了中间一位字符，表明它前后都是相等的，加上这个字符也是回文字符串，直接返回 true
  if (i === j || isPalindrome(i + 1, j)) {
    return true
  }

  if (i === j || isPalindrome(i, j - 1)) {
    return true
  }

  return false
  
  function isPalindrome(start, end) {
    while (start < end) {

      if (s[start] !== s[end]) {
        return false
      }

      start++
      end--
    }

    return true
  }
}

