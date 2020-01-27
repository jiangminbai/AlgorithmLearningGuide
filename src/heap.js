/**
 * 堆(heap)
 * 堆的定义：堆可以被看成近似一个完全二叉树的数组。树上的每一个结点对应数组的一个元素。除了最底层外，该树是完全充满的，而且是从左到右填充。
 * 堆的分类：堆的每个节点值不大于父节点的值，那么此堆为最小堆；反之，堆的每个节点不小于父节点的值，那么此堆称为最大堆
 * 堆的性质：
 * 1.root = 1
 * 2.value(i) = x[i]
 * 3.leftChild(i) = 2 * i
 * 4.rightChild(i) = 2 * i + 1
 * 5.parent(i) = i / 2 (i/2的向下取整)
 */

/**
 * 堆的实现：构造二叉堆，实为二叉树的一种。通过数组构造，从下标1开始，浪费掉x[0]
 * 构造一个12元堆
 */
const heap = [undefined, 12, 20, 15, 29, 23, 17, 22, 35, 40, 26, 51, 19]

/**
 * 堆性质的维护
 */
const heap1 = [undefined, 12, 20, 15, 29, 23, 17, 22, 35, 40, 26, 51, 19, 13]
/**
 * 向上筛选策略
 * @param {array} heap 需要维护堆性质的数组
 * @param {number} n 破坏堆性质的数组下标
 */
function siftup(heap, n) {
  while(n !== 1 && heap[n] < heap[Math.floor(n / 2)]) {
    let parent = Math.floor(n / 2)
    let tmp = heap[n]
    heap[n] = heap[parent]
    heap[parent] = tmp
    n = parent
  }
}

siftup(heap1, 13)
console.log(heap1)

const heap2 = [undefined, 18, 20, 15, 29, 23, 17, 22, 35, 40, 26, 51, 19]
/**
 * 向下筛选策略
 * @param {array} heap 需要维护堆性质的数组
 * @param {number} n 破坏堆性质的数组下标
 */
function siftdown(heap, n) {
  while(heap[n] && heap[2 * n] && heap[2 * n + 1] && (heap[n] > heap[2 * n] || heap[n] > heap[2 * n + 1])) {
    let child
    if (heap[2 * n] && heap[n] > heap[2 * n]) {
      child = 2 * n
    } else if (heap[2 * n + 1] && heap[n] > heap[2 * n + 1]) {
      child = 2 * n + 1
    }
    let tmp = heap[n]
    heap[n] = heap[child]
    heap[child] = tmp
    n = child
  }
}

siftdown(heap2, 1)
console.log(heap2)

/**
 * 优先级队列
 */
