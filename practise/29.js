function createNode(num, h) {
  return {
    val: num,
    height: h
  }
}
function travel (node, num) {
  if (num < node.val - 500) {
    if (node.left) {
      travel(node.left, num)
    } else {
      node.left = createNode(num, node.height + 1)
    }
  } else if (num > node.val + 500) {
    if (node.right) {
      travel(node.right, num)
    } else {
      node.right = createNode(num, node.height + 1)
    }
  } else {
    if (node.middle) {
      travel(node.middle, num)
    } else {
      node.middle = createNode(num, node.height + 1)
    }
  }
  return node
}
function treeHeight (arr) {
  let tree
  for (let i=0; i<arr.length; i++) {
    const item = arr[i]
    if (i === 0) {
      tree = createNode(item, 1)
    } else {
      tree = travel(tree, arr[i])
    }
  }
  return tree
}

const t = treeHeight([5000, 2000, 5000, 8000, 1800])
console.log(t)

const t1 = treeHeight([5000, 4000, 3000])
console.log(t1)