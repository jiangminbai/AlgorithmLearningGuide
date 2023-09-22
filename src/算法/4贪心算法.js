/**
 * 贪心算法
 * 总是做出局部最优解的选择，寄希望这样的选择能导致全局最优解，但并不能保证得到最优解，但对很多问题确实能找到最优解
 * 算法：一般都是采用自顶向下递归，而不是自底向上去求解多个子问题
 */

/**
 * 活动选择问题
 * 问题：
 * 1.有个活动集合：S(i) = [[1, 4], [3, 5], [0, 6], [5, 7], [3, 9], [5, 9], [6, 10], [8, 11], [8, 12], [2, 14], [12, 16]]
 * 子数组下标0 表示活动开始时间，下标1表示活动结束时间
 * 2.选出一个最大数量的活动兼容集，这个集合中的活动时间不能重叠
 * 思考步骤：
 * 1.将原问题分解为两个子问题，那么两个子问题的最优解就是原问题的最优解
 * 求解活动集S(i, j)的最大兼容集 => 求解S(i, k) + a(k) + S(k, j) => S(i, k) + 1 + S(k, j) 的最大兼容集
 * 2.得递归公式
 * 最优解c[i, j] = max(c[i, k] + c[k, j] + 1) (a(k)属于集合S(i, j))
 * 3.递归公式可用动态规划求解
 * 4.贪心选择--只选择一个子问题求解即贪心选择，这里我们选择活动结束最早的
 * 5.贪心递归算法
 * 6.贪心迭代算法
 */

const s = [1, 3, 0, 5, 3, 5, 6, 8, 8, 2, 12] // 活动开始时间
const f = [4, 5, 6, 7, 9, 9, 10, 11, 12, 14, 16] // 活动结束时间，按递增排序好的

/**
 * 递归贪心算法
 * k: 下标k表示贪心选择
 * n： 输入的活动数量
 */
// k: 0 -> n
const act1 = (k, n) => {
  let m = k+1 // m是k的下一个活动

  while (m <= n && s[m] <f[k]) {
    m = m + 1
  }

  if (m <= n) {
    return [k].concat(act1(m, n))
  } else {
    return [] // 栈顶
  }
}
console.log(act1(0, 11))

/**
 * 迭代贪心算法
 * 尾递归优化为迭代方式：栈的下一个元素依赖于上一个元素返回的并集
 */
const act2 = (s, f) => {
  let k = 0
  const n = s.length
  const A = [0]
  for (let m = k + 1; m <= n; m++) {
    if (s[m] >= f[k]) {
      k = m
      A.push(m)
    }
  }
  return A
}

console.log(act2(s,f))