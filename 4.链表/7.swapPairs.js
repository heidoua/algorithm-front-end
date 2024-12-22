/*
24. 两两交换链表中的节点

给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。

示例 1：

输入：head = [1,2,3,4]
输出：[2,1,4,3]
示例 2：

输入：head = []
输出：[]
示例 3：

输入：head = [1]
输出：[1]
 
提示：

链表中节点的数目在范围 [0, 100] 内
0 <= Node.val <= 100

https://leetcode.cn/problems/swap-nodes-in-pairs/description/
*/

function swapPairs(head) {
  if (!head || !head.next) {
    return head;
  }

  const next = head.next;
  head.next = swapPairs(next.next);
  next.next = head;
  return next;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function generateList(arr) {
  const head = new ListNode();
  let cur = head;

  arr.forEach((item) => {
    const node = new ListNode(item);
    cur.next = node;
    cur = cur.next;
  });

  return head.next;
}
