function friends(graden) {
  const map = {}
  const arr = []
  for (let i = 0; i < graden.length; i++) {
    const f = graden[i]
    if (!map[f]) {
      map[f] = 1
      arr.push(f)
    }
  }
  return arr.length + arr.reduce((all, item) => all + item, 0)
}

const f = friends([2, 2, 3])
console.log(f)