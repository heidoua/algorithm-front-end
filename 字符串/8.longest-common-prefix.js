/*
14. 最长公共前缀

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1：

输入：strs = ["flower","flow","flight"]
输出："fl"

示例 2：

输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。

提示：

    1 <= strs.length <= 200
    0 <= strs[i].length <= 200
    strs[i] 仅由小写英文字母组成

https://leetcode.cn/problems/longest-common-prefix/description/
*/

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""

function longestCommonPrefix(strs) {
  if (strs.length == 0) return "";
  //公共前缀比所有字符串都短，随便选一个先
  let s = strs[0];
  for (const str of strs) {
    while (!str.startsWith(s)) {
      if (s.length == 0) return "";
      //公共前缀不匹配就让它变短！
      s = s.substring(0, s.length - 1);
    }
  }
  return s;
}
