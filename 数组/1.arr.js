const arr = [1, 2, 3]

// 向数组头部添加一个 0
const len1 = arr.unshift(0) // 返回数组新长度
console.log(arr, len1) // [ 0, 1, 2, 3 ] 4

// 向数组尾部添加一个元素4
const len2 = arr.push(4) // 返回数组新长度
console.log(arr, len2) // [ 0, 1, 2, 3, 4 ] 5

// 从数组头部删除元素 0
const item1 = arr.shift() // 返回删除的元素
console.log(arr, item1) // [ 1, 2, 3, 4 ] 0

// 从数组尾部删除元素 4
const item2 = arr.pop() // 返回删除的元素
console.log(arr, item2) // [ 1, 2, 3 ] 4

// 删除数组中索引 1 的元素
const res1 = arr.splice(1, 1) // 返回被删除元素的数组
console.log(arr, res1) // [ 1, 3 ] [ 2 ]

// 向数组索引 1 的位置插入元素 2
const res2 = arr.splice(1, 0, 2) // 返回空数组
console.log(arr, res2) // [ 1, 2, 3 ] []
