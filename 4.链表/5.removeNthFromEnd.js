/*
19. 删除链表的倒数第 N 个结点

给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

示例 1：

输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
示例 2：

输入：head = [1], n = 1
输出：[]
示例 3：

输入：head = [1,2], n = 1
输出：[1]
 
提示：

链表中结点的数目为 sz
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
 
进阶：你能尝试使用一趟扫描实现吗？

https://leetcode.cn/problems/remove-nth-node-from-end-of-list/description/
*/
const head1 = [1, 2, 3, 4, 5],
  n1 = 2;
const head2 = [1],
  n2 = 1;
const head3 = [1, 2],
  n3 = 1;

console.log(JSON.stringify(removeNthFromEnd(generateList(head1), n1))); // {"val":1,"next":{"val":2,"next":{"val":3,"next":{"val":5,"next":null}}}}
console.log(JSON.stringify(removeNthFromEnd(generateList(head2), n2))); // []
console.log(JSON.stringify(removeNthFromEnd(generateList(head3), n3))); // {"val":1,"next":null}

function removeNthFromEnd(head, n) {
  const dummy = new ListNode();
  dummy.next = head;

  let fast = dummy;
  let slow = dummy;

  while (fast && n != 0) {
    fast = fast.next;
    n--;
  }

  while (fast && fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;
  return dummy.next;
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
