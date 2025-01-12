/*
543. 二叉树的直径

给你一棵二叉树的根节点，返回该树的 直径 。

二叉树的 直径 是指树中任意两个节点之间最长路径的 长度 。这条路径可能经过也可能不经过根节点 root 。

两节点之间路径的 长度 由它们之间边数表示。

示例 1：

输入：root = [1,2,3,4,5]
输出：3
解释：3 ，取路径 [4,2,1,3] 或 [5,2,1,3] 的长度。

示例 2：

输入：root = [1,2]
输出：1

提示：

    树中节点数目在范围 [1, 104] 内
    -100 <= Node.val <= 100

https://leetcode.cn/problems/diameter-of-binary-tree/description/
*/

function diameterOfBinaryTree(root) {
  // 声明一个变量 res 并初始化为 0，用于存储最终计算得到的二叉树的直径。
  let res = 0;
  dfs(root);
  return res;

  function dfs(root) {
    // 如果当前节点 root 为空（即 null），则返回 -1。这是递归的终止条件，表示已经到达叶子节点的下一层，将深度标记为 -1。
    if (!root) return -1;

    // 分别递归调用 dfs 函数对当前节点的左子节点和右子节点进行深度优先搜索，并将结果加 1。加 1 是因为当前节点到子节点的边数为 1，通过递归计算出左右子树的深度。
    const leftLen = dfs(root.left) + 1;
    const rightLen = dfs(root.right) + 1;

    // 计算以当前节点为转折点的路径长度，即左子树深度（leftLen）加上右子树深度（rightLen），并与当前存储的最大直径 res 比较，更新 res 的值。这一步考虑的是当前节点作为路径上的转折点时的情况，更新直径的最大值。
    res = Math.max(res, leftLen + rightLen);

    // 返回以当前节点为根的子树的最大深度，即左右子树深度中的最大值，以便父节点使用该信息进行后续的计算。
    return Math.max(leftLen, rightLen);
  }
}
