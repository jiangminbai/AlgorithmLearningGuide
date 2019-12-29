/**
 * 分治：不是一种解决特定问题的算法。在遇到已知任何算法都无法解决的问题时，可以使用分治策略
 * 分治策略的思路：
 * 1.找出基线条件，基线条件必须尽可能简单
 * 2.不断将问题分解或缩小规模，直到符合条件
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
