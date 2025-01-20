/*
10. 正则表达式匹配

给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。

    '.' 匹配任意单个字符
    '*' 匹配零个或多个前面的那一个元素

所谓匹配，是要涵盖 整个 字符串 s 的，而不是部分字符串。
 
示例 1：

输入：s = "aa", p = "a"
输出：false
解释："a" 无法匹配 "aa" 整个字符串。

示例 2:

输入：s = "aa", p = "a*"
输出：true
解释：因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。

示例 3：

输入：s = "ab", p = ".*"
输出：true
解释：".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。

提示：

    1 <= s.length <= 20
    1 <= p.length <= 20
    s 只包含从 a-z 的小写字母。
    p 只包含从 a-z 的小写字母，以及字符 . 和 *。
    保证每次出现字符 * 时，前面都匹配到有效的字符

https://leetcode.cn/problems/regular-expression-matching/description/
*/
function isMatch(s, p) {
  let m = s.length + 1;
  let n = p.length + 1;
  // 创建二维数组 dp
  let dp = new Array(m);
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n).fill(false);
  }
  dp[0][0] = true;
  for (let j = 2; j < n; j += 2) {
    dp[0][j] = dp[0][j - 2] && p[j - 1] === "*";
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (p[j - 1] === "*") {
        dp[i][j] =
          dp[i][j - 2] ||
          (dp[i - 1][j] && (s[i - 1] === p[j - 2] || p[j - 2] === "."));
      } else {
        dp[i][j] =
          dp[i - 1][j - 1] && (p[j - 1] === "." || s[i - 1] === p[j - 1]);
      }
    }
  }
  return dp[m - 1][n - 1];
}

function isMatch(s, p) {
  // 若 s 或 p 为 null，不匹配，返回 false
  if (s == null || p == null) return false;

  // 获取 s 和 p 的长度
  const sLen = s.length,
    pLen = p.length;
  // 创建一个二维数组 dp 用于存储匹配状态
  const dp = new Array(sLen + 1);

  // 初始化 dp 数组
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(pLen + 1).fill(false);
  }

  // 空字符串和空模式匹配
  dp[0][0] = true;

  // 处理模式 p 匹配空字符串 s 的情况
  for (let j = 1; j < pLen + 1; j++) {
    // 若模式中的字符是 *，其匹配结果取决于前两个位置的结果
    if (p[j - 1] == "*") dp[0][j] = dp[0][j - 2];
  }

  // 填充 dp 数组的其余部分
  for (let i = 1; i < sLen + 1; i++) {
    for (let j = 1; j < pLen + 1; j++) {
      // 当 s 和 p 当前字符相等或 p 为. 时，匹配结果取决于前一个字符的匹配结果
      if (s[i - 1] == p[j - 1] || p[j - 1] == ".") {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] == "*") {
        // 当模式字符为 * 时
        if (s[i - 1] == p[j - 2] || p[j - 2] == ".") {
          // 三种情况：
          // 1. 匹配零次，取 dp[i][j - 2]
          // 2. 匹配一次，取 dp[i - 1][j - 2]
          // 3. 匹配多次，取 dp[i - 1][j]
          dp[i][j] = dp[i][j - 2] || dp[i - 1][j - 2] || dp[i - 1][j];
        } else {
          // 若 * 前的字符不匹配，只能匹配零次
          dp[i][j] = dp[i][j - 2];
        }
      }
    }
  }

  // 返回最终结果，即 s 和 p 是否匹配
  return dp[sLen][pLen];
}
