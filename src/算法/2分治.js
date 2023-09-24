/**
 * 分治：不是一种解决特定问题的算法。在遇到已知任何算法都无法解决的问题时，可以使用分治策略
 * 分治策略的思路：
 * 1.找出基线条件，基线条件必须尽可能简单
 * 2.不断将问题分解或缩小规模，直到符合条件
 * 每层递归思考的三个步骤：
 * 1.分解：将原问题分解成一些子问题，这些子问题的形式与原问题一样
 * 2.解决：如果子问题足够小，递归触底，则直接解决这个子问题
 * 3.合并：将子问题的解组合成原问题的解
 */

/**
 * 场景
 * 欧几里得算法：求两个正整数的最大公约数
 * 欧几里得公式：gcd(a, b) = gcd(b, a % b), gcd(a, 0) = a
 * 将除数和余数反复做除法计算，直到余数为0，此时除数为最大公约数
 * @param {number} a 正整数a 被除数
 * @param {number} b 正整数b 除数
 * @returns {number} 最大公约数
 */
function gcd(a, b) {
  if (b === 0) return a // 基线条件
  return gcd(b, a % b) // 递归条件
}

var g = gcd(9, 3)
console.log(`最大公约数：${g}`)

var g = gcd(193000, 75463)
console.log(`最大公约数：${g}`)

/**
 * 最大子数组问题：求一个数组中连续子数组之和最大的
 * 思考过程：
 * 1.分解：求解[low, high]最大子数组A[i, j]=>分解[low, mid] [mid+1, hight]
 * 子数组必然位于[low, mid]或[mid+1, high]或者跨越中点所有子数组中和最大者
 * 所以原问题[low, high]分解为更小规模的子问题[low, mid]和[mid+1, high]，而跨越中点的情况可以通过线性时间解出
 * 2.合并：每一层递归中，都需要判断最大子数组存在于[low, mid]中还是[mid+1, high]中，还是跨越中点中
 * 递归式：
 * 当n=1;T(n)=1;
 * 当n>1;T(n)=2T(n/2)+O(n) 递归树高度为lgn 时间复杂性为nlgn
 */
const arr = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7]

// 求解跨越中点时的最大子数组
const findCrossMaxSubArr = (a, low, mid, high) => {
  let leftSum = -Infinity
  let maxLeft
  let sum1 = 0
  for (let i = mid; i >=low; i--) {
    sum1 += a[i]
    if (sum1 >= leftSum) {
      leftSum = sum1
      maxLeft = i
    }
  }

  let rightSum = -Infinity
  let maxRight
  let sum2 = 0
  for (let j = mid + 1; j <= high; j++) {
    sum2 += a[j]
    if (sum2 >= rightSum) {
      rightSum = sum2
      maxRight = j
    }
  }

  return [
    maxLeft,
    maxRight,
    leftSum + rightSum,
  ]
}

const findMaxSubArr = (a, low, high) => {
  if (high === low) {
    return [
      low,
      high,
      a[low]
    ]
  } else {
    const mid = Math.floor((high + low)/2)
    const [leftLow, leftHigh, leftSum] = findMaxSubArr(a, low, mid)
    const [rightLow, rightHigh, rightSum] = findMaxSubArr(a, mid + 1, high)
    const [crossLow, crossHigh, crossSum] = findCrossMaxSubArr(a, low, mid, high)

    if (leftSum >= rightSum && leftSum >= crossSum) {
      return [leftLow, leftHigh, leftSum]
    } else if (rightSum >= leftSum && rightSum >= crossSum) {
      return [rightLow, rightHigh, rightSum]
    } else {
      return [crossLow, crossHigh, crossSum]
    }
  }
}

console.log('最大子数组：' + findMaxSubArr(arr, 0, arr.length - 1))

/**
 * 矩阵乘法Strassen算法
 * 矩阵乘法定义：若矩阵A=a(i,j),B=b(i,j);i,j=1,2,..,n;矩阵乘积C=A*B,元素c(i,j)=∑a(i,k)*b(k,j),k=1->n
 */
const A = [
  [1, 2],
  [3, 4]
]
const B = [
  [4, 5],
  [3, 5]
]

/**
 * 根据矩阵乘法定义的算法
 */
const maxtrix1 = (A, B) => {
  const n = A.length
  const C = []
  for (let i = 0; i < n; i++) {
    const c = []
    for (let j = 0; j < n; j++) {
      let sum = 0
      for (let k = 0; k < n; k++) {
        sum += A[i][k]*B[k][j]
      }
      c.push(sum)
    }
    C.push(c)
  }
  return C
}
console.log(maxtrix1(A, B))

/**
 * 
 */