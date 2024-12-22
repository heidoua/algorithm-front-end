/*
206. 反转链表

给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 
示例 1：

输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
示例 2：

输入：head = [1,2]
输出：[2,1]
示例 3：

输入：head = []
输出：[]
 
提示：

链表中节点的数目范围是 [0, 5000]
-5000 <= Node.val <= 5000
 
进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？
*/
console.log(JSON.stringify(reverseList(generateList([1, 2, 3, 4, 5])))); // {"val":5,"next":{"val":4,"next":{"val":3,"next":{"val":2,"next":{"val":1,"next":null}}}}}
console.log(JSON.stringify(reverseList(generateList([1, 2])))); // {"val":2,"next":{"val":1,"next":null}}
console.log(JSON.stringify(reverseList(generateList([])))); // null

function reverseList(head) {
  if (!head || !head.next) {
    return head;
  }

  let pre = null;
  let cur = head;

  while (cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }

  return pre;
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
