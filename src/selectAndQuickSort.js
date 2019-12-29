/**
 * 几种排序
 */

/**
 * 选择排序
 * @param {Array} r 需要排序的数组
 * @returns {Array} 排好序的数组
 */
function selectSort(r) {
  const sorted = []
  let len = r.length
  for (let i = 0; i < len; i++) { // 查找最大数值 需要找len次
    let max = 0
    for (let j = 0; j < r.length; j++) { // 内部遍历找到最大那个数值的索引
      max = r[j] >= r[max] ? j : max
    }
    sorted.unshift(r[max])
    r.splice(max, 1)
  }
  return sorted
}

/**
 * 快速排序
 * @param {Array} r 需要排序的数组
 * @returns {Array} 排好序的数组
 */
function quickSort(r) {
  if (r.length <= 1) return r
  else {
    let left = []
    let right = []
    let middle = r[0] // 基准值
    for (let i = 1; i < r.length; i++) {
      if (r[i] < middle) left.push(r[i])
      else right.push(r[i])
    }
    return [].concat(quickSort(left), middle, quickSort(right))
  }
}

var un = [5,20,1,230,50,60, 30]
var s = selectSort(un)
console.log(s)

var s = quickSort(un)
console.log(s)

/**
 * 选择排序和快速排序的区别
 * 选择排序的时间复杂度为O(n^2) 快速排序的时间复杂度为O(nlogn)
 */