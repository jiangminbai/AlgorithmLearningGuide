/**
 * 二分查找示例
 * 
 * 适用场景：给定一个长度为n的有序列表，查找指定值的位置
 */

/**
 * 指定长度为n的有序数组
 * @param {number} n 定义有序数组的长度
 * @returns {Array} 返回长度为n的有序数组
 */
function data(n) {
  const arr = []
  for (let i = 0; i < n; i++) {
    arr.push(i + 1)
  }
  return arr
}

/**
 * 普通查找
 * @param {Array} n 有序数组
 * @param {number} v 要查找的值
 * @returns {number} 查找的次数
 */
function normalSearch(n, v) {
  let count = 0
  for (let i = 0; i < n.length; i++) {
    count++
    if (n[i] === v) break
  }
  return count
}

/**
 * 二分查找
 * @param {Array} n 有序数组
 * @param {number} v 要查找的值
 * @returns {number} 查找的次数
 */
function binarySearch(n, v) {
  let count = 0
  while(n.length > 0) {
    count++
    let middle = Math.round(n.length / 2) - 1 // 向下取整
    if (v > n[middle]) n = n.slice(middle + 1, n.length)
    else if (v < n[middle]) n = n.slice(0, middle - 1)
    else break
  }
  return count
}

/**
 * 场景：给定1-100的有序数组，查找数值100，比较普通查找和二分查找
*/
var arr1 = data(100)
var nc1 = normalSearch(arr1, 100)
var nc2 = binarySearch(arr1, 100)
console.log(
  `普通查找次数：${nc1}`,
  `二分查找次数：${nc2}`
)

/**
 * 场景：给定1-200的有序数组，查找数值200，比较普通查找和二分查找
*/
var arr1 = data(200)
var nc1 = normalSearch(arr1, 200)
var nc2 = binarySearch(arr1, 200)
console.log(
  `普通查找次数：${nc1}`,
  `二分查找次数：${nc2}`
)

/**
 * 场景：给定1-100000000的有序数组，查找数值100000000，比较普通查找和二分查找
*/
var arr1 = data(100000000)
var nc1 = normalSearch(arr1, 100000000)
var nc2 = binarySearch(arr1, 100000000)
console.log(
  `普通查找次数：${nc1}`,
  `二分查找次数：${nc2}`
)

/**
 * 普通查找和二分查找比较：
 * 普通查找从头到尾逐个开始查找，每次查找只能排除一个数值；而二分查找从中间位置开始查找，每次查找可以排除一半的数值，故二分查找查询速度非常快！
 * 普通查找时间复杂度O(n) 二分查找时间复杂度O(log n)
 * 当有序数组长度增加一倍时，普通查找的查找次数也同时增加一倍，而二分查找只增加一次
 * 普通查询可以适用于无序列表，而二分查找有效性的前提是有序列表
 */