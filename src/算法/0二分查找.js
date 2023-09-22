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
 * 普通查找和二分查找比较
+--------------------------+--------------------------+----------------------------+
|                          | 普通查找                 | 二分查找                   |
+--------------------------+--------------------------+----------------------------+
| 查找方式                 | 从头到尾逐个开始查找     | 从中间位置开始查找         |
|                          | 每次查找只能排除一个数值 | 每次查找可以排除一半的数值 |
+--------------------------+--------------------------+----------------------------+
| 时间复杂度               | O(n)                     | O(log n)                   |
+--------------------------+--------------------------+----------------------------+
| 当有序数组长度增加一倍时 | 查找次数也同时增加一倍   | 二分查找只增加一次         |
+--------------------------+--------------------------+----------------------------+
| 适用性                   | 也适用于无序列表         | 有序列表是前提             |
+--------------------------+--------------------------+----------------------------+
 */
/**
 * the difference of normal search and binary search
+--------------------------+------------------------------------+----------------------------------------+
|                          | normal search                      | binary search                          |
+--------------------------+------------------------------------+----------------------------------------+
| the way of search        | search form head to footer,        | can search from middle,                |
|                          | so only except one value each time | so can except half value each time     |
+--------------------------+------------------------------------+----------------------------------------+
| time complexity          | O(n)                               | O(log n)                               |
+--------------------------+------------------------------------+----------------------------------------+
| when array length double | the count of search time double    | the count of search time increase once |
+--------------------------+------------------------------------+----------------------------------------+
 */