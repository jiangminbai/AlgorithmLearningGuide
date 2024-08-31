function getCount(n, p) {

  let s = [...n]
  let pos = 0
  while (pos < s.length) {
    const pos1 = s[pos]
    for (let i=0; i<p.length;i++) {
      if (p[i][pos1] && !s.includes(i)) s.push(i)
    }
    for (let i=0; i<p[pos1].length;i++) {
      if (p[pos1][i] && !s.includes(i)) s.push(i)
    }
    pos++
  }
  
  return s.length - n.length
}

const c = getCount(
  [1, 2],
  [
    [1,1,0,1,0],
    [1,1,0,0,0],
    [0,0,1,0,1],
    [1,0,0,1,0],
    [0,0,1,0,1],
  ]
)

console.log(c)