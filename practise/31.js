function money (
  ms,
  list
) {
  const map = {}
  for (let i=0; i<list.length; i++) {
    const item = list[i]
    const [a, b] = item
    if (!map[a]) {
      map[a] = []
    }
    map[a].push(b)
  }

  const moneys = []
  for (let key in map) {
    const val = map[key]
    moneys.push(val.reduce((all, item) => all + ms[item-1], 0) + ms[Number(key)-1])
  }
  return Math.max(...moneys)
}

const m = money(
  [100, 200, 300, 500],
  [
    [1,2],
    [1,3],
    [2,4]
  ]
)
console.log(m)

const m1 = money(
  [100, 200, 300, 500],
  [
    [1,2],
    [1,3],
    [1,4]
  ]
)
console.log(m1)