function real (N) {
  const arr = String(N).split('').map(Number)

  let added = 0
  const len = arr.length
  for (let i=0; i<arr.length; i++) {
    const item = arr[i]
    // if (i > 0) {
      added += item * 9 ** (len - 1 - i)
    if (i === arr.length - 1) {
      if (item > 4) {
        added--
      }
    }
  }
  return added
}

const r = real(5)
console.log(r)
const r1 = real(17)
console.log(r1)
const r2 = real(100)
console.log(r2)