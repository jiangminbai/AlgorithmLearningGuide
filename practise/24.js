function least(arr) {
  const h = 8
  if (arr.length > 8) return -1
  const len = arr.length
  const diff = h - len
  return Math.max(...arr) / 2
}

const l = least([30, 12, 25, 8, 19])
console.log(l)