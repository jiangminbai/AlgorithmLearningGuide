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

// 常量
const RED = 'red'
const BLACK = 'black'

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

/**
 * 插入
 */
function RBInsert(T, z) {
  let y = T.nil // y表示z插入的父节点
  let x = T.root
  // 获取z的父节点
  while(x !== T.nil) {
    y = x
    if (z.key < x.key)
      y = x.left
    else
      y = x.right
  }
  // 设置z的父节点为y
  z.p = y
  // 设置父节点y的孩纸节点
  if (y === T.nil)
    T.root = z
  else if (z.key < y.key)
    y.left = z
  else
    y.right = z
  // 设置z的孩纸节点及颜色
  z.left = T.nil
  z.right = T.nil
  z.color = RED
  // 保持红黑树的性质
  RBInsertFixup(T, z)
}

/**
 * 保持红黑树的性质
 */
function RBInsertFixup(T, z) {
  // z和z.p都为红色节点
  while(z.p.color === RED) {
    // 如果z的父节点是祖父节点的左孩纸
    if (z.p === z.p.p.left) {
      // 获取z的祖父节点的右孩纸
      let y = z.p.p.right
      // 1.如果叔父节点为红色(可以确定的是：z为红色，z的父节点为红色，z的祖父节点为黑色，z的叔父节点为红色)
      // 开始变色
      if (y.color === RED) {
        z.p.color = BLACK
        z.p.p.color = RED
        y.color = BLACK
        z = z.p.p
      // 2.如果z是父节点的右孩纸(可以确定的是：z为红色，z的父节点为红色，z的祖父节点为黑色，z的叔父节点为黑色)
      // 开始左旋转
      } else if (z === z.p.right) {
        z = z.p
        leftRotate(T, z)
      // 3.如果z是父节点的左孩纸(可以确定的是：z为红色，z的父节点为红色，z的祖父节点为黑色，z的叔父节点为黑色)
      // 开始变色和右旋转
      } else {
        z.p.color = BLACK
        z.p.p.color = RED
        rightRotate(T, z.p.p)
      }
    } else {
      let y = z.p.p.left
      if (y.color === RED) {
        z.p.color = BLACK
        z.p.p.color = RED
        y.color = BLACK
        z = z.p.p
      } else if (z === z.p.right) {
        z = z.p
        leftRotate(T, z)
      } else {
        z.p.color = BLACK
        z.p.p.color = RED
        rightRotate(T, z.p.p)
      }
    }
  }
  T.root.color = BLACK
}

