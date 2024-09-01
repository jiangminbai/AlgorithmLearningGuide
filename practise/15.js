function direction ([y1, x1], [y2, x2]) {
  if (x2 - x1 === 0) {
    if (y2 > y1) return 'right'
    return 'left'
  }

  if (y2 - y1 === 0) {
    if (x2 > x1) return 'top'
    return 'bottom'
  }

  if (x2 > x1) {
    if (y2 > x1) return 'right_top'
    return 'right_bottom'
  }

  if (x2 < x1) {
    if (y2 < y1) return 'left_bottom'
    return 'left_top'
  }
}
function simple(data) {
  const directions = ['origin']
  const res = data.slice(0, 1)

  for (let i = 1; i < data.length; i++) {
    directions.push(direction(data[i - 1], data[i]))
  }

  for (let i = 1; i < data.length; i++) {
    if (directions[i] !== directions[i+1]) {
      res.push(data[i])
    }
  }
  console.log(directions)
  return res
}

const s = simple(
  [
    [2, 8],
    [3, 7],
    [3, 6],
    [3, 5],
    [4, 4],
    [5, 3],
    [6, 2],
    [7, 3],
    [8, 4],
    [7, 5],
  ]
)

console.log(s)