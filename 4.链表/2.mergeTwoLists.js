/*
21. 合并两个有序链表

将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

示例 1：
输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]

示例 2：
输入：l1 = [], l2 = []
输出：[]

示例 3：
输入：l1 = [], l2 = [0]
输出：[0]

提示：
1. 两个链表的节点数目范围是 [0, 50]
2. -100 <= Node.val <= 100
3. l1 和 l2 均按 非递减顺序 排列
*/
const l1 = generateList([1,2,4])
const l2 = generateList([1,3,4])
console.log(JSON.stringify(mergeTwoLists(l1, l2))) // {"val":1,"next":{"val":1,"next":{"val":2,"next":{"val":3,"next":{"val":4,"next":{"val":4,"next":null}}}}}}

const l3 = generateList([])
const l4 = generateList([])
console.log( mergeTwoLists(l3, l4)) // []

const l5 = generateList([])
const l6 = generateList([0])
console.log( mergeTwoLists(l5, l6)) // { val: 0, next: null }

function mergeTwoLists(l1, l2) {
  let head = new ListNode()
  let cur = head

  while(l1 && l2) {
      if(l1.val<=l2.val) {
          cur.next = l1
          l1 = l1.next
      } else {
          cur.next = l2
          l2 = l2.next
      }
      cur = cur.next 

  }
  
  cur.next = l1!==null?l1:l2
  return head.next
}

function ListNode(val) {
  this.val = val
  this.next = null
}

function generateList(arr) {
  const head = new ListNode()
  let cur = head

  for (let i = 0, len = arr.length; i < len; i++) {
    const node = new ListNode(arr[i])
    cur.next = node
    cur = cur.next
  }

  return head.next
}