function gemsNum (arr, money) {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    let cost = 0
    let max = 0
    for (let j = i; j < arr.length; j++) {
      cost += arr[j]
      if (cost > money) {
        break
      } else {
        max++
      }
    }
    if (max > count) count = max
  }
  return count
}

const g = gemsNum([8, 4, 6, 3, 1, 6, 7], 10)
const g1 = gemsNum([1,1,1,1,1,1,1,1,1], 10)
console.log(g)
console.log(g1)