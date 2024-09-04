const BIG = 3
const MIDDLE = 2
const SMALL = 1
function carsNum (list) {
  let arr = [[]]
  for (let i=0; i<list.length; i++) {
    const item = list[i]
    if (item) {
      arr[arr.length - 1].push(item)
    } else {
      arr.push([])
    }
  }
  arr = arr.filter(item => item.length).map(item => item.length)
  let count = 0
  console.log(arr)
  for (let i=0; i<arr.length; i++) {
    const item = arr[i]
    const a = Math.floor(item / BIG)
    count += a
    const a_rest = item % BIG
    if (a_rest) {
      const b = Math.floor(a_rest / MIDDLE)
      count += b
      const b_rest = a_rest % MIDDLE

      if (b_rest) count++
    }
  }
  return count
}

const c = carsNum([1, 0, 1])
console.log(c)
const c1 = carsNum([1, 1, 0, 0, 1, 1, 1, 0, 1])
console.log(c1)