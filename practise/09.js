function getCount (list) {
  list = list.split('').map(item => Number(item))
  let count = 0
  for (let i = 0; i < list.length; i++) {
    let left = i - 1;
    let right = i + 1;
    if (
      (left < 0 || (left >= 0 && list[left] === 0))
      && (right > list.length || (right <= list.length && list[right] === 0))
      && list[i] === 0
    ) {
      list[i] = 1
      count++
    }
  }
  return count
}

const c = getCount('10001')
const c1 = getCount('0101')
console.log(c)
console.log(c1)