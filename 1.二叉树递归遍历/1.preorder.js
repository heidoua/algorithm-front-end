const root = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D"
    },
    right: {
      val: "E"
    }
  },
  right: {
    val: "C",
    right: {
      val: "F"
    }
  }
};

preorder(root)

function preorder(root) {
  if (!root) return root

  console.log('当前遍历的节点值为：', root.val)

  preorder(root.left)
  preorder(root.right)
}