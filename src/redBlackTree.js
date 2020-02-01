/**
 * 红黑树
 * 红黑树的性质：
 * 1.每个节点或是红色，或是黑色
 * 2.根节点是黑色
 * 3.每个叶节点(NIL)是黑色
 * 4.如果一个节点是红色，则它的两个子节点都是黑色
 * 5.对每个节点，从该节点到其所有后代叶节点的简单路径上，均包含相同数目的黑色节点
 * 定理1：一棵有n个内部节点的红黑树的高度至多为2log(n+1)
 */

/**
 * 左旋转
 */
function leftRotate(T, x) {
  let y = x.right
  // 将y的左子树变为x的右子树
  x.right = y.left
  if (y.left) y.left.p = x
  // 将x的父节点变为y的父节点
  y.p = x.p
  if (x.p === T.nil) {
    T.root = y
  } else if (x === x.p.left) {
    x.p.left = y
  } else {
    x.p.right = y
  }
  // 将x的父节点变为y
  y.left = x
  x.p = y
}

/**
 * 右旋转
 */
function rightRotate(T, y) {
  let x = y.left
  // 将x的右子树变为y的左子树
  y.left = x.right
  if (x.right) x.right.p = y
  // 将y的父节点变为x的父节点
  x.p = y.p
  if (y.p === T.nil) {
    T.root = y
  } else if (y.p.left = y) {
    y.p.left = x
  } else {
    y.p.right = x
  }
  // 将y的父节点变为x
  y.p = x
  x.right = y
}

