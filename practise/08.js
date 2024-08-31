function getList (
  [productCount, allMoney, risks],
  rs,
  riskList,
  maxMoneyList
) {
  const list = maxMoneyList.map((item,index) => ({
    p: item,
    risk: riskList[index],
    rs: rs[index]
  }))

  let all = []

  for (let i=0; i< list.length; i++) {
    all.push([list[i]]) // 单一产品
    for (let j=i; j< list.length; j++) {
      if (i === j) continue
      all.push([list[i], list[j]])
    }
  }

  let maxRs = 0
  all = all.filter(item => {
    const riskCount = item.map(i => i.risk).reduce((a, b) => a+b, 0)
    if (riskCount > risks ) return false

    const moneyCount = item.map(i => i.p).reduce((a, b) => a+b, 0)
    if (moneyCount > allMoney) return false

    const rsCount = item.map(i => i.rs).reduce((a, b) => a+b, 0)

    if (rsCount > maxRs) {
      maxRs = rsCount
      return true
    } else {
      return false
    }
  })

  return all[all.length - 1]
}

const g = getList(
  [5, 100, 10],
  [10, 20, 30, 40, 50],
  [3, 4, 5, 6, 10],
  [20, 30, 20, 40, 30]
)

console.log(g)