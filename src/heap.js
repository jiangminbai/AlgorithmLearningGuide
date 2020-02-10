/**
 * 堆(heap)
 * 堆的定义：堆可以被看成近似一个完全二叉树的数组。树上的每一个结点对应数组的一个元素。除了最底层外，该树是完全充满的，而且是从左到右填充。
 * 堆的分类：堆的每个节点值不大于父节点的值，那么此堆为最小堆；反之，堆的每个节点不小于父节点的值，那么此堆称为最大堆
 * 堆的性质：
 * 1.root(i) = 1
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
 * 维护最大堆的性质
 * @param {Array} A 二叉堆
 * @param {number} i 破坏堆性质的下标
 * 策略：通过让A[i]值在最大堆中‘逐级下降’
 * 算法步骤：
 * 1.比较i位置的值与左右孩纸的值的大小
 * 2.如果左右孩纸的值最大，则i与其中最大值互换位置，并返回1步骤
 * 3.如果i位置的值最大，则程序终止
 */
function maxHeapify(A, i) {
  let l = 2 * i
  let r = 2 * i + 1
  let largest = i
  if (l <= A.length - 1 && A[l] > A[i]) {
    largest = l
  }
  if (r <= A.length - 1 && A[r] > A[i]) {
    largest = r
  }
  if (largest !== i ) {
    let tmp = A[i]
    A[i] = A[largest]
    A[largest] = tmp
    maxHeapify(A, largest)
  }
}

/**
 * 建最大堆：将无序数组构造为最大堆
 * @param {array} A 堆数组
 * 策略：遍历Math.floor(size/2)->1位置,对每个值应用MaxHeapify函数
 * 时间复杂度：O(n)
 */
function buildMaxHeap(A) {
  let heapSize = A.length - 1
  for (let i = Math.floor(heapSize/2); i > 0; i--) {
    maxHeapify(A, i)
  }
}

/**
 * 堆排序算法
 * @param {array} A 堆数组
 * 算法步骤：
 * 1.建最大堆
 * 2.遍历heapSize -> 2, 交换A[1]和A[size]的值，并维护A[1]最大堆性质
 * 时间复杂度：O(nlgn)
 */
function heapSort(A) {
  buildMaxHeap(A)
  let heapSize = A.length - 1
  let heap = []
  for (let i = A.length - 1; i >= 2; i--) {
    heap.push(A[1])
    A[1] = A[heapSize]
    A.length = A.length - 1
    maxHeapify(A, 1)
  }
}

/**
 * 优先队列
 * 最大优先队列的应用场景：共享计算机系统的作业调度
 * 最小优先队列的应用场景：用于基于事件驱动的模拟器
 * 最大优先队列操作：
 * 1.Insert(S, k)：将元素k插入集合S中
 * 2.Maximum(S)：返回S中最大键值的元素
 * 3.ExtractMax(S): 去掉并返回S中最大键值的元素
 * 4.IncreaseKey(S, x, k)：将元素x的关键值增加到k
 */
class PriorityQueue {
  insert(A, x) {

  }

  /**
   * 时间复杂度：O(1)
   */
  maximum(A) {
    return A[1]
  }

  /**
   * 时间复杂度：O(lgn)
   */
  extractMax(A) {
    let heapSize = A.length - 1
    if (heapSize < 1) throw new Error('heap underflow')

    let max = A[1]
    A[1] = A[heapSize]
    A.length = A.length - 1
    maxHeapify(A, 1)
    return max
  }

  /**
   * 时间复杂度：O(lgn)
   */
  increaseKey(A, i, k) {
    if (A[i] > k) throw new Error('new key is smaller than current key')
    A[i] = k
    while(i >= 1 && A[i] > A[Math.floor(i/2)]) {
      let tmp = A[i]
      A[i] = A[Math.floor(i/2)]
      A[Math.floor(i/2)] = tmp
      i = math.floor(i/2)
    }
  }

  /**
   * 时间复杂度：O(lgn)
   */
  insert(S, k) {
    A[A.length] = 1
    this.increaseKey(S, A.length - 1, k)
  }
}