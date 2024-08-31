function max (arr) {
  const maxCountList = arr.slice()
  for (let i=0; i< arr.length; i++) {
    const left = 2 * i + 1
    const right = 2 * i + 2
    if (arr[left] && arr[left] !== -1 && arr[i] !== -1) {
      maxCountList[left] = maxCountList[i] + maxCountList[left]
    }
    if (arr[right] && arr[right] !== -1 && arr[i] !== -1) {
      maxCountList[right] = maxCountList[i] + maxCountList[right]
    }
  }
  return Math.max(...maxCountList)
}

const m = max(
  [0, 9, 20, -1, -1, 15, 7, -1, -1, -1, -1, 3, 2]
)

console.log(m)

// 0 1 3 7