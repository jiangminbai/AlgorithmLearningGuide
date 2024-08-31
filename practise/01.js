function sort (h, n, hs) {
  for (let i = 0; i < hs.length - 1; i++) {
    for (let j = i + 1; j < hs.length; j++) {
      const h1 = hs[i]
      const h2 = hs[j]
      if (Math.abs(h - h1) > Math.abs(h - h2) || (Math.abs(h - h1) === Math.abs(h - h2) && h1 > h2)) {
        const temp = h1
        hs[i] = h2
        hs[j] = temp
      }
    }
  }
  return hs.join(' ')
}

const s = sort(100, 10, [95, 96, 97, 98, 99, 101, 102, 103, 104, 105])
console.log(s)