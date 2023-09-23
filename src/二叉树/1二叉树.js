/**
 * 二叉树(binary tree): 
 */

/**
 * 二叉树的表示：属性p、left、right存放指向父节点、左孩纸、有孩纸的指针
 */

function BinaryTreeNode() {
  this.p = null
  this.left = null
  this.right = null
}

let rootNode = new BinaryTreeNode()
let node2 = new BinaryTreeNode()
let node3 = new BinaryTreeNode()
let node4 = new BinaryTreeNode()
let node5 = new BinaryTreeNode()

rootNode.left = node2
rootNode.right = node3
node2.p = rootNode
node3.p = rootNode

node2.left = node4
node2.right = node5
node4.p = node2
node5.p = node2