function minDifference(scores) {
  const totalSum = scores.reduce((a, b) => a + b, 0);
  const target = Math.floor(totalSum / 2);
  const dp = Array(target + 1).fill(false);
  dp[0] = true;

  for (let score of scores) {
      for (let j = score; j <= target; j++) {
          dp[j] = dp[j] || dp[j - score];
      }
  }

  let sum1 = 0;
  for (let j = target; j >= 0; j--) {
      if (dp[j]) {
          sum1 = j;
          break;
      }
  }

  const sum2 = totalSum - sum1;
  return Math.abs(sum2 - sum1);
}

// 示例
const scores = [5, 1, 8, 3, 4, 6, 7, 10, 9, 2];
const result = minDifference(scores);
console.log("两组的实力差绝对值为:", result);
