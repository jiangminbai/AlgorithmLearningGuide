function get (
  list,
  thread
) {
  const obj = {}
  for (let i=0; i < list.length; i++) {
    const item = list[i]
    if (!obj[item]) obj[item] = {}
    obj[item] += 1
  }
  const arr = []
  Object.keys(obj).forEach(key => {
    const o = {
      name: Number(key),
      count: obj[key]
    }
    arr.push(o)
  })
  arr.sort((a, b) => {
    if (a.count === b.count) {
      return a.name -b.name
    }
    return b.count - a.count
  })
  if (arr.length === 0) return 0
  return [
    arr.length,
    arr.map(item => item.name)
  ]
}

const g = get(
  [1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
  5
)
console.log(g)

const g1 = get(
  5,
  [1, 2, 3, 4, 5],
  3
)
console.log(g1)