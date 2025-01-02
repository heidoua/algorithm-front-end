// 队列 先进先出

const queue = []

// 入队
queue.push(1)
queue.push(2)
queue.push(3)

// 出队
while (queue.length) {
  const top = queue[0] // 队首元素
  const item = queue.shift() // 队首元素出队

  console.log(top, item)
  /*
  1 1
  2 2
  3 3
  */
}

console.log(queue) // []