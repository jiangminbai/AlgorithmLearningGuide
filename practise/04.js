/**
 * 哈夫曼生成算法
 * 1. 从小到大排序
 * 2. 最小两个合并 回到1循环直至数组为一个
 * 前序后序中序：依据是根节点放在前面 后面 中间 
 */

function hafuman (arr) {
  arr = arr.map(item => ({value: item, height: 0}))
  if (arr.length === 0 || arr.length === 1) return arr;

  while (arr.length > 1) {
    arr.sort((a, b) => {
      if (a.value === b.value) {
        return a.height - b.height // 左树高度小于右树高度
      } else {
        return a.value - b.value
      }
    })

    const top = {
      value: arr[0].value + arr[1].value,
      left: arr[0],
      right: arr[1],
      height: Math.max(arr[0].height, arr[1].height) + 1
    }
    arr.shift()
    arr.shift()
    arr.unshift(top)
  }
  console.log(arr[0])
  
  // 中序遍历
  function travel (obj, data = []) {
    if (obj.left) {
      travel(obj.left, data)
    }
    if (obj.value) {
      data.push(obj.value)
    }
    if (obj.right) {
      travel(obj.right, data)
    }
    return data
  }

  return travel(arr[0])
}

const h = hafuman([5, 15, 40, 30, 10])
console.log(h)

