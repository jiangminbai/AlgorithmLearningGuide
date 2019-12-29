/**
 * 递归
 */

/**
 * 场景
 * 阶乘
 * @param {number} n 阶乘的最大数
 * @returns {number} 阶乘结果
 */
function factorial(n) {
  if (n <= 1) return n // 基线条件
  else return n * factorial(n - 1) // 递归条件
}

var r = factorial(5)
console.log(`5的阶乘: ${r}`)

var r = factorial(100)
console.log(`100的阶乘: ${r}`)

var r = factorial(10000)
console.log(`10000的阶乘: ${r}`)

/**
 * 递归函数使用函数调用栈(call stack)，每个调用一个函数就会为该函数及其相关变量分配一块内存并压入栈中，当调用完成，会将其弹出并删除
 * 递归的方式很简便，但是每个函数都会占用内存，如果占用内存过多会造成内存溢出
 */