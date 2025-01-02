/*
1. 创建一个节点为 1、2 的链表
2. 把节点 3 插入到刚创建的链表中间
3. 删除刚插入的节点 3
4. 查找节点值为 2 的节点
5. 查找第二个节点的值
*/

function ListNode(val) {
  this.val = val
  this.next = null
}

// 创建一个节点为 1、2 的链表
const node1 = new ListNode(1)
node1.next = new ListNode(2)

console.log(node1) // { val: 1, next: ListNode { val: 2, next: null } }


const node3 = new ListNode(3)

node3.next = node1.next
//把节点 3 插入到刚创建的链表中间
node1.next = node3

console.log(node1) // { val: 1, next: ListNode { val: 3, next: ListNode { val: 2, next: null } }}

// 删除刚插入的节点 3
// 删除操作的重点的是定位目标节点的前驱节点
node1.next = node3.next

console.log(node1) // { val: 1, next: ListNode { val: 2, next: null } }

// 查找节点值为 2 的节点
let cur = node1

while (cur) {
  if (cur.val === 2) {
    console.log(cur.val)
  }
  
  cur = cur.next
}

// 查找第二个节点的值
cur = node1

let index = 2

for (let i = 1; i < 3 && cur; i++) {
  if (i === 2) {
    console.log(cur.val)
  }
  cur = cur.next
}

/*
链表和数组的区别：
1. 数组增加 / 删除操作对应的复杂度就是 O(n)；链表添加和删除元素都不需要挪动多余的元素，对应的时间复杂度为 O(1)。
2. 在数组中访问某个元素时间复杂度为 O(1)；在链表中访问某个元素的时间复杂度为 O(n)。
*/