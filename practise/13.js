function getPrices (prices) {
  const p = prices.slice(0)
  for (let i = 0; i < prices.length; i++) {
    let j = i;
    let len = 0
    while (len < prices.length) {
      const jj = j + len >= prices.length ? j + len - prices.length : j + len
      if (prices[i] > prices[jj]) {
        p[i] = prices[i] + prices[jj]
        break
      }
      len++
    }
  }
  return p
}

const p = getPrices([3, 14, 15, 6, 5])
console.log(p)