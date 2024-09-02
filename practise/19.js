function hot (
  n,
  list,
  measures,
) {
  const m = []
  for (let i = 0; i < measures.length; i++) {
    const col = measures[i]
    const obj = {}
    for (let j = 0; j < col.length; j++) {
      if (j === 0) {
        obj.name = col[0]
        obj.score = 0
      } else {
        obj.score += col[j] * list[j - 1]
      }
    }
    m.push(obj)
  }
  m.sort((a, b) => {
    if (a.score === b.score) {
      if (a.name > b.name) return 1
      if (a.name < b.name) return -1
      return 0
    }
    return b.score - a.score
  })
  return m.map(item => item.name)
}

const h = hot(
  4,
  [8, 6, 2, 8, 6],
  [
    ['camila', 66, 70, 46, 158, 80],
    ['victoria', 94, 76, 86, 189, 211],
    ['anthony', 29, 17, 83, 21, 48],
    ['emily', 53, 97, 1, 19, 218]
  ]
)
console.log(h)

const h1 = hot(
  5,
  [5, 6, 6, 1, 2],
  [
    ['camila', 13, 88, 46, 26, 169],
    ['grace', 64, 38, 87, 23, 103],
    ['lucas', 97, 79, 98, 154, 79],
    ['leo', 29, 27, 36, 43, 178],
    ['ava', 29, 27, 36, 43, 178],
  ]
)
console.log(h1)