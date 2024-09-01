function getCount (str) {
  const arr = str.split('')
  let x = 0
  let y = 0
  let count = 0

  let i = 0
  while (i < arr.length) {
    const item = arr[i]
    if (item === 'X') x++
    if (item === 'Y') y++
    if (x === y) count++
    i++
  }
  return count
}

const g =  getCount('XXYYXY')
console.log(g)