function average(arr) {
  if (!arr.length) return 0
  const all = arr.reduce((num, item) => num + item, 0)
  return all/arr.length
}
function timeField(
  minAverageLost,
  fails
) {
  
  let tfs = []
  let i = 0;
  while(i < fails.length) {
    let tf = []
    while(i < fails.length) {
      tf.push(fails[i])
      if (average(tf) <= minAverageLost) {
        i++
      } else {
        if (fails[i] <= minAverageLost) {
          i--
        }
        tf.pop()
        break
      }
    }
    tf.length && tfs.push(tf)
    i++
  }
  console.log(tfs)
}

const t = timeField(
  1,
  [0, 1, 2, 3, 4]
)

console.log(t)

const t1 = timeField(
  2,
  [0, 0, 100, 2, 2, 99, 0, 2]
)

console.log(t1)