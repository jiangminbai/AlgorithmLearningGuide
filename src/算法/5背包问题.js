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
 */

// 01背包
function bag (
  weights,
  values,
  container
) {
  // 初始化
  const dp = Array.from({length: weights.length}, _ => new Array(container + 1))
  for (let i = 0; i<weights.length; i++) {
    dp[i][0] = 0
  }
  for (let j = 0; j<=container; j++) {
    dp[0][j] = values[0]
  }

  for (let i=0; i<weights.length; i++) {
    for (let j=0; j<=container; j++) {
      dp[i][j] = typeof dp[i][j] !== 'number' ? Math.max((values[i] + dp[i-1][j-weights[i]]), dp[i-1][j]) : dp[i][j]
    }
  }
  return dp[weights.length - 1][container]
}

const w = bag(
  [1, 3, 4,],
  [15, 20, 30],
  4
)
console.log(w)