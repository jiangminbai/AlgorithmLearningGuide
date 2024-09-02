function getQ ([a, b]) {
  let res = [[a, b - 1], [a+1, b], [a, b+1], [a-1, b]]
  res = res.filter((item) => {
    const [x, y] = item
    return x>=0 && x <=18 && y>= 0 && y<=18
  })
  return res
}
function get(
  black,
  white,
) {
  black = black.map(item => [item[1], item[0]])
  let blackQ = []
  for (let i=0; i<black.length; i++) {
    blackQ.push(...getQ(black[i]))
  }
  console.log(blackQ)
  // // 去重
  const blackQStr = blackQ.map(item => `${item[0]},${item[1]}`)
  const blackQStrMap = {}
  let blackQCopy = []
  for (let i=0; i<blackQStr.length; i++) {
    const b = blackQStr[i]
    if (!blackQStrMap[b]) {
      blackQStrMap[b] = 1
      blackQCopy.push(b)
    }
  }
  console.log(blackQCopy)
  blackQCopy = blackQCopy.map(item => item.split(',').map(Number))
  const realBlackQ = []
  for (let i=0; i<blackQCopy.length;i++) {
    const all = [...black, ...white]
    let flag = false
    for (let j=0; j<all.length; j++) {
      if (blackQCopy[i][0] === all[j][0] && blackQCopy[i][1] === all[j][1]) {
        flag = true
        break
      }
    }
    if (!flag) {
      realBlackQ.push(blackQCopy[i])
    }
  }
  return realBlackQ.length
}

const g = get(
  [
    [0, 5],
    [8, 9],
    [9, 10]
  ],
  [
    [5, 0],
    [9, 9],
    [9, 8],
  ]
)

console.log(g)