function insert(arr, n) {
  let r
  let c
  for (let i = 0; i < arr.length; i++) {
    const nn = arr[i]
    if (nn > n) {
      r = i
      break
    }
  }
  if (r === undefined) {
    c = arr.length
  } else {
    c = r
  }
  return c + 1
}

const res = insert([93, 95, 97, 100, 102, 123, 155], 110)
console.log(res)