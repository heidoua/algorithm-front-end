/*
124. 二叉树中的最大路径和

二叉树中的 路径 被定义为一条节点序列，序列中每对相邻节点之间都存在一条边。同一个节点在一条路径序列中 至多出现一次 。该路径 至少包含一个 节点，且不一定经过根节点。

路径和 是路径中各节点值的总和。

给你一个二叉树的根节点 root ，返回其 最大路径和 。

示例 1：

输入：root = [1,2,3]
输出：6
解释：最优路径是 2 -> 1 -> 3 ，路径和为 2 + 1 + 3 = 6

示例 2：

输入：root = [-10,9,20,null,null,15,7]
输出：42
解释：最优路径是 15 -> 20 -> 7 ，路径和为 15 + 20 + 7 = 42

提示：

    树中节点数目范围是 [1, 3 * 104]
    -1000 <= Node.val <= 1000

https://leetcode.cn/problems/binary-tree-maximum-path-sum/description/?envType=study-plan-v2&envId=top-100-liked
*/

// 遍历二叉树，在计算最大链和的同时，顺带更新答案的最大值。
// 在当前节点「拐弯」的最大路径和 = 左子树最大链和 + 右子树最大链和 + 当前节点值。
// 返回给父节点的是 max(左子树最大链和，右子树最大链和) + 当前节点值。如果这个值是负数，则返回 0。
// 时间复杂度 O(n) 空间复杂度 O(n)
function maxPathSum(root) {
  // 存储最终的最大路径和，初始化为最小安全整数，确保可以处理负数情况
  let res = Number.MIN_SAFE_INTEGER;

  // 调用深度优先搜索函数
  dfs(root);

  return res;

  function dfs(root) {
    // 如果当前节点为空，返回 0
    if (!root) return 0;
    // 递归计算左子树的最大路径和
    const lVal = dfs(root.left);
    // 递归计算右子树的最大路径和
    const rVal = dfs(root.right);
    // 更新最大路径和，考虑以当前节点为最高点的路径和，即左右子树路径和加上当前节点的值
    res = Math.max(res, lVal + rVal + root.val);
    // 对于父节点来说，只能选择左子树或右子树中的最大路径和，且如果结果为负数，不如不选（取 0）
    return Math.max(Math.max(lVal, rVal) + root.val, 0);
  }
}
