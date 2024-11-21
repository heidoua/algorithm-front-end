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

inorder(root)

function inorder(root) {
  if (!root) return root

  inorder(root.left)
  console.log('当前遍历的节点值为：', root.val)
  inorder(root.right)
}