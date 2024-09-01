const getCell = (x, max) => {
  if (x >= max) return '*'
  return x + 1
}
function getArr (n, m) {
  const c = Math.ceil(n/m) // 列

  const arr = new Array(m).fill().map(_ => ([]))
  let i = 0;
  let left = 0;
  let right = c - 1
  let top = 0;
  let bottom = m - 1
  while (i < m * c) {
    // 左 -> 右
    for (let k = left; k <= right; k++) {
      arr[top][k] = getCell(i, n)
      i++
    }
    top++
    if (i === m * c) break;
    for (let k = top; k <= bottom; k++) {
      arr[k][right] = getCell(i, n)
      i++
    }
    right--
    if (i === m * c) break;
    for (let k = right; k >= left; k--) {
      arr[bottom][k] = getCell(i, n)
      i++
    }
    bottom--
    if (i === m * c) break;
    for (let k = bottom; k >= top; k--) {
      arr[k][left] = getCell(i, n)
      i++
    }
    left++
  }
  return arr
}

const g = getArr(9, 4)
console.log(g)

const g1 = getArr(3, 5)
console.log(g1)

const g3 = getArr(120, 7)
console.log(g3)