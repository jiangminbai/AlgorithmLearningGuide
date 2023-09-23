/**
 * 二叉搜索树
 * 性质：
 * 是一颗二叉树组织的
 * 树节点的左子树上所有节点的值均小于根节点的值
 * 树节点的右子树上所有节点的值均大于根节点的值
 */

// 对于关键字集合{1, 4, 5, 10, 16, 17, 21}
// 构建高度为2的二叉搜索树
//       10
//     /   \
//   4       17
// /   \   /   \
// 1   5 16    21

function createNode(value) {
  return {
    left: null,
    right: null,
    p: null,
    key: value
  }
}

function createLeftNode(parent, value) {
  let leftChild =  {
    left: null,
    right: null,
    p: parent,
    key: value
  }
  parent.left = leftChild
  return leftChild
}

function createRightNode(parent, value) {
  let rightChild = {
    left: null,
    right: null,
    p: parent,
    key: value
  }
  parent.right = rightChild
  return rightChild
}

let node10 = createNode(10)
let node4 = createLeftNode(node10, 4)
let node1 = createLeftNode(node4, 1)
let node5 = createRightNode(node4, 5)
let node17 = createRightNode(node10, 17)
let node16 = createLeftNode(node17, 16)
let node21 = createRightNode(node17, 21)
let T = node10

// console.log(T)

/**
 * 中序遍历(inorder tree walk)
 * 输出的子树根关键字位于其左右子树关键字之间
 * 遍历顺序：左子树->根节点->右子树
 */
function inorderTreeWalk(node) {
  if (node === null) return
  inorderTreeWalk(node.left)
  console.log(node.key)
  inorderTreeWalk(node.right)
}
inorderTreeWalk(T)

/**
 * 先序遍历(preorder tree walk)
 * 输出的子树根位于其左右子树关键字之前
 * 遍历顺序：根节点->左子树->右子树
 */

function preorderTreeWalk(node) {
  if (node === null) return
  console.log(node.key)
  preorderTreeWalk(node.left)
  preorderTreeWalk(node.right)
}
preorderTreeWalk(T)

/**
 * 后序遍历(postorder tree walk)
 * 输出的子树根位于其左右子树关键字之后
 * 遍历顺序：左子树->右子树->根节点
 */

function postorderTreeWalk(node) {
  if (node === null) return
  postorderTreeWalk(node.left)
  postorderTreeWalk(node.right)
  console.log(node.key)
}
postorderTreeWalk(T)

/**
 * 查询二叉搜索树：常用于查找某个存在于二叉搜索树的关键字
 * 支持search\minimum\maximum\successor\predecessor等查询操作
 */

/**
 * search：查询指定关键字
 * 高度h
 */
function treeSearch(node, key) {
  if (node === null || node.key === key) return node
  if (key < node.key) return treeSearch(node.left, key)
  else return treeSearch(node.right, key)
}

// console.log(treeSearch(T, 10))

/**
 * minimum：查询最小关键字
 */
function treeMinimum(node) {
  while(node.left) {
    node = node.left
  }
  return node
}
// console.log(treeMinimum(T))

/**
 * maximum：查询最大关键字
 */
function treeMaximum(node) {
  while(node.right) {
    node = node.right
  }
  return node
}
// console.log(treeMaximum(T))

/**
 * successor：后继
 * 如果node节点的右子树非空，那么后继就是右子树的最左节点
 * 如果node节点的右子树为空，那么后继就是向上查询第一个有左孩纸的祖先节点
 */
function treeSuccessor(node) {
  if (!node.right) return treeMinimum(node)
  let p = node.p
  while(p && p.right === node) {
    node = p
    p = p.p
  }
  return p
}

/**
 * predecessor: 前驱
 */

// 时间复杂度
// +-----------------+--------+---------+---------+-----------+-------------+
// |                 | search | minimum | maximum | successor | predecessor |
// +-----------------+--------+---------+---------+-----------+-------------+
// | time complexity | O(h)   | O(h)    | O(h)    | O(h)      | O(h)        |
// +-----------------+--------+---------+---------+-----------+-------------+

/**
 * insert：插入
 */

function treeInsert(T, z) {
  let y = null
  let x = T
  // 从二叉搜索树根节点开始查询插入的节点
  while(x) {
    y = x
    if (z.key < x.key) {
      x  = x.left
    } else {
      x = x.right
    }
  }
  // 插入z节点到y节点上
  z.p = y
  if (y === null) {
    z = T
  } else if (z.key < y.key) {
    y.left = z
  } else {
    y.right = z
  }
}

const z = createNode(18)
treeInsert(T, z)
console.log(T)

/**
 * delete：删除
 */
function treeDelete() {

}
// 插入和删除的时间复杂度
// +-----------------+--------+--------+
// |                 | insert | delete |
// +-----------------+--------+--------+
// | time complexity | O(h)   | O(h)   |
// +-----------------+--------+--------+

/**
 * 随机构建二叉搜索树：对于一棵有n个不同关键字随机构建的二叉搜索树的期望高度为logn
 */