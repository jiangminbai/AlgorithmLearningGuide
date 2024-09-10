/**
 * 01背包问题：有n件物品和一个最多能背重量为w 的背包。
 * 第i件物品的重量是weight[i]，得到的价值是value[i] 。
 * 每件物品只能用一次，求解将哪些物品装入背包里物品价值总和最大。
 * 动态规划五部曲：
 * 1. 确定dp数组及下标i、j的含义
 * 2. 确定递推公式：dp[i][j] = ？
 * 3. dp数组如何初始化。因为递推是从二维数组的左上角得到右下角的值，所以需要初始化
 * 4. 确定遍历顺序
 * 5. 举例推导dp数组
 * 多重背包问题： 有N种物品和一个容量为V 的背包。
 * 第i种物品最多有Mi件可用，每件耗费的空间是Ci ，价值是Wi 。
 * 求解将哪些物品装入背包可使这些物品的耗费的空间 总和不超过背包容量，且价值总和最大。
 * 动态规划：
 * 按数量摊开
 * 完全背包问题：有N件物品和一个最多能背重量为W的背包。第i件物品的重量是weight[i]，得到的价值是value[i] 。
 * 每件物品都有无限个（也就是可以放入背包多次），求解将哪些物品装入背包里物品价值总和最大。
 * 动态规划：
 * 递推式一样，只是dp数组初始化不一样
**/

// 01背包
function bag (
  weights,
  values,
  volume
) {
  // 初始化
  const dp = Array.from({length: weights.length}, _ => new Array(volume + 1))
  for (let i = 0; i<weights.length; i++) {
    dp[i][0] = 0
  }
  for (let j = 0; j<=volume; j++) {
    dp[0][j] = values[0]
  }

  for (let i=0; i<weights.length; i++) {
    for (let j=0; j<=volume; j++) {
      dp[i][j] = typeof dp[i][j] !== 'number' ? Math.max((values[i] + dp[i-1][j-weights[i]]), dp[i-1][j]) : dp[i][j]
    }
  }
  return dp[weights.length - 1][volume]
}

const w = bag(
  [1, 3, 4,],
  [15, 20, 30],
  4
)
console.log(w)

// 多重背包
function MultiBag (
  weights,
  quantities,
  values,
  volume
) {
  let _weights = []
  let _values=[]

  quantities.forEach((item, index) => {
    _weights.push(...new Array(index).fill(weights[index]))
    _values.push(...new Array(index).fill(values[index]))
  })

  const dp = Array.from({length: _weights.length}, _ => new Array(volume))

  // 3. 初始化dp数组
  for (let i=0; i<_weights.length; i++) {
    dp[i][0] = 0
  }
  for (let j=1; j<volume; j++) {
    dp[0][j] = _values[0]
  }

  // 4.确定遍历顺序
  for (let i=0; i<weights.length; i++) {
    for (let j=0; j<volume; j++) {
      if (typeof dp[i][j] !== 'number') {
        if (j >= weights[i]) {
          dp[i][j] = Math.max(_values[i] + dp[i-1][j-weights[i]], dp[i-1][j])
        } else {
          dp[i][j] = dp[i-1][j]
        }
        
      }
    }
  }
  return dp[_weights.length - 1][volume - 1]
}

const m = MultiBag(
  [1, 3, 4],
  [2, 3, 2],
  [15, 20, 30],
  10
)
console.log(m)

// 完全背包
function completeBag(
  weights,
  values,
  volume
) {
  const dp = Array.from({length: weights.length}, _ => new Array(volume))

  // 3. 初始化dp数组
  for (let i=0; i<weights.length; i++) {
    dp[i][0] = 0
  }
  for (let j=1; j<volume; j++) {
    dp[0][j] = values[0] * j
  }

  // 4.确定遍历顺序
  for (let i=0; i<weights.length; i++) {
    for (let j=0; j<volume; j++) {
      if (typeof dp[i][j] !== 'number') {
        if (j >= weights[i]) {
          dp[i][j] = Math.max(values[i] + dp[i-1][j-weights[i]], dp[i-1][j])
        } else {
          dp[i][j] = dp[i-1][j]
        }
        
      }
    }
  }
  console.log(dp)
  return dp[weights.length - 1][volume - 1]
}

const c = completeBag(
  [1, 3, 4],
  [15, 20, 40],
  4
)
console.log(c)