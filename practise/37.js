function middle (arr) {
  const map = {}
  for (let i=0; i<arr.length; i++) {
    const item = arr[i]
    if (!map[item]) {
      map[item] = 0
    }
    map[item] += 1
  }
  const maxCount = Math.max(...Object.values(map))
  const zong = []
  for (let key in map) {
    if (map[key] === maxCount) zong.push(Number(key))
  }

  zong.sort((a, b) => a - b)

  const len = zong.length
  const isSingle = len % 2 === 1

  if (isSingle) {
    return zong[(len - 1) / 2]
  } else {
    return (zong[len / 2 - 1] + zong[len / 2]) / 2
  }
}

const m = middle(
  [10, 11, 21, 19, 21, 17, 21, 16, 21, 18, 15]
)

console.log(m)