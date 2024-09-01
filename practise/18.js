function get (n) {
  const arr = new Array(n).fill().map((item, index) => index + 1)
  let res = []

  for (let i = 0; i < arr.length; i++) {
    let k = i
    let num = 0
    const a = []
    // 向右
    while (k < arr.length - 1) {
      num += arr[k]
      a.push(arr[k])
      if (num === n) {
        res.push(a)
        break;
      } else if (num > n){
        break;
      }
      k++
    }
  }
  if (res.length === 0) return [n]
  res.sort((a, b) => a.length - b.length)

  return res[0]
}

const g = get(21)
console.log(g)