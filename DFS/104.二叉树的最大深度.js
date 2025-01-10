/*
104. 二叉树的最大深度
给定一个二叉树 root ，返回其最大深度。

二叉树的 最大深度 是指从根节点到最远叶子节点的最长路径上的节点数。

示例 1：

输入：root = [3,9,20,null,null,15,7]
输出：3

示例 2：

输入：root = [1,null,2]
输出：2

提示：

    树中节点的数量在 [0, 104] 区间内。
    -100 <= Node.val <= 100

https://leetcode.cn/problems/maximum-depth-of-binary-tree/description/
*/

/*
原问题:计算整棵树的最大深度
子问题:计算左/右子树的最大深度子问题与原问题是相似的

类比循环，执行的代码也应该是相同的，但子问题需要把计算结果返给上一级问题这更适合用递归实现。

由于子问题的规模比原问题小不断递下去，总会有个尽头即递归的边界条件(base case)直接返回它的答案(归)。
*/

function maxDepth(root) {
  // 整棵树的最大深度 = Math.max(左子树的最大深度，右子树的最大深度) + 1 (根节点)
  return !root ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

function maxDepth(root) {
  let res = 0;

  preorder(root, 0);

  return res;

  function preorder(root, count) {
    if (!root) {
      return root;
    }

    count++;

    res = Math.max(res, count);

    preorder(root.left, count);
    preorder(root.right, count);
  }
}
