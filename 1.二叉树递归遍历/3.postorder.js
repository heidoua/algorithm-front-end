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

postorder(root)

function postorder(root) {
  if (!root) return root

  postorder(root.left)
  postorder(root.right)
  console.log('当前遍历的节点值为：', root.val)
}