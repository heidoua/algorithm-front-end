/*
1367. 二叉树中的链表

给你一棵以 root 为根的二叉树和一个 head 为第一个节点的链表。

如果在二叉树中，存在一条一直向下的路径，且每个点的数值恰好一一对应以 head 为首的链表中每个节点的值，那么请你返回 True ，否则返回 False 。

一直向下的路径的意思是：从树中某个节点开始，一直连续向下的路径。

示例 1：

输入：head = [4,2,8], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]
输出：true
解释：树中蓝色的节点构成了与链表对应的子路径。

示例 2：

输入：head = [1,4,2,6], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]
输出：true

示例 3：

输入：head = [1,4,2,6,8], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]
输出：false
解释：二叉树中不存在一一对应链表的路径。

提示：

    二叉树和链表中的每个节点的值都满足 1 <= node.val <= 100 。
    链表包含的节点数目在 1 到 100 之间。
    二叉树包含的节点数目在 1 到 2500 之间。

https://leetcode.cn/problems/linked-list-in-binary-tree/description/
*/
const head1 = [4, 2, 8],
  root1 = [
    1,
    4,
    4,
    null,
    2,
    2,
    null,
    1,
    null,
    6,
    8,
    null,
    null,
    null,
    null,
    1,
    3,
  ];
const head2 = [1, 4, 2, 6],
  root2 = [
    1,
    4,
    4,
    null,
    2,
    2,
    null,
    1,
    null,
    6,
    8,
    null,
    null,
    null,
    null,
    1,
    3,
  ];
const head3 = [1, 4, 2, 6],
  root3 = [
    1,
    4,
    4,
    null,
    2,
    2,
    null,
    1,
    null,
    6,
    8,
    null,
    null,
    null,
    null,
    1,
    3,
  ];

// console.log(isSubPath(buildList(head1), buildTree(root1))); // true
console.log(JSON.stringify(buildList(head1)));
console.log(JSON.stringify(buildTree(root1)));

// console.log(isSubPath(buildList(head2), buildTree(root2))); // true
// console.log(isSubPath(buildList(head3), buildTree(root3))); // false

function isSubPath(head, root) {
  return dfs(head, root);

  function dfs(list, tree) {
    if (!list) return true;

    if (!tree) return false;

    return (
      (list.val === tree.val &&
        (dfs(list.next, tree.left) || dfs(list.next, tree.right))) ||
      (list == head && (dfs(head, tree.left) || dfs(head, tree.right)))
    );
  }
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function buildList(arr) {
  const head = new ListNode();
  let cur = head;

  arr.forEach((item) => {
    const node = new ListNode(item);
    cur.next = node;
    cur = cur.next;
  });

  return head.next;
}
