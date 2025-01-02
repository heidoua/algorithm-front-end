/*
82. 删除排序链表中的重复元素 II

给定一个已排序的链表的头 head ， 删除原始链表中所有重复数字的节点，只留下不同的数字 。返回 已排序的链表 。

示例 1：

输入：head = [1,2,3,3,4,4,5]
输出：[1,2,5]
示例 2：

输入：head = [1,1,1,2,3]
输出：[2,3]

提示：

链表中节点数目在范围 [0, 300] 内
-100 <= Node.val <= 100
题目数据保证链表已经按升序 排列

https://leetcode.cn/problems/remove-duplicates-from-sorted-list-ii/description/
 */

const l1 = generateList([1, 2, 3, 3, 4, 4, 5]);
const l2 = generateList([1, 1, 1, 2, 3]);

console.log(JSON.stringify(deleteDuplicates(l1))); // {"val":1,"next":{"val":2,"next":{"val":5,"next":null}}}
console.log(JSON.stringify(deleteDuplicates(l2))); // {"val":2,"next":{"val":3,"next":null}}

function deleteDuplicates(head) {
  const dummy = new ListNode(null);
  dummy.next = head;
  let cur = dummy;

  while (cur && cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      const val = cur.next.val;
      while (cur && cur.next && cur.next.val === val) {
        cur.next = cur.next.next;
      }
    } else {
      cur = cur.next;
    }
  }

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
