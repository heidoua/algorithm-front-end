/*
2246. 相邻字符不同的最长路径

给你一棵 树（即一个连通、无向、无环图），根节点是节点 0 ，这棵树由编号从 0 到 n - 1 的 n 个节点组成。用下标从 0 开始、长度为 n 的数组 parent 来表示这棵树，其中 parent[i] 是节点 i 的父节点，由于节点 0 是根节点，所以 parent[0] == -1 。

另给你一个字符串 s ，长度也是 n ，其中 s[i] 表示分配给节点 i 的字符。

请你找出路径上任意一对相邻节点都没有分配到相同字符的 最长路径 ，并返回该路径的长度。

示例 1：

输入：parent = [-1,0,0,1,1,2], s = "abacbe"
输出：3
解释：任意一对相邻节点字符都不同的最长路径是：0 -> 1 -> 3 。该路径的长度是 3 ，所以返回 3 。
可以证明不存在满足上述条件且比 3 更长的路径。 

示例 2：

输入：parent = [-1,0,0,0], s = "aabc"
输出：3
解释：任意一对相邻节点字符都不同的最长路径是：2 -> 0 -> 3 。该路径的长度为 3 ，所以返回 3 。

提示：
    n == parent.length == s.length
    1 <= n <= 105
    对所有 i >= 1 ，0 <= parent[i] <= n - 1 均成立
    parent[0] == -1
    parent 表示一棵有效的树
    s 仅由小写英文字母组成

https://leetcode.cn/problems/longest-path-with-different-adjacent-characters/description/
*/
const parent = [-1, 0, 0, 1, 1, 2],
  s = "abacbe";
// const parent = [-1, 0, 0, 0],
//   s = "aabc";
console.log(longestPath(parent, s));

// 时间复杂度：O(n) 空间复杂度：O(n)
function longestPath(parent, s) {
  // 获取 parent 数组的长度
  let n = parent.length;
  // 使用 Array.from 创建一个长度为 n 的数组 g，并将每个元素初始化为一个空数组，用于存储图的邻接表
  let g = Array.from({ length: n }, () => []);
  // 遍历 parent 数组，将 i 的父节点 parent[i] 的邻接表中添加 i，建立图的连接关系。
  for (let i = 1; i < n; i++) {
    g[parent[i]].push(i);
  }
  console.log(g);
  // 初始化结果 ans 为 0
  let ans = 0;
  // 调用 dfs 函数从根节点 0 开始进行深度优先搜索
  dfs(0);
  return ans + 1;

  function dfs(x) {
    // 初始化 maxLen 为 0，用于存储从当前节点 x 出发的最大长度
    let maxLen = 0;
    // 遍历节点 x 的邻接节点 y
    for (let y of g[x]) {
      // 对每个邻接节点 y 调用 dfs(y) 并加 1 得到 len
      let len = dfs(y) + 1;
      // 如果 s[y] 和 s[x] 的字符不同，更新 ans 为 Math.max(ans, maxLen + len)，并更新 maxLen 为 Math.max(maxLen, len)
      if (s[y] !== s[x]) {
        ans = Math.max(ans, maxLen + len);
        maxLen = Math.max(maxLen, len);
      }
    }
    // 返回 maxLen
    return maxLen;
  }
}
