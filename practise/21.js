const getLeft = (x, len) => {
  if (x >= 0) return x
  return len - 1
}
const getRight = (x, len) => {
  if (x <= len - 1) return x
  return 0
}
function get (N, list) {
  let len = list.length
  let max = 0
  for (let i=0; i<len; i++) {
    let num = 0
    let left = getLeft(i - 1, len)
    let right = getRight(i+1, len)
    let k = 0
    num += list[i]
    k++
    while (k < list.length) {
      if (list[left] >= list[right]) {
        left = getLeft(left - 1, len)
      } else {
        right = getRight(right +1, len)
      }
      k++
      if (k >= list.length) break;

      if (list[left] >= list[right]) {
        num += list[left]
        left = getLeft(left - 1, len)
      } else {
        num += list[right]
        right = getRight(right +1, len)
      }
      k++
    }
    if (num > max) {
      max = num
    }
  }
  return max
}

const g = get(
  5,
  [8, 2, 10, 5, 7]
)
console.log(g)

