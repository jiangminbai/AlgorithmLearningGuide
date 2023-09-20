/**
 * 动态规划：将原问题分解为求解子问题，但会存在子问题重叠情况(即公共子子问题)，动态规划不会反复求解这些公共子子问题，而是将其保存起来
 * 思考步骤：
 * 1.刻画一个最优解结构特征
 * 2.递归定义一个最优解的值
 * 3.计算最优解的值，通常采用自底向上的方法
 * 4.利用计算出的信息构造一个最优解
 */


/**
 * 钢条切割问题
 * 问题：n为钢条长度;P(n) = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30],下标为钢条长度，值为对应的价格；
 * r(n)为长度为n，切割后的最大收益
 * 
 */

/**
 * 方案一
 * 递推式：r(n) = max( p(n), r(1) + r(n-1), r(2) + r(n-2), ..., r(n-1)+r(1) )
 */
const p = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30]

const cut1 = (n) => {
  if (n === 1) return p[1]

  // 1 -> n
  const max = [p[n]]
  for (let i = 1; i < n; i++) {
    max.push(cut1(i) + cut1(n-i))
  }
  return Math.max(...max)
}

console.log(cut1(9))

/**
 * 方案二：比方案一更简单，只对右边求解
 * 递推式：r(n) = max( p(1) + r(n-1), p(2) + r(n-2), ..., p(n) + r(0) )
 */
const cut2 = (n) => {
  if (n === 1 || n === 0) return p[n]

  const max = []
  for (let i = 1; i <= n; i++) {
    max.push(p[i] + cut2(n-i))
  }
  return Math.max(...max)
}

console.log(cut2(9))

/**
 * 方案一二的缺点：递归过程中形成了一颗递归调用树，它们反复地求解相同子问题，导致时间复杂性为2^n-1
 * 方案三：使用动态规划优化递归过程，将子问题的结果保存起来，用空间换取时间
 * 两种实现方式：自顶向下和自底向上，时间复杂度都为n^2
 */

/**
 * 自顶向下
 */
const cut3 = (n) => {
  const r = [0, 1]

  const cut3_aux = (n) => {
    if (n === 1 || n === 0) return p[n]

    const max = []
    for (let i = 1; i <= n; i++) {
      max.push(p[i] + r[n - i] || cut3_aux(n - i))
    }

    const max_val = Math.max(...max)
    r[n] = max_val
    return max_val
  }

  return cut3_aux(n)
}

console.log(cut3(9))

/**
 * 自底向上
 */
const cut4 = (n) => {
  const r = [0, 1]

  for (let i = 2; i <= n; i++) {
    const max = []
    for (let j = 1; j <= n; j++) {
      max.push(p[j] + r[i - j])
    }
    r[i] = Math.max(...max)
  }
  return r[n]
}