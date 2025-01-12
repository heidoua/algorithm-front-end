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

/*
不用看官方题解，那么复杂。 所有树的题目，都想成一颗只有根、左节点、右节点 的小树。然后一颗颗小树构成整棵大树，所以只需要考虑这颗小树即可。接下来分情况， 按照题意：一颗三个节点的小树的结果只可能有如下6种情况：

  1.根 + 左 + 右
  2.根 + 左
  3.根 + 右
  4.根
  5.左
  6.右

好了，分析上述6种情况， 只有 2,3,4 可以向上累加，而1,5,6不可以累加（这个很好想，情况1向上累加的话，必然出现分叉，情况5和6直接就跟上面的树枝断开的，没法累加），所以我们找一个全局变量存储 1,5,6这三种不可累加的最大值， 另一方面咱们用遍历树的方法求2,3,4这三种可以累加的情况。 最后把两类情况得到的最大值再取一个最大值即可。
*/
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

/*
树形 DP
*/
function maxPathSum(root) {
  let res = Number.MIN_SAFE_INTEGER;

  dfs(root);

  return res;

  function dfs(root) {
    if (!root) return 0;
    //分别递归调用 dfs 函数对当前节点的左子节点和右子节点进行深度优先搜索，并将结果加 1。加 1 是因为当前节点到子节点的边数为 1，通过递归计算出左右子树的深度。
    const lVal = dfs(root.left) + 1;
    const rVal = dfs(root.right) + 1;

    //计算以当前节点为转折点的路径长度，即左子树深度（leftLen）加上右子树深度（rightLen），并与当前存储的最大直径 res 比较，更新 res 的值。这一步考虑的是当前节点作为路径上的转折点时的情况，更新直径的最大值。
    res = Math.max(res, lVal + rVal + root.val);
    // 返回以当前节点为根的子树的最大深度，即左右子树深度中的最大值，以便父节点使用该信息进行后续的计算
    return Math.max(Math.max(lVal, rVal) + root.val, 0);
  }
}
