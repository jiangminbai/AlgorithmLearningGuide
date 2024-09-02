function getSort(
  property = [],
  cases = []
) {
  const casesProperties = cases.map(item => {
    return item.reduce((all, i) => all + property[i - 1] , 0)
  }).map((item,index) => {
    return {
      seq: index + 1,
      num: item
    }
  })
  casesProperties.sort((a, b) => {
    if (a.num === b.num) {
      return a.seq - b.seq
    }
    return b.num - a.num
  })
  return casesProperties.map(item => item.seq)
}

const g = getSort(
  [1, 1, 2, 3, 5],
  [
    [1, 2, 3],
    [1, 4],
    [3, 4, 5],
    [2, 3, 4]
  ]
)
console.log(g)