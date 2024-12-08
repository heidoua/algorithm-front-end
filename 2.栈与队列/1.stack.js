// 栈 先进后出

const stack = []
// 入栈
stack.push(1)
stack.push(2)
stack.push(3)

// 出栈
while (stack.length) {
  // 栈顶元素
  const top = stack[stack.length - 1]

  // 当前出栈元素
  const item = stack.pop()

  console.log(top, item)
  /*
  3 3
  2 2
  1 1
  */
}

console.log(stack) // []