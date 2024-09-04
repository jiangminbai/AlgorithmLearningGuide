function last(arr) {
  const item = arr?.[arr.length - 1]
  return item?.[0]
}
function getSum (str) {
  const nreg = /[0-9]/
  const arr = []
  for (let i=0; i<str.length; i++) {
    const item = str[i]
    if (nreg.test(item)) {
      if (last(arr) === '-') {
        arr[arr.length - 1].push(item)
      } else {
        arr.push([item])
      }
    } else if (item === '-') {
      if (arr[arr.length - 1][0] === '-' && (arr[arr.length - 1].length === 1 || i === str.length - 1)) {
        continue
      } else {
        arr.push([item])
      }
    }
  }
  console.log(arr)
  const n = arr.map(item => Number(item.join('')))
  return n.reduce((sum, item) => sum + item, 0)
}

const g = getSum('bb1234aa')
console.log(g)

const g1 = getSum('bb12-34aa')
console.log(g1)