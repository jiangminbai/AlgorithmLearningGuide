function gray (
  [col, row, ...rest]
) {
  const arr = Array.from({length: col}, () => new Array(row).fill())
  // let k = 0; // 灰度索引
  
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j=0; j< arr[0].length; j++) {

  //   }
  // }
  const input = []
  for (let i = 0; i< rest.length; i++) {
    if (i%2 === 0) {
      input.push([rest[i], rest[i+1]])
    }
  }
  console.log(input)
  let allCountIndex = 0
  for (let i=0; i<input.length; i++) {
    const item = input[i]
    let [val, count] = item
    while (count > 0) {
      arr[Math.floor(allCountIndex/row)][allCountIndex%row] = val
      count--
      allCountIndex++
    }
  }
  return arr
}

const g = gray(
  [10, 10, 255, 34, 0, 1, 255, 8, 0, 3, 255, 6, 0, 5, 255, 4, 0, 7, 255, 2, 0, 9, 255, 21]
)
console.log(g)