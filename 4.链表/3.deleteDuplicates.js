/*
83. 删除排序链表中的重复元素

给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。
示例 1：
输入：head = [1,1,2]
输出：[1,2]

示例 2：
输入：head = [1,1,2,3,3]
输出：[1,2,3]

提示：
1. 链表中节点数目在范围 [0, 300] 内
2. -100 <= Node.val <= 100
3. 题目数据保证链表已经按升序 排列

https://leetcode.cn/problems/remove-duplicates-from-sorted-list/description/
*/

const l1 = generateList([1,1,2])
console.log(JSON.stringify(deleteDuplicates(l1))) // {"val":1,"next":{"val":2,"next":null}}

const l2 = generateList([1,1,2,3,3])
console.log(JSON.stringify(deleteDuplicates(l2))) // {"val":1,"next":{"val":2,"next":{"val":3,"next":null}}}

function deleteDuplicates(head) {
  let cur = head
  
  while (cur && cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }
  
  return head
}

function ListNode(val) {
  this.val = val
  this.next = null
}

function generateList(arr) {
  const head = new ListNode()
  let cur = head

  arr.forEach(item => {
    const node = new ListNode(item)
    cur.next = node
    cur = cur.next
  })

  return head.next
}
